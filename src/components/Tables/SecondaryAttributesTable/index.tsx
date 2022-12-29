import { useContext } from 'react'
import { SheetContext } from '../../../pages/NewSheet/SheetContextProvider'
import { FieldContainer, TableContainer } from '../styles'

interface FieldProps {
  fieldKey: string
  fieldValue: number
}

export function SecondaryAttributesTable() {
  const { secondaryAttributesTable } = useContext(SheetContext)

  const { title, fields } = secondaryAttributesTable

  return (
    <TableContainer>
      <h1>{title}</h1>

      {fields.map((field: FieldProps) => {
        return (
          <FieldContainer key={field.fieldKey}>
            <label htmlFor={field.fieldKey}>{field.fieldKey}</label>
            <input
              readOnly
              type="number"
              id={field.fieldKey}
              name={field.fieldKey}
              placeholder="-"
              value={field.fieldValue}
            />
          </FieldContainer>
        )
      })}
    </TableContainer>
  )
}
