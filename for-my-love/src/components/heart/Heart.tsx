interface HeartProps {
  size?: 'small' | 'medium' | 'large'
  animated?: boolean
}

export default function Heart(
    {   size = 'medium', 
        animated = true }: HeartProps) {
  const sizeMap = {
    small: 'heart-pixel--sm',
    medium: 'heart-pixel--md',
    large: 'heart-pixel--lg'
  }

  return (
    <div className={`heart-pixel ${sizeMap[size]} ${animated ? 'heart-pixel--pulse' : ''}`}>
      <pre className="heart-ascii">
{` ███   ███ 
███████████
███████████
 █████████ 
  ███████  
   █████   
    ███    
     █     `}
      </pre>
    </div>
  )
}