import { useState } from 'react'
import { PageContainer } from '../styles'
import { GenerateLifePath } from './GenerateLifePath'

type Race = 'Witcher' | 'Human' | 'Non-Human'
type pickedOptions = { [key: string]: string }

export function GameTools() {
  const [characterRace, setCharacterRace] = useState<Race>('Human')
  const [lifePath, setLifePath] = useState<pickedOptions>(
    GenerateLifePath('Human'),
  )

  function handleRerollLifePath(event: any) {
    setLifePath(GenerateLifePath(characterRace))
  }

  function handleRaceSelection(event: any) {
    setCharacterRace(event.target.value)
  }

  return (
    <PageContainer>
      <h1>Your Life Path</h1>

      <select onChange={handleRaceSelection} name="race" id="raceSelector">
        <option value="Witcher">Witcher</option>
        <option value="Human">Human</option>
        <option value="Non-Human">Non-Human</option>
      </select>

      <button type="button" onClick={handleRerollLifePath}>
        Reroll Lifepath
      </button>

      <div id="lifePath">
        {Object.entries(lifePath).map(([key, value]) => {
          return (
            <div key={key}>
              <h4>{key}</h4>
              <p>{value}</p>
            </div>
          )
        })}
      </div>

      {/* <h2>teste</h2> */}
      {/* {testRNGRandomness().map((result, index) => {
        return <p key={index}>{result}</p>
      })} */}
    </PageContainer>
  )
}
