import { useContext } from 'react'
import { SheetContext } from '../../../pages/NewSheet/SheetContextProvider'
import { FieldContainer, TableContainer } from '../styles'

export function TrainableSkillsTable() {
  const {
    trainableSkillsTable,
    updateTrainingField,
    updateTrainableSkillsField,
    startDraggingField,
    dragField,
    finishDraggingField,
    handleFieldOver,
    handleFieldDropped,
  } = useContext(SheetContext)

  const { title, fields } = trainableSkillsTable

  function handleTrainSkill(event: any) {
    updateTrainableSkillsField(event.target.name)
    updateTrainingField(event.target.name, 0)
  }

  return (
    <TableContainer onDragOver={handleFieldOver} onDrop={handleFieldDropped}>
      <h1>{title}</h1>

      {fields.map((field: string) => {
        return (
          <FieldContainer key={field}>
            <button
              draggable
              onDragStart={startDraggingField}
              onDrag={dragField}
              onDragEnd={finishDraggingField}
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
