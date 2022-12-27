import { useContext } from 'react'
import { SheetContext } from '../../../pages/NewSheet'
import { FieldContainer, TableContainer } from '../styles'

interface FieldProps {
  fieldKey: string
  fieldValue: number
}

export function PrimaryAttributesTable() {
  const { primaryAttributesTable, updatePrimaryAttributeField } =
    useContext(SheetContext)

  const { title, fields, minValue, maxValue } = primaryAttributesTable

  function handleUpdatePrimaryAttributeField(event: any) {
    updatePrimaryAttributeField(event.target.name, Number(event.target.value))
  }

  return (
    <TableContainer>
      <h1>{title}</h1>

      {fields.map((field: FieldProps) => {
        return (
          <FieldContainer key={field.fieldKey}>
            <label htmlFor={field.fieldKey}>{field.fieldKey}</label>
            <input
              type="number"
              id={field.fieldKey}
              name={field.fieldKey}
              placeholder="-"
              min={minValue}
              max={maxValue}
              value={field.fieldValue}
              onChange={handleUpdatePrimaryAttributeField}
            />
          </FieldContainer>
        )
      })}
    </TableContainer>
  )
}
