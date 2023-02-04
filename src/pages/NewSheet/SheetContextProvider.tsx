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

type KeyValueTableFields = { [key: string]: number }

interface KeyValueTableProps {
  title: string
  fields: KeyValuePair[]
  minValue: number
  maxValue: number
}

interface PrimaryAttributesTableProps {
  title: string
  fields: KeyValueTableFields
  minValue: number
  maxValue: number
}

interface ListTableProps {
  title: string
  fields: string[]
}

interface DraggingField {
  fieldName: string
  fieldSource: string
}

interface SheetContextType {
  charName: string
  totalAttributesSum: number
  primaryAttributesTable: PrimaryAttributesTableProps
  secondaryAttributesTable: KeyValueTableProps
  trainingTable: KeyValueTableProps
  skillsTable: KeyValueTableProps
  trainableSkillsTable: ListTableProps
  magicTable: ListTableProps
  scrollsTable: ListTableProps
  background: string
  draggingField: DraggingField
  draggingItem: DraggingField
  equippedItems: string[]
  bagItems: string[]
  homeChestItems: string[]
  newItem: string
  updateCharName: (newName: string) => void
  updatePrimaryAttributeField: (attributeName: string, newValue: number) => void
  updateTrainingField: (skillName: string, newValue: number) => void
  updateSkillField: (skillName: string, newValue: number) => void
  updateMagicField: (magicName: string) => void
  updateTrainableSkillsField: (skillName: string) => void
  updateScrollsField: (skillName: string) => void
  updateBackground: (newBackground: string) => void
  updateDraggingField: (skillName: string, skillSource: string) => void
  updateDraggingItem: (itemName: string, itemSource: string) => void
  updateEquippedItems: (itemName: string) => void
  updateBagItems: (itemName: string) => void
  updateHomeChestItems: (itemName: string) => void
  updateNewItem: (itemName: string) => void
}

// interface PrimaryAttributes {
//   INT: number
//   REF: number
//   DEX: number
//   BODY: number
//   SPD: number
//   EMP: number
//   CRA: number
//   WILL: number
// }

export const SheetContext = createContext<SheetContextType>(
  {} as SheetContextType,
)

interface SheetContextProviderProps {
  children: ReactNode
}

export function SheetContextProvider({ children }: SheetContextProviderProps) {
  const [charName, setCharName] = useState('')
  const [primaryAttributesTable, setPrimaryAttributesTable] =
    useState<PrimaryAttributesTableProps>(testPrimaryAttributesTable)
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

  const [totalAttributesSum, setTotalAttributesSum] = useState<number>(0)

  const [draggingField, setDraggingField] = useState<DraggingField>({
    fieldName: '',
    fieldSource: '',
  })
  const [draggingItem, setDraggingItem] = useState<DraggingField>({
    fieldName: '',
    fieldSource: '',
  })

  const [equippedItems, setEquippedItems] = useState<string[]>([
    'Silver Sword',
    'Meteorite Sword',
  ])
  const [bagItems, setbagItems] = useState<string[]>([
    "Yennefer's Obsidian Medallion",
  ])
  const [homeChestItems, setHomeChestItems] = useState<string[]>([
    "Ciri's Sword",
  ])
  const [newItem, setNewItem] = useState<string>('')

  useEffect(() => {
    setTotalAttributesSum(
      Object.values(primaryAttributesTable.fields).reduce(
        (acc, currentValue) => acc + currentValue,
        0,
      ),
    )

    setSecondaryAttributesTable((currentState) => {
      const newTable = { ...currentState }

      const primaryAttributes = primaryAttributesTable.fields

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

    newTable.fields[attributeName] = newValue

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

  function updateDraggingField(fieldName: string, fieldSource: string) {
    setDraggingField({ fieldName, fieldSource })
  }

  function updateDraggingItem(fieldName: string, fieldSource: string) {
    setDraggingItem({ fieldName, fieldSource })
  }

  function updateEquippedItems(itemName: string) {
    let newList = equippedItems

    if (newList.includes(itemName)) {
      newList = newList.filter((item) => item !== itemName)
    } else {
      newList.push(itemName)
    }

    setEquippedItems(newList)
  }
  function updateBagItems(itemName: string) {
    let newList = bagItems

    if (newList.includes(itemName)) {
      newList = newList.filter((item) => item !== itemName)
    } else {
      newList.push(itemName)
    }

    setbagItems(newList)
  }

  function updateHomeChestItems(itemName: string) {
    let newList = homeChestItems

    if (newList.includes(itemName)) {
      newList = newList.filter((item) => item !== itemName)
    } else {
      newList.push(itemName)
    }

    setHomeChestItems(newList)
  }

  function updateNewItem(itemName: string) {
    setNewItem(itemName)
  }

  async function loadSheetData() {
    const response = await fetch('http://localhost:3434/character_sheets')
    const data = await response.json()

    console.log(data)
  }

  useEffect(() => {
    loadSheetData()
  }, [])

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
        draggingItem,
        equippedItems,
        bagItems,
        homeChestItems,
        newItem,
        updatePrimaryAttributeField,
        updateTrainingField,
        updateSkillField,
        updateTrainableSkillsField,
        updateMagicField,
        updateScrollsField,
        updateBackground,
        updateDraggingField,
        updateDraggingItem,
        updateEquippedItems,
        updateBagItems,
        updateHomeChestItems,
        updateNewItem,
      }}
    >
      {children}
    </SheetContext.Provider>
  )
}
