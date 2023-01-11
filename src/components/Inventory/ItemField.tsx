import { useContext } from 'react'
import { SheetContext } from '../../pages/NewSheet/SheetContextProvider'
import { FieldContainer } from './styles'

interface ItemFieldProps {
  itemName: string
  boxName: string
  updateBox: (itemName: string) => void
}

export function ItemField({ itemName, boxName, updateBox }: ItemFieldProps) {
  const { updateDraggingItem } = useContext(SheetContext)

  function handleStartDraggingItem(event: any) {
    updateDraggingItem(event.target.title, boxName)
    console.log(event.target.text)
  }

  let deleteCountdown = 0
  let toDeleteItem = ''

  function deleteItem() {
    updateBox(toDeleteItem)
  }

  function startDeleteCountdown(event: any) {
    toDeleteItem = event.target.title
    deleteCountdown = setTimeout(deleteItem, 1000)
  }

  function stopDeleteCountdown() {
    clearTimeout(deleteCountdown)
  }

  return (
    <FieldContainer>
      <div draggable onDragStart={handleStartDraggingItem} title={itemName}>
        {itemName}
      </div>
      <span
        title={itemName}
        onMouseDown={startDeleteCountdown}
        onMouseUp={stopDeleteCountdown}
        onMouseLeave={stopDeleteCountdown}
      >
        x
      </span>
    </FieldContainer>
  )
}
