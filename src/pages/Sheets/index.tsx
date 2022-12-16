import characterImage from '../../assets/meditating-geralt.gif'
import {
  SheetBodyContainer,
  SheetContainer,
  SheetHeaderContainer,
  TextBoxContainer,
} from './styles'
import { KeyValueTable } from '../../components/Tables/KeyValueTable'
import {
  testPrimaryAttributesTable,
  testSecondaryAttributesTable,
  testSkillsTable,
  testMagicTable,
  testBackground,
} from '../../contexts/tests/testData'
import { ListTable } from '../../components/Tables/ListTable'

export function Sheets() {
  return (
    <SheetContainer>
      <form action=" ">
        <fieldset disabled>
          <SheetHeaderContainer>
            <div>Geralt of Rivia</div>
          </SheetHeaderContainer>
          <SheetBodyContainer>
            <KeyValueTable {...testPrimaryAttributesTable} />
            <KeyValueTable {...testSecondaryAttributesTable} />

            <img src={characterImage} alt="" />
            <KeyValueTable {...testSkillsTable} />
            <ListTable {...testMagicTable} />
            <TextBoxContainer>
              <p>{testBackground}</p>
              <div>–Rodolf Kazmer</div>
            </TextBoxContainer>
          </SheetBodyContainer>
        </fieldset>
      </form>
    </SheetContainer>
  )
}
