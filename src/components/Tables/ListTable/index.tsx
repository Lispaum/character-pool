import { useState } from 'react'
import { FieldContainer, TableContainer } from '../styles'

interface TableProps {
  title: string
  fields: string[]
}

export function ListTable({ title, fields }: TableProps) {
  const [tableFields, setTableFields] = useState(fields)
  // setTableFields(tableFields)

  return (
    <TableContainer>
      <h1>{title}</h1>

      {tableFields.map((field: string) => {
        return (
          <FieldContainer key={field}>
            <label htmlFor={field}>{field}</label>
          </FieldContainer>
        )
      })}
    </TableContainer>
  )
}
