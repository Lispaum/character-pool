import { useContext } from 'react'
import { SheetContext } from '../../../pages/NewSheet/SheetContextProvider'
import { BoxContainer, FieldContainer } from '../styles'

export function HomeChest() {
  const {
    homeChestItems,
    draggingItem,
    updateDraggingItem,
    updateBagItems,
    updateEquippedItems,
    updateHomeChestItems,
  } = useContext(SheetContext)

  function handleStartDraggingItem(event: any) {
    updateDraggingItem(event.target.title, 'home-chest')
    console.log(event.target.text)
  }

  function handleFieldDropped(event: any) {
    event.preventDefault()
    updateHomeChestItems(draggingItem.fieldName)

    const source = draggingItem.fieldSource
    if (source === 'equipped') {
      updateEquippedItems(draggingItem.fieldName)
    } else if (source === 'bag') {
      updateBagItems(draggingItem.fieldName)
    }
  }

  return (
    <BoxContainer
      onDragOver={(event) => event.preventDefault()}
      onDrop={handleFieldDropped}
    >
      <h1>Home Chest</h1>

      {homeChestItems.map((field: string) => {
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
