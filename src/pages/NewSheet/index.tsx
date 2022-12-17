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
import { createContext, useEffect, useState } from 'react'
import { TrainingTable } from '../../components/Tables/TrainingTable'
import { ListTable } from '../../components/Tables/ListTable'
import { TotalSum } from '../../components/Tables/TotalSum'
import { SecondaryAttributesTable } from '../../components/Tables/SecondaryAttributesTable'

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

interface PrimaryAttributes {
  INT: number
  REF: number
  DEX: number
  BODY: number
  SPD: number
  EMP: number
  CRA: number
  WILL: number
}

export const SheetContext = createContext<SheetContextType>(
  {} as SheetContextType,
)

export function NewSheet() {
  const [charName, setCharName] = useState('Your Char Name')
  const [primaryAttributesTable, setPrimaryAttributesTable] =
    useState<KeyValueTableProps>(testPrimaryAttributesTable)

  const [secondaryAttributesTable, setSecondaryAttributesTable] =
    useState<KeyValueTableProps>(testSecondaryAttributesTable)

  const [currentTrainingTable, setCurrentTrainingTable] =
    useState<KeyValueTableProps>(testCurrentTrainingTable)

  const [skillsTable, setSkillsTable] =
    useState<KeyValueTableProps>(testSkillsTable)
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

  useEffect(() => {
    const primaryAttributes = {} as PrimaryAttributes
    primaryAttributesTable.fields.forEach((field) => {
      primaryAttributes[field.fieldKey] = field.fieldValue
    })

    setTotalAttributesSum(
      primaryAttributesTable.fields.reduce(
        (acc, element) => acc + element.fieldValue,
        0,
      ),
    )

    setSecondaryAttributesTable((currentState) => {
      const newTable = { ...currentState }

      const modBodyWill = Math.floor(
        (primaryAttributes.BODY + primaryAttributes.WILL) / 2,
      )

      newTable.fields = [
        { fieldKey: 'STUN', fieldValue: modBodyWill * 10 },
        { fieldKey: 'RUN', fieldValue: primaryAttributes.SPD * 3 },
        { fieldKey: 'STA', fieldValue: modBodyWill * 5 },
        { fieldKey: 'ENC', fieldValue: primaryAttributes.BODY * 10 },
        { fieldKey: 'REC', fieldValue: modBodyWill },
        { fieldKey: 'HP', fieldValue: modBodyWill * 5 },
        { fieldKey: 'VIGOR', fieldValue: 7 },
      ]

      console.log('secondaryAtrs: ', newTable.fields)
      return { ...currentState, fields: newTable.fields }
    })
  }, [primaryAttributesTable])

  function updateField(attributeName: string, newValue: number) {
    // two days of troubleshooting: I was passing a pointer, so I was setting the same object in the end
    const newTable = { ...primaryAttributesTable }

    // way#1
    let newTableFields = newTable.fields
    newTableFields = newTableFields.map((field) => {
      if (field.fieldKey === attributeName)
        return { ...field, fieldValue: newValue }

      return field
    })

    newTable.fields = newTableFields

    // why that doesnt work^^ ??

    // way #2
    // newTable.fields.forEach((field) => {
    //   if (field.fieldKey === attributeName) field.fieldValue = newValue
    // })

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
              <TotalSum title="" sum={totalAttributesSum} />
              <PrimaryAttributesTable
                {...primaryAttributesTable}
                updateField={updateField}
              />
              <SecondaryAttributesTable {...secondaryAttributesTable} />

              <div className="middleBlock">
                <img src={characterImage} alt="" />
                <KeyValueTable {...currentTrainingTable} />
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
