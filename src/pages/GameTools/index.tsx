import { useState } from 'react'
import { PageContainer } from '../styles'
import { roll, testRNGRandomness } from './gameTools'
import { GenerateLifePath } from './GenerateLifePath'

export function GameTools() {
  const [lifePath, setLifePath] = useState(GenerateLifePath())

  function handleRerollLifePath(event: any) {
    setLifePath(GenerateLifePath())
  }
  return (
    <PageContainer>
      <h1>Your Life Path</h1>
      <h2 onClick={handleRerollLifePath}>Again</h2>

      {Object.entries(lifePath).map(([key, value]) => {
        return (
          <div key={key}>
            <h4>{key}</h4>
            <p>{value}</p>
          </div>
        )
      })}

      <h2>teste</h2>
      {/* {testRNGRandomness().map((result, index) => {
        return <p key={index}>{result}</p>
      })} */}
    </PageContainer>
  )
}
