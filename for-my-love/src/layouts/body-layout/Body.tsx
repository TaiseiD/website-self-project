import type { ReactNode } from 'react'
import Heart from '../../components/heart/Heart'

interface BodyLayoutProps {
  children: ReactNode
  title?: string
  verseNumber?: number
}

export default function BodyLayout({ 
  children, 
  title = "UNTITLED_POEM.DATA",
}: BodyLayoutProps) {
  return (
    <div className="poem-layout">
      <div className="poem-frame">
        <div className="poem-header">
          <span className="poem-file-icon">📄</span>
          <span className="poem-filename">{title}</span>
          <span className="poem-verse">EPISTLE XII</span>
        </div>
        
        <div className="poem-decoration top">
          <Heart size="small" />
        </div>
        
        <div className="poem-content">
          {children}
        </div>
        
        <div className="poem-decoration bottom">
          <Heart size="small" />
        </div>
        
        <div className="poem-footer">
          <span className="poem-eof">baby</span>
          <div className="poem-progress">
            <span>READING...</span>
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}