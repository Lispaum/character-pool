import { useContext } from 'react'
import { SheetContext } from '../../../pages/NewSheet/SheetContextProvider'
import { FieldContainer, TableContainer } from '../styles'

export function MagicTable() {
  const { magicTable, updateMagicField, updateScrollsField } =
    useContext(SheetContext)

  const { title, fields } = magicTable

  function handleUpdateField(event: any) {
    updateScrollsField(event.target.name)
    updateMagicField(event.target.name)
  }

  return (
    <TableContainer>
      <h1>{title}</h1>

      {fields.map((field: string) => {
        return (
          <FieldContainer key={field}>
            <button type="button" name={field} onClick={handleUpdateField}>
              {field}
            </button>
          </FieldContainer>
        )
      })}
    </TableContainer>
  )
}
