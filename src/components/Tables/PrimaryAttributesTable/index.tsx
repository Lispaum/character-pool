import { FieldContainer, TableContainer } from '../styles'

interface FieldProps {
  fieldKey: string
  fieldValue: number
}

interface TableProps {
  title: string
  fields: FieldProps[]
  minValue: number
  maxValue: number
  updatePrimaryAttributeField: (attributeName: string, newValue: number) => void
}

export function PrimaryAttributesTable({
  title,
  fields,
  minValue,
  maxValue,
  updatePrimaryAttributeField,
}: TableProps) {
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
