import { FieldContainer, TableContainer } from './styles'

interface FieldProps {
  fieldKey: string
  fieldValue?: number
}

interface TableProps {
  tableData: { title: string; data: FieldProps[]; hasValues: boolean }
}

export function InputTable({ tableData }: TableProps) {
  return (
    <TableContainer>
      <h1>{tableData.title}</h1>

      {tableData.data.map((field: FieldProps) => {
        return (
          <FieldContainer key={field.fieldKey}>
            <label>{field.fieldKey}</label>
            {tableData.hasValues ? (
              <input
                type="number"
                id={field.fieldKey}
                placeholder="-"
                value={field.fieldValue}
              />
            ) : (
              ''
            )}
          </FieldContainer>
        )
      })}
    </TableContainer>
  )
}