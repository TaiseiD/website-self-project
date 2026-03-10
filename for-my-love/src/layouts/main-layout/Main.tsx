import type { ReactNode } from 'react'
import GlitchText from '../../components/glitch/Glitch'
import Text from '../../components/text/Text'

interface MainLayoutProps {
  children: ReactNode
}

export default function MainLayout(
    { children }: MainLayoutProps
) {
  return (
    <div className="main-layout">
      <header className="main-header">
        <div className="header-decoration">╔══════════════════════════════╗</div>
        <GlitchText text="FOR MY GABRIELEE" className="main-title" />
        <div className="header-subtitle">
            <Text text="YOU FOUND THE MISSNG EPISTLE" speed={30} />
        </div>
        <div className="header-decoration">╚══════════════════════════════╝</div>
      </header>
      
      <main className="main-content">
        {children}
      </main>
      
      <footer className="main-footer">
        <div className="footer-line">
          <span className="footer-blink">♥</span>
            always remember that i will always love you
          <span className="footer-blink">♥</span>
        </div>
      </footer>
    </div>
  )
}