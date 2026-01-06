'use client';

import { useEffect, useMemo, useState } from 'react';
import { Button } from '@/components/Button';
import { RadioGroup, Radio } from '@/components/Radio';
import { Progress } from '@/components/Progress';
import { Card, CardHeader } from '@/components/Card';
import confetti from 'canvas-confetti';
import { CloseIcon, InfoIcon } from '@/components/icons';
import { type DomainShort, type QuestionItem } from '@/types';
import { sleep, formatTimer } from '@/lib/helpers';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import useTimer from '@/hooks/useTimer';
import { type Answer } from '@/types';

interface SurveyProps {
  questions: QuestionItem[];
  userEmail: string;
  userName: string;
  debug?: boolean;
}

const saveTest = (result: any) => {
      return fetch(`${window.TEST_CONFIG.SUBMIT_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-WP-NONCE': window.TEST_CONFIG.WP_NONCE,
        },
        credentials: 'same-origin',
        body: JSON.stringify(result),
      })
        .then((response) => response.json())
}

export const Survey = ({
  questions,
  userEmail,
  userName,
  debug = false
}: SurveyProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionsPerPage, setQuestionsPerPage] = useState(1);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [loading, setLoading] = useState(false);
  const [restored, setRestored] = useState(false);
  const [inProgress, setInProgress] = useState(false);
  const { width } = useWindowDimensions();
  const [error, setError] = useState<string | null>(null);
  const [movedForward, setMovedForward] = useState(false);
  
  const isTestDone = questions.length === answers.length;
  const seconds = useTimer(isTestDone);

  useEffect(() => {
    const handleResize = () => {
      setQuestionsPerPage(window.innerWidth > 768 ? 3 : 1);
    };
    handleResize();
  }, [width]);

  useEffect(() => {
    const restoreData = () => {
      if (dataInLocalStorage()) {
        console.log('Restoring data from local storage');
        restoreDataFromLocalStorage();
      }
    };
    restoreData();
  }, []);

  const currentQuestions = useMemo(
    () =>
      questions.slice(
        currentQuestionIndex,
        currentQuestionIndex + questionsPerPage
      ),
    [currentQuestionIndex, questions, questionsPerPage]
  );

  const progress = Math.round((answers.length / questions.length) * 100);

  const nextButtonDisabled =
    inProgress ||
    currentQuestionIndex + questionsPerPage > answers.length ||
    (isTestDone &&
      currentQuestionIndex === questions.length - questionsPerPage) ||
    loading;

  const backButtonDisabled = currentQuestionIndex === 0 || loading;

  async function handleAnswer(id: string, value: string) {
    setMovedForward(true);
    const question = questions.find((question) => question.id === id);
    if (!question) return;

    const newAnswer: Answer = {
      id,
      score: Number(value),
      domain: question.domain as DomainShort,
      facet: question.facet
    };

    setAnswers((prevAnswers) => [
      ...prevAnswers.filter((a) => a.id !== id),
      newAnswer
    ]);

    const latestAnswerId = answers.slice(-1)[0]?.id;

    if (
      questionsPerPage === 1 &&
      questions.length !== answers.length + 1 &&
      id !== latestAnswerId
    ) {
      setInProgress(true);
      await sleep(700);
      setCurrentQuestionIndex((prev) => prev + 1);
      window.scrollTo(0, 0);
      setInProgress(false);
    }
    populateDataInLocalStorage();
  }

  function handlePreviousQuestions() {
    setCurrentQuestionIndex((prev) => prev - questionsPerPage);
    window.scrollTo(0, 0);
  }

  function handleNextQuestions() {
    if (inProgress) return;
    setCurrentQuestionIndex((prev) => prev + questionsPerPage);
    window.scrollTo(0, 0);
    if (restored) setRestored(false);
  }

  function skipToEnd() {
    const randomAnswers = questions
      .map((question) => ({
        id: question.id,
        score: Math.floor(Math.random() * 5) + 1,
        domain: question.domain,
        facet: question.facet
      }))
      .slice(0, questions.length - 1);

    setAnswers([...randomAnswers] as any);
    setCurrentQuestionIndex(questions.length - 1);
  }

  async function submitTest() {
    setLoading(true);
    setError(null);

    try {
      const result = await saveTest({
        timeElapsed: seconds,
        email: userEmail,
        name: userName,
        answers
      });
      confetti({});
      localStorage.removeItem('inProgress');
      localStorage.removeItem('b5data');
      localStorage.removeItem('testUser');
      localStorage.setItem('resultId', result.id);
      window.location.href = result.redirectUrl
    } catch (error) {
      console.error('Error submitting test:', error);
      setError("Nepavyko pateikti testo. Bandykite dar kartą.");
    } finally {
      setLoading(false);
    }
  }

  function dataInLocalStorage() {
    return !!localStorage.getItem('inProgress');
  }

  function populateDataInLocalStorage() {
    localStorage.setItem('inProgress', 'true');
    localStorage.setItem(
      'b5data',
      JSON.stringify({ answers, currentQuestionIndex })
    );
  }

  function restoreDataFromLocalStorage() {
    const data = localStorage.getItem('b5data');
    if (data) {
      const { answers, currentQuestionIndex } = JSON.parse(data);
      setAnswers(answers);
      setCurrentQuestionIndex(currentQuestionIndex);
      setRestored(true);
    }
  }

  function clearDataInLocalStorage() {
    console.log('Clearing data from local storage');
    localStorage.removeItem('inProgress');
    localStorage.removeItem('b5data');
    location.reload();
  }

  return (
    <div className='mt-2 w-full md:w-2xl'>
      <Progress
        aria-label='Progress bar'
        value={progress}
        className='max-w'
        showValueLabel={true}
        label={formatTimer(seconds)}
        minValue={0}
        maxValue={100}
        size='lg'
        color='secondary'
      />
      {restored && !movedForward && (
        <Card className='mt-4 bg-warning/20 text-warning-600 dark:text-warning'>
          <CardHeader className='justify-between'>
            <Button isIconOnly variant='light' color='warning'>
              <InfoIcon />
            </Button>
            <p>
              Jūsų atsakymai buvo atkurti. Spustelėkite čia, jei norite&nbsp;
              <a
                className='underline cursor-pointer'
                onClick={clearDataInLocalStorage}
                aria-label='Clear data'
              >
                pradėti iš naujo
              </a>
              .
            </p>
            <Button
              isIconOnly
              variant='light'
              color='warning'
              onClick={() => setRestored(false)}
            >
              <CloseIcon />
            </Button>
          </CardHeader>
        </Card>
      )}

      {error && (
        <Card className='mt-4 bg-error/20 text-error-600 dark:text-error'>
          <CardHeader className='justify-between'>
            <p>{error}</p>
            <Button
              isIconOnly
              variant='light'
              color='danger'
              onClick={() => setError(null)}
            >
              <CloseIcon />
            </Button>
          </CardHeader>
        </Card>
      )}
      {currentQuestions.map((question) => (
        <div key={'q' + question.num} className='mb-8'>
          <h2 className='text-2xl my-4'>{question.text}</h2>
          <div className='mt-6'>
            <RadioGroup
              onValueChange={(value) => handleAnswer(question.id, value)}
              value={answers
                .find((answer) => answer.id === question.id)
                ?.score.toString()}
              color='secondary'
              isDisabled={inProgress}
              className='!space-y-0'
            >
              <div className='flex flex-col md:flex-row md:items-stretch md:justify-between gap-3 md:gap-2'>
                {question.choices.map((choice, index) => (
                  <div key={index + question.id} className='flex-1 min-w-0'>
                    <Radio
                      value={choice.score.toString()}
                      className='flex-col-reverse md:flex-col items-center justify-center text-center p-2 md:p-4s border-2 rounded-lg transition-all hover:border-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 has-[:checked]:border-purple-500 has-[:checked]:bg-purple-100 dark:has-[:checked]:bg-purple-900/30 has-[:checked]:shadow-md h-full min-h-[60px] md:min-h-[50px] [&>input]:hidden'
                    >
                      <span className='text-md md:text-sm font-medium whitespace-normal break-words'>{choice.text}</span>
                    </Radio>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>
        </div>
      ))}
      <div className='my-12 space-x-4 flex justify-center'>
        <Button
          color='primary'
          isDisabled={backButtonDisabled}
          onClick={handlePreviousQuestions}
        >
          Ankstesnis
        </Button>

        <Button
          color='primary'
          isDisabled={nextButtonDisabled}
          onClick={handleNextQuestions}
          type='button'
        >
          Toliau
        </Button>

        {isTestDone && (
          <Button
            color='secondary'
            onClick={submitTest}
            disabled={loading}
            isLoading={loading}
            type='button'
          >
            Peržiūrėti rezultatus
          </Button>
        )}

        {debug && !isTestDone && (
          <Button color='primary' onClick={skipToEnd} type='button'>
            Skip to end (dev)
          </Button>
        )}
      </div>
    </div>
  );
};
