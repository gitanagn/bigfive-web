import { getItems, getInfo } from '@/lib/questions';
import { Survey } from './survey';
import { saveTest } from '@/actions';
import { unstable_setRequestLocale } from 'next-intl/server';
import { TestLanguageSwitch } from './test-language-switch';
import {getTranslations} from 'next-intl/server';

const questionLanguages = getInfo().languages;

interface Props {
  params: { locale: string };
  searchParams: { lang?: string };
}

export default async function TestPage({
  params: { locale },
  searchParams: { lang }
}: Props) {
  unstable_setRequestLocale(locale);

const matchedLang = questionLanguages.find(
  (l) => l.code === (lang || locale)
);
const language: string = matchedLang?.code || 'en';

  const questions = await getItems(language);
  const t = await getTranslations('test');

  return (
    <>
      <div className="flex">
        <TestLanguageSwitch
          availableLanguages={questionLanguages}
          language={language}
        />
      </div>
      <Survey
        questions={questions}
        nextText={t('next')}
        prevText={t('back')}
        resultsText={t('seeResults')}
        saveTest={saveTest}
        language={language}
      />
    </>
  );
}