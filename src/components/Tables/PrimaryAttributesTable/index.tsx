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
  handleUpdateField: (event: any) => void
}

export function PrimaryAttributesTable({
  title,
  fields,
  minValue,
  maxValue,
  handleUpdateField,
}: TableProps) {
  // const data = useContext(SheetContext)

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
              onChange={handleUpdateField}
            />
          </FieldContainer>
        )
      })}
    </TableContainer>
  )
}
