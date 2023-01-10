import { useContext } from 'react'
import { SheetContext } from '../../../pages/NewSheet/SheetContextProvider'
import { BoxContainer, FieldContainer } from '../styles'

export function NewItem() {
  const { newItem, updateDraggingItem, updateNewItem } =
    useContext(SheetContext)

  function handleStartDraggingItem(event: any) {
    updateDraggingItem(event.target.title, 'new-item')
  }

  return (
    <BoxContainer>
      <h1>New Item</h1>
      <FieldContainer>
        <input
          draggable
          onDragStart={handleStartDraggingItem}
          title={newItem}
          type="text"
          placeholder="+"
          value={newItem}
          onChange={(event) => updateNewItem(event.target.value)}
        />
      </FieldContainer>
    </BoxContainer>
  )
}
