import { FieldContainer, TableContainer } from '../styles'

interface TableProps {
  title: string
  fields: string[]
}

export function ListTable({ title, fields }: TableProps) {
  return (
    <TableContainer>
      <h1>{title}</h1>

      {fields.map((field: string) => {
        return (
          <FieldContainer key={field}>
            <div>{field}</div>
          </FieldContainer>
        )
      })}
    </TableContainer>
  )
}
