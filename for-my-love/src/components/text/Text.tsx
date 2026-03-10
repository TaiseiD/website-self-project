import { useState, useEffect } from 'react'
import Cursor from '../cursor/Cursor'

interface TextProps {
  text: string
  speed?: number
  onComplete?: () => void
  className?: string
}

export default function Text({ 
  text, 
  speed = 50, 
  onComplete,
  className = ''
}: TextProps) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)
      return () => clearTimeout(timeout)
    } else if (onComplete) {
      onComplete()
    }
  }, [currentIndex, text, speed, onComplete])

  return (
    <span className={`typewriter-text ${className}`}>
      {displayText}
      <Cursor />
    </span>
  )
}