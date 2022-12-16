import { useState } from 'react'
import { FieldContainer, TableContainer } from '../styles'

interface FieldProps {
  fieldKey: string
  fieldValue: number
}

interface TableProps {
  title: string
  fields: FieldProps[]
}

export function TrainingTable({ title, fields }: TableProps) {
  const [tableFields, setTableFields] = useState(fields)

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
              value={field.fieldValue}
              onChange={handleFieldValueChange}
            />
          </FieldContainer>
        )
      })}
    </TableContainer>
  )
}
