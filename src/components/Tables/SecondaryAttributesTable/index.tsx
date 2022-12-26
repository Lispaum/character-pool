import { FieldContainer, TableContainer } from '../styles'

interface FieldProps {
  fieldKey: string
  fieldValue: number
}

interface TableProps {
  title: string
  fields: FieldProps[]
}

export function SecondaryAttributesTable({ title, fields }: TableProps) {
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
