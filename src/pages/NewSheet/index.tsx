import characterImage from '../../assets/meditating-geralt.gif'
import {
  SheetBodyContainer,
  SheetContainer,
  SheetHeaderContainer,
  TextBoxContainer,
} from './styles'
import { Table } from '../../components/Table'
import { useState } from 'react'
import {
  primaryAttributesTableData,
  secondaryAttributesTableData,
  skillsTableData,
  magicTableData,
  background,
} from '../../contexts/tests/testData'

export function NewSheet() {
  const [charName, setCharName] = useState('Your Char Name')

  return (
    <SheetContainer>
      <form action=" ">
        <fieldset>
          <SheetHeaderContainer>
            <input
              type="text"
              value={charName}
              onChange={(event) => setCharName(event.target.value)}
            />
          </SheetHeaderContainer>
          <SheetBodyContainer>
            <Table {...primaryAttributesTableData} />
            <Table {...secondaryAttributesTableData} />

            <img src={characterImage} alt="" />

            <Table {...skillsTableData} />
            <Table {...magicTableData} />

            <TextBoxContainer>
              <p>{background}</p>
              <div>–Rodolf Kazmer</div>
            </TextBoxContainer>
          </SheetBodyContainer>
        </fieldset>
      </form>
    </SheetContainer>
  )
}
