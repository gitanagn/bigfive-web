import { useEffect, useState } from 'react'
import { Button } from './Button'
import { CodeList } from './CodeList'
import { useParams } from "react-router";

const MAX_CODES = 10

const compareTest = (result: any) => {
  console.log(window.TEST_CONFIG.COMPARE_URL)
  console.log('Comparing test with data:', result)
  return fetch(`${window.TEST_CONFIG.COMPARE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-WP-NONCE': window.TEST_CONFIG.WP_NONCE,
    },
    credentials: 'same-origin',
    body: JSON.stringify(result),
  }).then((response) => response.json())
}

function B5TestCompare() {
  const params = useParams<{ myCode?: string }>()
  const [codes, setCodes] = useState<string[]>([])
  const [currentCode, setCurrentCode] = useState(params.myCode || '')
  const [error, setError] = useState('')

  

  useEffect(() => {
    const code = localStorage.getItem('code')

    if (code) {
      setCodes([code])
    }
  }, [])

  const handleAddCode = () => {
    setError('')

    const trimmedCode = currentCode.trim()

    if (!trimmedCode) {
      setError('Įveskite kodą')
      return
    }

    if (codes.includes(trimmedCode)) {
      setError('Šis kodas jau pridėtas')
      return
    }

    if (codes.length >= MAX_CODES) {
      setError(`Galite pridėti ne daugiau nei ${MAX_CODES} kodų`)
      return
    }

    setCodes([...codes, trimmedCode])
    setCurrentCode('')
  }

  const handleRemoveCode = (codeToRemove: string) => {
    setCodes(codes.filter((code) => code !== codeToRemove))

    if (localStorage.getItem('code') === codeToRemove) {
      localStorage.removeItem('code')
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleAddCode()
    }
  }

  const handleCompare = () => {
    compareTest({ codes })
      .then((data) => {
        window.location = data.redirectUrl
      })
      .catch((err) => {
        console.error('Error comparing tests:', err)
      })
  }

  const canAddMore = codes.length < MAX_CODES

  return (
    <div className="max-w-2xl min-h-[50vh] mx-auto p-6">
      <div className="border-b border-gray-300 pb-6 mb-6 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Asmenybės testas
        </h2>

        <p className="text-gray-600 text-center">
          Norėdami palyginti testo rezultatus įveskite žmonių, kurie atliko
          testą, kodus.
        </p>
      </div>

      <div className="space-y-6">
        {/* Code input form */}
        <div className="space-y-4">
          <div>
            <label
              htmlFor="code"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              🔑 Testo kodas
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                id="code"
                value={currentCode}
                onChange={(e) => setCurrentCode(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Įveskite kodą"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                disabled={!canAddMore}
              />
              <Button
                type="button"
                onClick={handleAddCode}
                disabled={!canAddMore || !currentCode}
                className="px-6"
                color="brand"
              >
                Pridėti
              </Button>
            </div>
            {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
            <p className="text-gray-500 text-sm mt-2">
              Pridėta: {codes.length} / {MAX_CODES}
            </p>
          </div>
        </div>

        {/* Code list */}
        <CodeList codes={codes} onRemove={handleRemoveCode} />

        {/* Compare button */}
        {codes.length >= 2 && (
          <div className="pt-4">
            <Button
              onClick={handleCompare}
              className="w-full py-3 text-base"
              color="brand"
                type="button"
            >
              Palyginti rezultatus ({codes.length})
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default B5TestCompare
