import { useContext } from 'react'
import { SheetContext } from '../../pages/NewSheet/SheetContextProvider'
import { BackgroundContainer } from './styles'

export function Background() {
  const { background, updateBackground } = useContext(SheetContext)

  return (
    <BackgroundContainer>
      <textarea
        placeholder="Character's Background"
        value={background}
        onChange={(event) => updateBackground(event.target.value)}
      />
      <div>–Rodolf Kazmer</div>
    </BackgroundContainer>
  )
}
