import styled from 'styled-components'

interface SkillFieldContainerProps {
  textColor?: 'black' | 'white'
  backgroundColor?: 'blue' | 'cyan'
}

export const SkillFieldContainer = styled.div<SkillFieldContainerProps>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-family: Georgia, 'Times New Roman', Times, serif;

  color: ${(props) => props.theme['white-100'] ?? 'black'};
  background-color: ${(props) => props.theme['cyan-100'] ?? 'cyan'};

  :nth-child(odd) {
    background-color: ${(props) => props.theme['cyan-300'] ?? 'cyan'};
  }
`
