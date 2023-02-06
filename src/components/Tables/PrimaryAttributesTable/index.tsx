import { useContext } from 'react'
import { SheetContext } from '../../../pages/NewSheet/SheetContextProvider'
import { FieldContainer, TableContainer } from '../styles'

export function PrimaryAttributesTable() {
  const { primaryAttributes, updatePrimaryAttribute } = useContext(SheetContext)

  function handleUpdatePrimaryAttribute(event: any) {
    updatePrimaryAttribute(event.target.name, Number(event.target.value))
  }

  return (
    <TableContainer>
      {Object.entries(primaryAttributes).map(
        ([attributeKey, attributeValue]) => {
          return (
            <FieldContainer key={attributeKey}>
              <label htmlFor={attributeKey}>{attributeKey}</label>
              <input
                type="number"
                id={attributeKey}
                name={attributeKey}
                placeholder="-"
                min={1}
                max={20}
                value={attributeValue}
                onChange={handleUpdatePrimaryAttribute}
              />
            </FieldContainer>
          )
        },
      )}
    </TableContainer>
  )
}
