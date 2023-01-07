import { useContext } from 'react'
import { SheetContext } from '../../../pages/NewSheet/SheetContextProvider'
import { FieldContainer, TableContainer } from '../styles'

export function TrainableSkillsTable() {
  const {
    trainableSkillsTable,
    updateTrainingField,
    updateTrainableSkillsField,
    updateDraggingField,
  } = useContext(SheetContext)

  const { title, fields } = trainableSkillsTable

  function handleClickOnSkill(event: any) {
    updateTrainableSkillsField(event.target.name)
    updateTrainingField(event.target.name, 0)
  }

  function handleStartDraggingTrainableSkill(event: any) {
    updateDraggingField(event.target.name, 'trainable-skills')
  }

  return (
    <TableContainer>
      <h1>{title}</h1>

      {fields.map((field: string) => {
        return (
          <FieldContainer key={field}>
            <button
              draggable
              onDragStart={handleStartDraggingTrainableSkill}
              type="button"
              name={field}
              onClick={handleClickOnSkill}
            >
              {field}
            </button>
          </FieldContainer>
        )
      })}
    </TableContainer>
  )
}
