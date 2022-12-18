import characterImage from '../../assets/meditating-geralt.gif'
import {
  testPrimaryAttributesTable,
  testSkillsTable,
  testMagicTable,
  testBackground,
  testSecondaryAttributesTable,
  testScrollsTable,
  testTrainableSkillsTable,
  testTrainingTable,
} from '../../contexts/tests/testData'
import {
  SheetBodyContainer,
  SheetContainer,
  SheetHeaderContainer,
  TextBoxContainer,
} from './styles'
import { PrimaryAttributesTable } from '../../components/Tables/PrimaryAttributesTable'
import { createContext, useEffect, useState } from 'react'
import { TrainingTable } from '../../components/Tables/TrainingTable'
import { ListTable } from '../../components/Tables/ListTable'
import { TotalSum } from '../../components/Tables/TotalSum'
import { SecondaryAttributesTable } from '../../components/Tables/SecondaryAttributesTable'
import { TrainableSkillsTable } from '../../components/Tables/TrainableSkillsTable'
import { SkillsTable } from '../../components/Tables/SkillsTable'

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

  const [trainingTable, setTrainingTable] =
    useState<KeyValueTableProps>(testTrainingTable)

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
      console.log(typeof primaryAttributes)
      // TODO: understand this thing lol
      primaryAttributes[field.fieldKey as keyof typeof primaryAttributes] =
        field.fieldValue
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

      return { ...currentState, fields: newTable.fields }
    })
  }, [primaryAttributesTable])

  function updatePrimaryAttributeField(
    attributeName: string,
    newValue: number,
  ) {
    // two days of troubleshooting: I was passing a pointer, so I was setting the same object in the end
    const newTable = { ...primaryAttributesTable }

    newTable.fields.forEach((field) => {
      if (field.fieldKey === attributeName) field.fieldValue = newValue
    })

    setPrimaryAttributesTable(newTable)
  }

  function updateSkillField(skillName: string, newValue: number) {
    const newTable = { ...skillsTable }

    let isNewField: boolean = true

    newTable.fields.forEach((field) => {
      if (field.fieldKey === skillName) {
        field.fieldValue = newValue
        isNewField = false
      }
    })

    if (isNewField) {
      newTable.fields.push({ fieldKey: skillName, fieldValue: 1 })
    }

    setSkillsTable(newTable)
  }

  function updateTrainingField(skillName: string, newValue: number) {
    const newTable = { ...trainingTable }

    let isNewField: boolean = true
    let isFinishedTraining: boolean = false

    newTable.fields.forEach((field) => {
      if (field.fieldKey === skillName) {
        field.fieldValue = newValue
        isNewField = false

        if (newValue > 3) {
          isFinishedTraining = true
        }
      }
    })

    if (isNewField) {
      newTable.fields.push({ fieldKey: skillName, fieldValue: newValue })
    } else if (isFinishedTraining) {
      newTable.fields = newTable.fields.filter(
        (field) => field.fieldKey !== skillName,
      )
    }

    setTrainingTable(newTable)
  }

  function updateTrainableSkillsField(skillName: string) {
    const newTable = { ...trainableSkillsTable }

    if (newTable.fields.includes(skillName)) {
      newTable.fields = newTable.fields.filter((skill) => skill !== skillName)
    } else {
      newTable.fields.push(skillName)
    }

    setTrainableSkillsTable(newTable)
  }

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
            <TotalSum title="" sum={totalAttributesSum} />
            <PrimaryAttributesTable
              {...primaryAttributesTable}
              updatePrimaryAttributeField={updatePrimaryAttributeField}
            />
            <SecondaryAttributesTable {...secondaryAttributesTable} />

            <div className="middleBlock">
              <img src={characterImage} alt="" />
              <TrainingTable
                {...trainingTable}
                updateTrainingField={updateTrainingField}
                updateSkillField={updateSkillField}
              />
            </div>

            <div className="skillsBlock">
              <SkillsTable
                {...skillsTable}
                updateSkillField={updateSkillField}
              />
              <TrainableSkillsTable
                {...trainableSkillsTable}
                updateTrainingField={updateTrainingField}
                updateTrainableSkillsField={updateTrainableSkillsField}
              />
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
  )
}
