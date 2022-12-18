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
  updateMagicField: (magicName: string) => void
}

export function TrainingTable({
  title,
  fields,
  minValue,
  maxValue,
  updateTrainingField,
  updateSkillField,
  updateMagicField,
}: TableProps) {
  function handleTraining(event: any) {
    const fieldName = event.target.name
    const fieldValue = event.target.value

    updateTrainingField(fieldName, Number(fieldValue))

    if (fieldValue > maxValue - 1) {
      if (fieldName.includes('Sign')) {
        updateMagicField(fieldName)
      } else {
        updateSkillField(fieldName, 1)
      }
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
