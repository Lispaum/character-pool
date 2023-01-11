import { useContext } from 'react'
import { SheetContext } from '../../../pages/NewSheet/SheetContextProvider'
import { ItemField } from '../ItemField'
import { BoxContainer } from '../styles'

export function Bag() {
  const {
    bagItems,
    draggingItem,
    updateBagItems,
    updateEquippedItems,
    updateHomeChestItems,
    updateNewItem,
  } = useContext(SheetContext)

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
          <ItemField
            key={field}
            itemName={field}
            boxName="bag"
            updateBox={updateBagItems}
          />
        )
      })}
    </BoxContainer>
  )
}
