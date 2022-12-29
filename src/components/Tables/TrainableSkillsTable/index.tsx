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
              onDragStart={updateDraggingField}
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
