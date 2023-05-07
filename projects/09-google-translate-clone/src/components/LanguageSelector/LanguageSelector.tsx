import { Form } from 'react-bootstrap'
import { AutoLanguage, FromTo, Language } from '../../constants/constants'
import { type FromLanguage, type ToLanguage } from '../../types'

type Props =
  | { type: FromTo.From, value: FromLanguage, onChange: (language: FromLanguage) => void }
  | { type: FromTo.To, value: ToLanguage, onChange: (language: ToLanguage) => void }

export function LanguageSelector ({ type, value, onChange }: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language)
  }

  return (
    <Form.Select aria-label='Select a language' value={value} onChange={handleChange}>
      {type === FromTo.From ? <option value={AutoLanguage}>Auto detect</option> : null}
      {Object.entries(Language).map(([key, value]) => (
        <option key={key} value={key}>
          {value}
        </option>
      ))}
    </Form.Select>
  )
}
