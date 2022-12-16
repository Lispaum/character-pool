import characterImage from '../../assets/meditating-geralt.gif'
import {
  testPrimaryAttributesTable,
  testSkillsTable,
  testMagicTable,
  testBackground,
  testSecondaryAttributesTable,
  testScrollsTable,
  testTrainableSkillsTable,
  testCurrentTrainingTable,
} from '../../contexts/tests/testData'
import {
  SheetBodyContainer,
  SheetContainer,
  SheetHeaderContainer,
  TextBoxContainer,
} from './styles'
import { KeyValueTable } from '../../components/Tables/KeyValueTable'
import { PrimaryAttributesTable } from '../../components/Tables/PrimaryAttributesTable'
import { createContext, useState } from 'react'
import { TrainingTable } from '../../components/Tables/TrainingTable'
import { ListTable } from '../../components/Tables/ListTable'

interface KeyValuePair {
  fieldKey: string
  fieldValue: number
}

interface KeyValueTableProps {
  title: string
  fields: KeyValuePair[]
  minValue: number
  maxValue: number
}
interface ListTableProps {
  title: string
  fields: string[]
}

interface SheetContextType {
  primaryAttributesTable: KeyValueTableProps
  secondaryAttributesTable: KeyValueTableProps
  currentTrainingTable: KeyValueTableProps
  skillsTable: KeyValueTableProps
  trainableSkillsTable: ListTableProps
  magicTable: ListTableProps
  scrollsTable: ListTableProps
}

export const SheetContext = createContext({} as SheetContextType)

export function NewSheet() {
  const [charName, setCharName] = useState('Your Char Name')
  const [primaryAttributesTable, setPrimaryAttributesTable] = useState(
    testPrimaryAttributesTable,
  )
  const [secondaryAttributesTable, setSecondaryAttributesTable] = useState(
    testSecondaryAttributesTable,
  )
  const [currentTrainingTable, setCurrentTrainingTable] = useState(
    testCurrentTrainingTable,
  )
  const [skillsTable, setSkillsTable] = useState(testSkillsTable)
  const [trainableSkillsTable, setTrainableSkillsTable] = useState(
    testTrainableSkillsTable,
  )
  const [magicTable, setMagicTable] = useState(testMagicTable)
  const [scrollsTable, setScrollsTable] = useState(testScrollsTable)
  const [background, setBackground] = useState(testBackground)

  const [totalAttributesSum, setTotalAttributesSum] = useState(
    primaryAttributesTable.fields.reduce(
      (acc, element) => acc + element.fieldValue,
      0,
    ),
  )

  function handleUpdateField(event: any) {
    const attributeName = event.target.name
    const newValue = Number(event.target.value)

    console.log('event.target para pai', event.target)
    console.log(
      'current',
      primaryAttributesTable,
      'name: ',
      attributeName,
      'value: ',
      newValue,
    )
    const newTable = primaryAttributesTable
    let newTableFields = newTable.fields

    newTableFields = newTableFields.map((field) => {
      if (field.fieldKey === attributeName) {
        return { ...field, fieldValue: newValue }
      }

      return field
    })

    newTable.fields = newTableFields

    setPrimaryAttributesTable(newTable)
  }

  return (
    <SheetContext.Provider
      value={{
        primaryAttributesTable,
        secondaryAttributesTable,
        currentTrainingTable,
        skillsTable,
        trainableSkillsTable,
        magicTable,
        scrollsTable,
      }}
    >
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
              <span>{totalAttributesSum}</span>
              <PrimaryAttributesTable
                {...primaryAttributesTable}
                handleUpdateField={handleUpdateField}
              />
              <KeyValueTable {...secondaryAttributesTable} />

              <div className="middleBlock">
                <img src={characterImage} alt="" />
                <TrainingTable {...currentTrainingTable} />
              </div>
              <div className="skillsBlock">
                <KeyValueTable {...skillsTable} />
                <ListTable {...trainableSkillsTable} />
              </div>
              <div className="magicBlock">
                <ListTable {...magicTable} />
                <ListTable {...scrollsTable} />
              </div>

              <TextBoxContainer>
                <p>{background}</p>
                <div>–Rodolf Kazmer</div>
              </TextBoxContainer>
            </SheetBodyContainer>
          </fieldset>
        </form>
      </SheetContainer>
    </SheetContext.Provider>
  )
}
