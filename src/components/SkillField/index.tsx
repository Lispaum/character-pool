import { SkillFieldContainer } from './styles'

interface SkillFieldProps {
  skillName: string
  skillValue: number
  backgroundColor?: 'blue' | 'cyan'
  textColor?: 'black' | 'white'
}

export function SkillField(props: SkillFieldProps) {
  return (
    <SkillFieldContainer textColor="white" backgroundColor="blue">
      <span>{props.skillName}</span>
      <span>{props.skillValue}</span>
    </SkillFieldContainer>
  )
}
