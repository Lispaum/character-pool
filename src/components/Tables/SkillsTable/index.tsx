import { useContext } from 'react'
import { SheetContext } from '../../../pages/NewSheet/SheetContextProvider'
import { FieldContainer, TableContainer } from '../styles'

interface FieldProps {
  fieldKey: string
  fieldValue: number
}

// interface TableProps {
//   title: string
//   fields: FieldProps[]
//   minValue: number
//   maxValue: number
//   updateSkillField: (attributeName: string, newValue: number) => void
//   updateTrainableSkillsField: (skillName: string) => void
// }

export function SkillsTable() {
  const {
    skillsTable,
    updateSkillField,
    updateTrainableSkillsField,
    handleFieldOver,
    updateTrainingField,
    draggingSkill,
  } = useContext(SheetContext)

  const { title, fields, minValue, maxValue } = skillsTable

  function handleUpdateField(event: any) {
    updateSkillField(event.target.name, Number(event.target.value))

    if (event.target.value < minValue + 1) {
      updateTrainableSkillsField(event.target.name)
    }
  }

  function handleFieldDropped(event: any) {
    event.preventDefault()
    console.log('field-dropped', { event })
    updateTrainingField(draggingSkill, 4)
    updateSkillField(draggingSkill, 1)
  }

  return (
    <TableContainer onDragOver={handleFieldOver} onDrop={handleFieldDropped}>
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
