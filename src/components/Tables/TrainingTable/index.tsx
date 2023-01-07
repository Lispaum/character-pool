import { useContext } from 'react'
import { SheetContext } from '../../../pages/NewSheet/SheetContextProvider'
import { FieldContainer, TableContainer } from '../styles'

interface FieldProps {
  fieldKey: string
  fieldValue: number
}

export function TrainingTable() {
  const {
    trainingTable,
    updateTrainingField,
    updateSkillField,
    updateMagicField,
    updateTrainableSkillsField,
    updateScrollsField,
    draggingField,
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

  function handleFieldDropped(event: any) {
    event.preventDefault()
    updateTrainingField(draggingField?.fieldName, 0)

    const source = draggingField.fieldSource
    if (source === 'trainable-skills') {
      updateTrainableSkillsField(draggingField.fieldName)
    } else if (source === 'scrolls') {
      updateScrollsField(draggingField.fieldName)
    }
  }

  return (
    <TableContainer
      onDragOver={(event) => event.preventDefault()}
      onDrop={handleFieldDropped}
    >
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
