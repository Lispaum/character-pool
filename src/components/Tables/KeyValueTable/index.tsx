import { useState } from 'react'
import { FieldContainer, TableContainer } from '../styles'

interface FieldProps {
  fieldKey: string
  fieldValue: number
}

interface TableProps {
  title: string
  minValue: number
  maxValue: number
  fields: FieldProps[]
}

export function KeyValueTable({
  title,
  fields,
  minValue,
  maxValue,
}: TableProps) {
  const [tableFields, setTableFields] = useState(fields)
  // const data = useContext(SheetContext)
  function handleFieldValueChange(event: any) {
    let newTableFields = tableFields

    newTableFields = newTableFields.map((field) => {
      if (field.fieldKey === event.target.name) {
        return { ...field, fieldValue: Number(event.target.value) }
      }

      return field
    })

    setTableFields(newTableFields)
  }

  return (
    <TableContainer>
      <h1>{title}</h1>

      {tableFields.map((field: FieldProps) => {
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
              onChange={handleFieldValueChange}
            />
          </FieldContainer>
        )
      })}
    </TableContainer>
  )
}
