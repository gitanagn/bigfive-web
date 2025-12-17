import { useState } from 'react'
import { Button } from './Button'

interface UserFormProps {
  onSubmit: (data: { name: string; email: string }) => void
}

export const UserForm = ({ onSubmit }: UserFormProps) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

    if (!name.trim() || !email || !email.includes('@') || !agreedToPrivacy) {
      return
    }

    setIsSubmitting(true)
    onSubmit({ name: name.trim(), email })
  }

  const isValid = name.trim() && email && email.includes('@') && agreedToPrivacy

  return (
    <div className="w-md mx-auto">
      <p className="mb-6 text-center">
        Norėdami pradėti testą, įveskite savo vardą ir el. pašto adresą žemiau.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            👤 Vardas
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jūsų vardas"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            ✉️ El. pašto adresas
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="vardas@email.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
            required
          />
        </div>

        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="privacy"
            checked={agreedToPrivacy}
            onChange={(e) => setAgreedToPrivacy(e.target.checked)}
            className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            required
          />
          <label
            htmlFor="privacy"
            className="text-sm text-gray-700"
          >
            Sutinku, kad šis el. pašto adresas bus naudojamas testo rezultatams išsiųsti. Skaičiau ir sutinku su{' '}
            <a
              href="/privatumo-politika"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              privatumo politika
            </a>
            .
          </label>
        </div>

        <Button
          type="submit"
          disabled={!isValid || isSubmitting}
          isLoading={isSubmitting}
          className="w-full py-3 text-base"
          color="primary"
        >
          {isSubmitting ? 'Kraunama...' : 'Tęsti'}
        </Button>
      </form>
    </div>
  )
}
