import { CodeItem } from './CodeItem'

interface CodeListProps {
  codes: string[]
  onRemove: (code: string) => void
}

export function CodeList({ codes, onRemove }: CodeListProps) {
  if (codes.length === 0) return null

  return (
    <div className="space-y-3">
      <h3 className="font-medium text-gray-800">Pridėti kodai:</h3>
      <ul className="space-y-2">
        {codes.map((code, index) => (
          <CodeItem
            key={code}
            code={code}
            index={index}
            onRemove={onRemove}
          />
        ))}
      </ul>
    </div>
  )
}
