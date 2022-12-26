import { FieldContainer, TableContainer } from '../styles'

interface TableProps {
  title: string
  fields: string[]
  updateTrainingField: (skillName: string, newValue: number) => void
  updateTrainableSkillsField: (skillName: string) => void
}

export function TrainableSkillsTable({
  title,
  fields,
  updateTrainingField,
  updateTrainableSkillsField,
}: TableProps) {
  function handleTrainSkill(event: any) {
    updateTrainableSkillsField(event.target.name)
    updateTrainingField(event.target.name, 0)
  }

  return (
    <TableContainer>
      <h1>{title}</h1>

      {fields.map((field: string) => {
        return (
          <FieldContainer key={field}>
            <button
              draggable="true"
              type="button"
              name={field}
              onClick={handleTrainSkill}
            >
              {field}
            </button>
          </FieldContainer>
        )
      })}
    </TableContainer>
  )
}
