import { FieldContainer, TableContainer } from '../styles'

interface TotalSumProps {
  title: string
  sum: number
}

export function TotalSum({ title, sum }: TotalSumProps) {
  return (
    <TableContainer>
      <h1>{title}</h1>
      <FieldContainer key={title}>
        <div>{sum}</div>
      </FieldContainer>
    </TableContainer>
  )
}
