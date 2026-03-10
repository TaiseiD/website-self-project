import Cursor from "../cursor/Cursor"

interface InputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  label?: string
  type?: 'text' | 'password'
}

export default function Input({ 
  value, 
  onChange, 
  placeholder = '',
  label,
  type = 'text'
}: InputProps) {
  return (
    <div className="retro-input-group">
      {label && <label className="retro-label">{label}:</label>}
      <div className="retro-input-wrapper">
        <span className="retro-input__prompt">&gt;</span>
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="retro-input"
        />
        <Cursor />
      </div>
    </div>
  )
}