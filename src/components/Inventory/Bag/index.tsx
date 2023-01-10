import { useContext } from 'react'
import { SheetContext } from '../../../pages/NewSheet/SheetContextProvider'
import { BoxContainer, FieldContainer } from '../styles'

export function Bag() {
  const {
    bagItems,
    draggingItem,
    updateDraggingItem,
    updateBagItems,
    updateEquippedItems,
    updateHomeChestItems,
    updateNewItem,
  } = useContext(SheetContext)

  function handleStartDraggingItem(event: any) {
    updateDraggingItem(event.target.title, 'bag')
  }

  function handleFieldDropped(event: any) {
    event.preventDefault()
    const source = draggingItem.fieldSource
    if (source === 'bag') return
    updateBagItems(draggingItem.fieldName)

    if (source === 'equipped') {
      updateEquippedItems(draggingItem.fieldName)
    } else if (source === 'home-chest') {
      updateHomeChestItems(draggingItem.fieldName)
    } else if (source === 'new-item') {
      updateNewItem('')
    }
  }

  return (
    <BoxContainer
      onDragOver={(event) => event.preventDefault()}
      onDrop={handleFieldDropped}
    >
      <h1>Bag</h1>

      {bagItems.map((field: string) => {
        return (
          <FieldContainer key={field}>
            <div draggable onDragStart={handleStartDraggingItem} title={field}>
              {field}
            </div>
          </FieldContainer>
        )
      })}
    </BoxContainer>
  )
}
