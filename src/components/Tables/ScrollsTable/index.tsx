import { FieldContainer, TableContainer } from '../styles'

interface TableProps {
  title: string
  fields: string[]
  updateTrainingField: (skillName: string, newValue: number) => void
  updateScrollsField: (skillName: string) => void
}

export function ScrollsTable({
  title,
  fields,
  updateTrainingField,
  updateScrollsField,
}: TableProps) {
  function handleTrainScroll(event: any) {
    updateScrollsField(event.target.name)
    updateTrainingField(event.target.name, 0)
  }

  return (
    <TableContainer>
      <h1>{title}</h1>

      {fields.map((field: string) => {
        return (
          <FieldContainer key={field}>
            <button type="button" name={field} onClick={handleTrainScroll}>
              {field}
            </button>
          </FieldContainer>
        )
      })}
    </TableContainer>
  )
}
