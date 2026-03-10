import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  title?: string
  variant?: 'default' | 'love' | 'warning'
}

export default function Card(
    {   children, 
        title, 
        variant = 'default' 
    }: CardProps) {
  return (
    <div className={`retro-card retro-card--${variant}`}>
      {title && (
        <div className="retro-card__header">
          <span className="retro-card__icon">{variant === 'love' ? '♥' : '◘'}</span>
          {title}
        </div>
      )}
      <div className="retro-card__body">
        {children}
      </div>
    </div>
  )
}