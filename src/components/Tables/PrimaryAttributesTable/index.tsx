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

  const attributesKeys = Object.keys(fields)

  return (
    <TableContainer>
      <h1>{title}</h1>

      {attributesKeys.map((attributeKey: string) => {
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
              value={fields[attributeKey]}
              onChange={handleUpdatePrimaryAttributeField}
            />
          </FieldContainer>
        )
      })}
    </TableContainer>
  )
}
