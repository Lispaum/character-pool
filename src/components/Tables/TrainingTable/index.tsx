import { FieldContainer, TableContainer } from '../styles'

interface FieldProps {
  fieldKey: string
  fieldValue: number
}

interface TableProps {
  title: string
  fields: FieldProps[]
  minValue: number
  maxValue: number
  updateTrainingField: (skillName: string, newValue: number) => void
  updateSkillField: (skillName: string, newValue: number) => void
}

export function TrainingTable({
  title,
  fields,
  minValue,
  maxValue,
  updateTrainingField,
  updateSkillField,
}: TableProps) {
  function handleTraining(event: any) {
    updateTrainingField(event.target.name, Number(event.target.value))
    if (event.target.value > maxValue - 1) {
      updateSkillField(event.target.name, 1)
    }
  }

  return (
    <TableContainer>
      <h1>{title}</h1>

      {fields.map((field: FieldProps) => {
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
              onChange={handleTraining}
            />
          </FieldContainer>
        )
      })}
    </TableContainer>
  )
}
