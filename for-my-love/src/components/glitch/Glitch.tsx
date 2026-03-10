interface GlitchTextProps {
  text: string
  className?: string
}

export default function GlitchText(
    {   text, 
        className = '' 
    }: GlitchTextProps) {
  return (
    <div className={`glitch-text ${className}`} data-text={text}>
      {text}
    </div>
  )
}