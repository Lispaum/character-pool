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
//   updateTrainingField: (skillName: string, newValue: number) => void
//   updateSkillField: (skillName: string, newValue: number) => void
//   updateMagicField: (magicName: string) => void
// }

export function TrainingTable() {
  const {
    trainingTable,
    updateTrainingField,
    updateSkillField,
    updateMagicField,
    draggingField,
    updateDraggingField,
  } = useContext(SheetContext)
  const { title, fields, minValue, maxValue } = trainingTable

  function handleTraining(event: any) {
    event.stopPropagation()
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

  function handleDragTrainingSkill(event: any) {
    updateDraggingField(event.target.name, 'skill')
  }

  function handleFieldDropped(event: any) {
    event.preventDefault()
    console.log('field-dropped', { event })
    updateTrainingField(draggingField?.skillName, 0)
  }

  return (
    <TableContainer
      onDragOver={(event) => event.preventDefault()}
      onDrop={handleFieldDropped}
    >
      <h1>{title}</h1>

      {fields.map((field: FieldProps) => {
        return (
          <FieldContainer
            key={field.fieldKey}
            draggable="true"
            onDragStart={handleDragTrainingSkill}
            // onDragEnd={finishDraggingField}
          >
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
