import { useContext } from 'react'
import { SheetContext } from '../../pages/NewSheet/SheetContextProvider'
import { BackgroundContainer } from './styles'

export function Background() {
  const { background, updateBackground } = useContext(SheetContext)

  function showBackground() {
    const popup = document.getElementById('backgroundPopup')
    console.log(popup)
    popup?.classList.toggle('show')
  }

  return (
    <BackgroundContainer onClick={showBackground}>
      Background
      <div id="backgroundPopup">
        <textarea
          placeholder="Character's Background"
          value={background}
          onChange={(event) => updateBackground(event.target.value)}
        />
        <div>– Rodolf Kazmer</div>
      </div>
    </BackgroundContainer>
  )
}
