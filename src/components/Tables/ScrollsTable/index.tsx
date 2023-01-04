import { useContext } from 'react'
import { SheetContext } from '../../../pages/NewSheet/SheetContextProvider'
import { FieldContainer, TableContainer } from '../styles'

export function ScrollsTable() {
  const {
    scrollsTable,
    updateTrainingField,
    updateScrollsField,
    startDraggingField,
    finishDraggingField,
  } = useContext(SheetContext)

  const { title, fields } = scrollsTable

  function handleTrainScroll(event: any) {
    updateScrollsField(event.target.name)
    updateTrainingField(event.target.name, 0)
  }

  return (
    <TableContainer>
      <h1>{title}</h1>

      {fields.map((field: string) => {
        return (
          <FieldContainer key={field}>
            <button
              draggable
              onDragStart={startDraggingField}
              onDragEnd={finishDraggingField}
              type="button"
              name={field}
              onClick={handleTrainScroll}
            >
              {field}
            </button>
          </FieldContainer>
        )
      })}
    </TableContainer>
  )
}
