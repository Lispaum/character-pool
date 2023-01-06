import { useContext } from 'react'
import { SheetContext } from '../../../pages/NewSheet/SheetContextProvider'
import { FieldContainer, TableContainer } from '../styles'

export function TrainableSkillsTable() {
  const {
    trainableSkillsTable,
    draggingField,
    updateTrainingField,
    updateTrainableSkillsField,
    updateDraggingField,
  } = useContext(SheetContext)

  const { title, fields } = trainableSkillsTable

  function handleTrainSkill(event: any) {
    updateTrainableSkillsField(event.target.name)
    updateTrainingField(event.target.name, 0)
  }

  function handleStartDraggingTrainableSkill(event: any) {
    updateDraggingField(event.target.name, 'skill')
  }

  function handleEndDraggingTrainableSkill(event: any) {
    updateTrainableSkillsField(event.target.name)
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
              onDragEnd={handleEndDraggingTrainableSkill}
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
