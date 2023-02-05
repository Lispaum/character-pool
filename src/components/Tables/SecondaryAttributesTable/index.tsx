import { useContext } from 'react'
import { SheetContext } from '../../../pages/NewSheet/SheetContextProvider'
import { FieldContainer, TableContainer } from '../styles'

export function SecondaryAttributesTable() {
  const { secondaryAttributesTable } = useContext(SheetContext)

  const { title, fields } = secondaryAttributesTable

  const secondaryAttributes = Object.entries(fields)

  return (
    <TableContainer>
      <h1>{title}</h1>

      {secondaryAttributes.map(([attributeKey, attributeValue]) => {
        return (
          <FieldContainer key={attributeKey}>
            <label htmlFor={attributeKey}>{attributeKey}</label>
            <input
              readOnly
              type="number"
              id={attributeKey}
              name={attributeKey}
              placeholder="-"
              value={attributeValue}
            />
          </FieldContainer>
        )
      })}
    </TableContainer>
  )
}
