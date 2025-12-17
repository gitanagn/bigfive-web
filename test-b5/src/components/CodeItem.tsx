import { useEffect, useState } from 'react'

type CodeItemStatus = 'loading' | 'success' | 'error'

const fetchTestName = (code: string) => {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 5000)

  return fetch(`${window.TEST_CONFIG.TEST_ID_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-WP-NONCE': window.TEST_CONFIG.WP_NONCE,
    },
    credentials: 'same-origin',
    body: JSON.stringify({ code }),
    signal: controller.signal,
  }).then((response) => {
    clearTimeout(timeoutId)
    if (!response.ok) throw new Error('Failed to fetch')
    return response.json()
  })
}

interface CodeItemProps {
  code: string
  index: number
  onRemove: (code: string) => void
}

export function CodeItem({ code, index, onRemove }: CodeItemProps) {
  const [status, setStatus] = useState<CodeItemStatus>('loading')
  const [name, setName] = useState<string>('')

  useEffect(() => {
    setStatus('loading')
    fetchTestName(code)
      .then(({data}) => {
        console.log(data)
        setName(data.name || '')
        setStatus('success')
      })
      .catch(() => {
        setStatus('error')
      })
  }, [code])

  return (
    <li className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-lg border border-gray-200">
      <div className="flex items-center gap-3">
        <span className="text-gray-700">
          {index + 1}. {code}
        </span>
        {status === 'loading' && (
          <svg
            className="animate-spin h-4 w-4 text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {status === 'success' && name && (
          <span className="text-gray-500">— <span className='font-bold'>{name}</span></span>
        )}
        {status === 'error' && (
          <span className="text-red-600 text-sm">Nepavyko</span>
        )}
      </div>
      <button
        onClick={() => onRemove(code)}
        className="text-red-600 hover:text-red-800 transition-colors px-2"
        aria-label={`Pašalinti ${code}`}
      >
        ✕
      </button>
    </li>
  )
}
