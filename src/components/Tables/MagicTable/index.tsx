import { FieldContainer, TableContainer } from '../styles'

interface TableProps {
  title: string
  fields: string[]
  updateMagicField: (magicName: string) => void
  updateScrollsField: (magicName: string) => void
}

export function MagicTable({
  title,
  fields,
  updateMagicField,
  updateScrollsField,
}: TableProps) {
  function handleUpdateField(event: any) {
    updateScrollsField(event.target.name)
    updateMagicField(event.target.name)
  }

  return (
    <TableContainer>
      <h1>{title}</h1>

      {fields.map((field: string) => {
        return (
          <FieldContainer key={field}>
            <button type="button" name={field} onClick={handleUpdateField}>
              {field}
            </button>
          </FieldContainer>
        )
      })}
    </TableContainer>
  )
}
