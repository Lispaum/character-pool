import { useContext } from 'react'
import { SheetContext } from '../../../pages/NewSheet/SheetContextProvider'
import { FieldContainer, TableContainer } from '../styles'

export function TrainingTable() {
  const {
    trainingTable,
    updateTrainingField,
    updateSkill,
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
        updateSkill(fieldName, 1)
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

  const skills = Object.entries(fields)

  return (
    <TableContainer
      onDragOver={(event) => event.preventDefault()}
      onDrop={handleFieldDropped}
    >
      <h1>{title}</h1>

      {skills.map(([skillName, skillValue]) => {
        return (
          <FieldContainer key={skillName}>
            <label htmlFor={skillName}>{skillName}</label>
            <input
              type="number"
              id={skillName}
              name={skillName}
              placeholder="-"
              min={minValue}
              max={maxValue}
              value={skillValue}
              onChange={handleTraining}
            />
          </FieldContainer>
        )
      })}
    </TableContainer>
  )
}
