import { useContext } from 'react'
import { SheetContext } from '../../../pages/NewSheet/SheetContextProvider'
import { FieldContainer, TableContainer } from '../styles'

// interface TableProps {
//   title: string
//   fields: FieldProps[]
//   minValue: number
//   maxValue: number
//   updateSkillField: (attributeName: string, newValue: number) => void
//   updateTrainableSkillsField: (skillName: string) => void
// }

export function SkillsTable() {
  const { skillsTable, updateSkillField, updateTrainableSkillsField } =
    useContext(SheetContext)

  const { title, fields, minValue, maxValue } = skillsTable

  function handleUpdateField(event: any) {
    updateSkillField(event.target.name, Number(event.target.value))

    if (event.target.value < minValue + 1) {
      updateTrainableSkillsField(event.target.name)
    }
  }

  const skills = Object.entries(fields)

  return (
    <TableContainer>
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
              onChange={handleUpdateField}
            />
          </FieldContainer>
        )
      })}
    </TableContainer>
  )
}
