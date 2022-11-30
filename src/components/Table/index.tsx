import { FieldContainer, TableContainer } from './styles'

interface FieldProps {
  fieldKey: string
  fieldValue: number
}

interface TableProps {
  fields: FieldProps[]
}

export function Table(props: TableProps) {
  return (
    <TableContainer>
      {props.fields.map((field: FieldProps) => {
        return (
          <FieldContainer key={field.fieldKey}>
            <span>{field.fieldKey}</span>
            <span>{field.fieldValue}</span>
          </FieldContainer>
        )
      })}
    </TableContainer>
  )
}
