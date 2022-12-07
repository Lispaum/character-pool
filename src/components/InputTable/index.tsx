import { FieldContainer, TableContainer } from './styles'

interface FieldProps {
  fieldKey: string
  fieldValue?: number
}

interface TableProps {
  tableData: { title: string; data: FieldProps[] }
}

export function Table({ tableData }: TableProps) {
  return (
    <TableContainer>
      <h1>{tableData.title}</h1>
      {tableData.data.map((field: FieldProps) => {
        return (
          <FieldContainer key={field.fieldKey}>
            <span>{field.fieldKey}</span>
            {field.fieldValue && <span>{field.fieldValue}</span>}
          </FieldContainer>
        )
      })}
    </TableContainer>
  )
}
