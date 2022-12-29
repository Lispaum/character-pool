import { useContext } from 'react'
import { SheetContext } from '../../../pages/NewSheet/SheetContextProvider'
import { FieldContainer, TableContainer } from '../styles'

export function TotalSum() {
  const { totalAttributesSum } = useContext(SheetContext)

  return (
    <TableContainer>
      <FieldContainer>
        <div>{totalAttributesSum}</div>
      </FieldContainer>
    </TableContainer>
  )
}
