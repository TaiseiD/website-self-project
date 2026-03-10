import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'danger'
  disabled?: boolean
}

export default function Button({ 
  children, 
  onClick, 
  variant = 'primary',
  disabled = false 
}: ButtonProps) {
  return (
    <button 
      className={`retro-btn retro-btn--${variant} ${disabled ? 'retro-btn--disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="retro-btn__bracket">[</span>
      {children}
      <span className="retro-btn__bracket">]</span>
    </button>
  )
}