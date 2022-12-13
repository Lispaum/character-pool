import characterImage from '../../assets/meditating-geralt.gif'
import {
  SheetBodyContainer,
  SheetContainer,
  SheetHeaderContainer,
  TextBoxContainer,
} from './styles'
import { KeyValueTable } from '../../components/Tables/KeyValueTable'
import {
  primaryAttributesTable,
  secondaryAttributesTable,
  skillsTable,
  magicTable,
  background,
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
            <KeyValueTable {...primaryAttributesTable} />
            <KeyValueTable {...secondaryAttributesTable} />

            <img src={characterImage} alt="" />
            <KeyValueTable {...skillsTable} />
            <ListTable {...magicTable} />
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
