import { useContext } from 'react'
import { SheetContext } from '../../../pages/NewSheet/SheetContextProvider'
import { BoxContainer, FieldContainer } from '../styles'

export function Equipped() {
  const {
    equippedItems,
    draggingItem,
    updateDraggingItem,
    updateBagItems,
    updateEquippedItems,
    updateHomeChestItems,
    updateNewItem,
  } = useContext(SheetContext)

  function handleStartDraggingItem(event: any) {
    updateDraggingItem(event.target.title, 'equipped')
  }

  function handleFieldDropped(event: any) {
    event.preventDefault()
    const source = draggingItem.fieldSource

    if (source === 'equipped') return

    updateEquippedItems(draggingItem?.fieldName)

    if (source === 'bag') {
      updateBagItems(draggingItem.fieldName)
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
      <h1>Equipped</h1>

      {equippedItems.map((field: string) => {
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
