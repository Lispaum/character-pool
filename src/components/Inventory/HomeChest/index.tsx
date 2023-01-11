import { useContext } from 'react'
import { SheetContext } from '../../../pages/NewSheet/SheetContextProvider'
import { ItemField } from '../ItemField'
import { BoxContainer } from '../styles'

export function HomeChest() {
  const {
    homeChestItems,
    draggingItem,
    updateBagItems,
    updateEquippedItems,
    updateHomeChestItems,
    updateNewItem,
  } = useContext(SheetContext)

  function handleFieldDropped(event: any) {
    event.preventDefault()
    const source = draggingItem.fieldSource

    if (source === 'home-chest') return
    updateHomeChestItems(draggingItem.fieldName)

    if (source === 'equipped') {
      updateEquippedItems(draggingItem.fieldName)
    } else if (source === 'bag') {
      updateBagItems(draggingItem.fieldName)
    } else if (source === 'new-item') {
      updateNewItem('')
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
          <ItemField
            key={field}
            itemName={field}
            boxName="home-chest"
            updateBox={updateHomeChestItems}
          />
        )
      })}
    </BoxContainer>
  )
}
