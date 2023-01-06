import { createContext, ReactNode, useEffect, useState } from 'react'
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

interface DraggingField {
  skillName: string
  skillType: string
}

interface SheetContextType {
  charName: string
  totalAttributesSum: number
  primaryAttributesTable: KeyValueTableProps
  secondaryAttributesTable: KeyValueTableProps
  trainingTable: KeyValueTableProps
  skillsTable: KeyValueTableProps
  trainableSkillsTable: ListTableProps
  magicTable: ListTableProps
  scrollsTable: ListTableProps
  background: string
  draggingField: DraggingField
  updateCharName: (newName: string) => void
  updatePrimaryAttributeField: (attributeName: string, newValue: number) => void
  updateTrainingField: (skillName: string, newValue: number) => void
  updateSkillField: (skillName: string, newValue: number) => void
  updateMagicField: (magicName: string) => void
  updateTrainableSkillsField: (skillName: string) => void
  updateScrollsField: (skillName: string) => void
  updateBackground: (newBackground: string) => void
  updateDraggingField: (skillName: string, skillType: string) => void
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

interface SheetContextProviderProps {
  children: ReactNode
}

export function SheetContextProvider({ children }: SheetContextProviderProps) {
  const [charName, setCharName] = useState('')
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

  const [draggingField, setDraggingField] = useState<DraggingField>({
    skillName: '',
    skillType: '',
  })

  useEffect(() => {
    const primaryAttributes = {} as PrimaryAttributes
    primaryAttributesTable.fields.forEach((field) => {
      // console.log(typeof primaryAttributes)
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
        {
          fieldKey: 'LEAP',
          fieldValue: Math.floor((primaryAttributes.SPD * 3) / 5),
        },
        { fieldKey: 'STA', fieldValue: modBodyWill * 5 },
        { fieldKey: 'ENC', fieldValue: primaryAttributes.BODY * 10 },
        { fieldKey: 'REC', fieldValue: modBodyWill },
        { fieldKey: 'HP', fieldValue: modBodyWill * 5 },
        { fieldKey: 'VIGOR', fieldValue: 7 },
      ]

      return { ...currentState, fields: newTable.fields }
    })
  }, [primaryAttributesTable, totalAttributesSum])

  function updateCharName(newName: string) {
    setCharName(newName)
  }

  function updatePrimaryAttributeField(
    attributeName: string,
    newValue: number,
  ) {
    const newTable = { ...primaryAttributesTable }

    newTable.fields.forEach((field) => {
      if (field.fieldKey === attributeName) field.fieldValue = newValue
    })

    setPrimaryAttributesTable(newTable)
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

  function updateSkillField(skillName: string, newValue: number) {
    const newTable = { ...skillsTable }

    let isNewField: boolean = true
    const isForgotSkill: boolean = newValue === 0

    newTable.fields.forEach((field) => {
      if (field.fieldKey === skillName) {
        field.fieldValue = newValue
        isNewField = false
      }
    })

    if (isNewField) {
      newTable.fields.push({ fieldKey: skillName, fieldValue: 1 })
    } else if (isForgotSkill) {
      newTable.fields = newTable.fields.filter(
        (field) => field.fieldKey !== skillName,
      )
    }

    setSkillsTable(newTable)
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

  function updateMagicField(magicName: string) {
    const newTable = { ...magicTable }

    if (newTable.fields.includes(magicName)) {
      newTable.fields = newTable.fields.filter((skill) => skill !== magicName)
    } else {
      newTable.fields.push(magicName)
    }

    setMagicTable(newTable)
  }

  function updateScrollsField(magicName: string) {
    const newTable = { ...scrollsTable }

    if (newTable.fields.includes(magicName)) {
      newTable.fields = newTable.fields.filter((skill) => skill !== magicName)
    } else {
      newTable.fields.push(magicName)
    }

    setScrollsTable(newTable)
  }

  function updateBackground(newBackground: string) {
    setBackground(newBackground)
  }

  function updateDraggingField(skillName: string, skillType: string) {
    setDraggingField({ skillName, skillType })
  }

  return (
    <SheetContext.Provider
      value={{
        charName,
        updateCharName,
        totalAttributesSum,
        primaryAttributesTable,
        secondaryAttributesTable,
        trainingTable,
        skillsTable,
        trainableSkillsTable,
        magicTable,
        scrollsTable,
        background,
        draggingField,
        updatePrimaryAttributeField,
        updateTrainingField,
        updateSkillField,
        updateTrainableSkillsField,
        updateMagicField,
        updateScrollsField,
        updateBackground,
        updateDraggingField,
      }}
    >
      {children}
    </SheetContext.Provider>
  )
}
