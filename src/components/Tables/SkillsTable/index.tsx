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
  updateSkillField: (attributeName: string, newValue: number) => void
  updateTrainableSkillsField: (skillName: string) => void
}

export function SkillsTable({
  title,
  fields,
  minValue,
  maxValue,
  updateSkillField,
  updateTrainableSkillsField,
}: TableProps) {
  function handleUpdateField(event: any) {
    updateSkillField(event.target.name, Number(event.target.value))

    if (event.target.value < minValue + 1) {
      updateTrainableSkillsField(event.target.name)
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
              onChange={handleUpdateField}
            />
          </FieldContainer>
        )
      })}
    </TableContainer>
  )
}
