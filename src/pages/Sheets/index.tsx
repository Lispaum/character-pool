import characterImage from '../../assets/meditating-geralt.gif'
import {
  SheetBodyContainer,
  SheetContainer,
  SheetHeaderContainer,
  TextBoxContainer,
} from './styles'
import { Table } from '../../components/Table'
import {
  primaryAttributesTableData,
  secondaryAttributesTableData,
  skillsTableData,
  magicTableData,
  background,
} from '../../contexts/tests/testData'

export function Sheets() {
  return (
    <SheetContainer>
      <form action=" ">
        <fieldset disabled>
          <SheetHeaderContainer>
            <div>Geralt of Rivia</div>
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
