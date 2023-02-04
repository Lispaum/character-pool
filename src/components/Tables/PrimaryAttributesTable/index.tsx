import { useContext } from 'react'
import { SheetContext } from '../../../pages/NewSheet/SheetContextProvider'
import { FieldContainer, TableContainer } from '../styles'

export function PrimaryAttributesTable() {
  const { primaryAttributesTable, updatePrimaryAttributeField } =
    useContext(SheetContext)

  const { title, fields, minValue, maxValue } = primaryAttributesTable

  function handleUpdatePrimaryAttributeField(event: any) {
    updatePrimaryAttributeField(event.target.name, Number(event.target.value))
  }

  const primaryAttributes = Object.entries(fields)

  return (
    <TableContainer>
      <h1>{title}</h1>

      {primaryAttributes.map(([attributeKey, attributeValue]) => {
        return (
          <FieldContainer key={attributeKey}>
            <label htmlFor={attributeKey}>{attributeKey}</label>
            <input
              type="number"
              id={attributeKey}
              name={attributeKey}
              placeholder="-"
              min={minValue}
              max={maxValue}
              value={attributeValue}
              onChange={handleUpdatePrimaryAttributeField}
            />
          </FieldContainer>
        )
      })}
    </TableContainer>
  )
}
