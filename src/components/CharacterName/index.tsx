import { useContext } from 'react'
import { SheetContext } from '../../pages/NewSheet/SheetContextProvider'
import { CharacterNameContainer } from './styles'

export function CharacterName() {
  const { charName, updateCharName } = useContext(SheetContext)

  return (
    <CharacterNameContainer>
      <input
        type="text"
        placeholder="Character Name"
        value={charName}
        onChange={(event) => updateCharName(event.target.value)}
      />
    </CharacterNameContainer>
  )
}
