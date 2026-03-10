import { useState } from 'react'
import MainLayout from '../layouts/main-layout/Main'
import BodyLayout from '../layouts/body-layout/Body'
import Button from '../components/button/Button'
import Heart from '../components/heart/Heart'
import Card from '../components/card/Card'
import Text from '../components/text/Text'

export default function Home() {
  const [showPoem, setShowPoem] = useState(false)
  const [bootComplete, setBootComplete] = useState(false)

  const lovePoem = `The sun is setting on the palace wall,
We conquered every storm and stood through all,
We consternation not the sudden fall,
For love has built the tower strong and tall,

The asphalt road that records everything,
Guide our spirit in the lessons of life,
And now you’re walking with me as my wife,
And living everyday without a strife,

Our story is a loop that has no end,
This broken soul of mine that you have mend,
To the summit our devotion ascend,
On this sacred bond we shall both depend,

The jade and gold shall never lose its shine,
My love, you are always forever mine,
A love that intertwine the holy line,
Beyond the reach of even space and time.
`

  if (!bootComplete) {
    return (
      <div className="boot-screen">
        <div className="boot-text">
          <Text 
            text="LOADING.. PLEASE WAIT_"
            speed={20}
            onComplete={() => setTimeout(() => setBootComplete(true), 500)}
          />
        </div>
      </div>
    )
  }

  if (showPoem) {
    return (
      <MainLayout>
        <Button onClick={() => setShowPoem(false)} variant="secondary">
          RETURN_TO_MAIN
        </Button>
        <BodyLayout title="EPISTLE XII : LIFE LONG PROMISE" verseNumber={1}>
          <pre className="poem-text">{lovePoem}</pre>
        </BodyLayout>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <div className="home-content">
        <Heart size="large" />
        
        <Card title="SYSTEM_MESSAGE" variant="love">
          <p className="welcome-text">
            <Text 
              text="HI BABY! THIS IS THE MISSING EPISTLE. THE EPISTLE OF PROMISE TO LOVE YOU FOREVER TILL THE DAY THAT I DIE"
              speed={30}
            />
          </p>
        </Card>

        <div className="action-grid">
          <Button onClick={() => setShowPoem(true)} variant="primary">
            READ_POEM
          </Button>
        </div>

        <div className="stats-panel">
          <div className="stat-line">
            <span>Hey pretty baby! I just want to greet you happy happy birthday!</span>
          </div>
          <div className="stat-line">
            <span>Enjoy your day mahal ko, more birthdays to come ^^</span>
          </div>
          <div className="stat-line">
            <span>Wag mong kakalimutang mahal na mahal ka palagi ng boyfriend mo</span>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}