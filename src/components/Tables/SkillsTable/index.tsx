import { useContext } from 'react'
import { SheetContext } from '../../../pages/NewSheet/SheetContextProvider'
import { FieldContainer, TableContainer } from '../styles'

// interface TableProps {
//   title: string
//   fields: FieldProps[]
//   minValue: number
//   maxValue: number
//   updateSkill: (attributeName: string, newValue: number) => void
//   updateTrainableSkillsField: (skillName: string) => void
// }

export function SkillsTable() {
  const { skillsTable, updateSkill, updateTrainableSkillsField } =
    useContext(SheetContext)

  const minValue = 0
  const maxValue = 100

  function handleUpdateField(event: any) {
    updateSkill(event.target.name, Number(event.target.value))

    if (event.target.value < minValue + 1) {
      updateTrainableSkillsField(event.target.name)
    }
  }

  return (
    <TableContainer>
      <h1>Skills</h1>

      {Object.entries(skillsTable).map(([skillName, skillValue]) => {
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
              onChange={handleUpdateField}
            />
          </FieldContainer>
        )
      })}
    </TableContainer>
  )
}
