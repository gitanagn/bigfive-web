import { useState, useEffect } from 'react'
import { getQuestions } from './lib/questions'
import { Survey } from './components/Survey'
import { UserForm } from './components/UserForm'

function B5Test() {
  const questions = getQuestions()

  const [testUser, setTestUser] = useState<{ name: string; email: string } | null>(null)

  const handleUserSubmit = (data: { name: string; email: string }) => {
    localStorage.setItem('testUser', JSON.stringify(data))
    setTestUser(data)
  }

  useEffect(() => {
    const storedUser = localStorage.getItem('testUser')
    if (storedUser) {
      try {
        const parsed = JSON.parse(storedUser)
        if (parsed.name && parsed.email) {
          setTestUser(parsed)
        }
      } catch (e) {
        // Invalid JSON, ignore
      }
    }
  }, [])

  const isUserReady = testUser?.name && testUser?.email

  return (
    <div>
      <div className="border-b border-gray-300  mb-6 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Asmenybės testas
        </h2>

        <p className="text-gray-600 mb-6 text-center">
          Atsakykite į klausimus ir sužinokite savo asmenybės tipą!
        </p>
      </div>

      {!isUserReady ? (
        <UserForm onSubmit={handleUserSubmit} />
      ) : <Survey
          questions={questions}
          userEmail={testUser.email}
          userName={testUser.name}
          debug={true}
        />
      }
    </div>
  )
}

export default B5Test
