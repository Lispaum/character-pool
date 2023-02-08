import { createContext, ReactNode, useEffect, useState } from 'react'
import {
  testSkillsTable,
  testMagicTable,
  testBackground,
  testScrollsTable,
  testTrainableSkillsTable,
  testTrainingTable,
  testPrimaryAttributes,
} from '../../contexts/tests/testData'

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

interface SecondaryAttributes {
  STUN: number
  RUN: number
  LEAP: number
  STA: number
  ENC: number
  REC: number
  HP: number
  VIGOR: number
}

interface SecondaryAttributesTableProps {
  title: string
  fields: SecondaryAttributes | {}
  minValue: number
  maxValue: number
}

type KeyValueTableFields = { [key: string]: number }

interface KeyValueTableProps {
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
  primaryAttributes: PrimaryAttributes
  secondaryAttributesTable: SecondaryAttributesTableProps
  trainingTable: KeyValueTableProps
  skillsTable: KeyValueTableFields
  trainableSkillsTable: ListTableProps
  magicTable: ListTableProps
  scrollsTable: ListTableProps
  background: string
  draggingField: DraggingField
  updateCharName: (newName: string) => void
  updatePrimaryAttribute: (
    attributeName: keyof PrimaryAttributes,
    newValue: number,
  ) => void
  updateTrainingField: (skillName: string, newValue: number) => void
  updateSkill: (skillName: string, newValue: number) => void
  updateMagicField: (magicName: string) => void
  updateTrainableSkillsField: (skillName: string) => void
  updateScrollsField: (skillName: string) => void
  updateBackground: (newBackground: string) => void
  updateDraggingField: (skillName: string, skillSource: string) => void

  draggingItem: DraggingField
  equippedItems: string[]
  bagItems: string[]
  homeChestItems: string[]
  newItem: string
  updateDraggingItem: (itemName: string, itemSource: string) => void
  updateEquippedItems: (itemName: string) => void
  updateBagItems: (itemName: string) => void
  updateHomeChestItems: (itemName: string) => void
  updateNewItem: (itemName: string) => void
}

export const SheetContext = createContext<SheetContextType>(
  {} as SheetContextType,
)

interface SheetContextProviderProps {
  children: ReactNode
}

export function SheetContextProvider({ children }: SheetContextProviderProps) {
  const [charName, setCharName] = useState('')
  const [primaryAttributes, setPrimaryAttributes] = useState<PrimaryAttributes>(
    testPrimaryAttributes,
  )
  const [secondaryAttributesTable, setSecondaryAttributesTable] =
    useState<SecondaryAttributesTableProps>({
      title: '',
      minValue: 1,
      maxValue: 100,
      fields: {},
    })

  const [trainingTable, setTrainingTable] =
    useState<KeyValueTableProps>(testTrainingTable)
  const [skillsTable, setSkillsTable] =
    useState<KeyValueTableFields>(testSkillsTable)
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
      Object.values(primaryAttributes).reduce(
        (acc, currentValue) => acc + currentValue,
        0,
      ),
    )

    setSecondaryAttributesTable((currentState) => {
      const newTable = { ...currentState }

      const modBodyWill = Math.floor(
        (primaryAttributes.BODY + primaryAttributes.WILL) / 2,
      )

      newTable.fields = {
        STUN: modBodyWill * 10,
        RUN: primaryAttributes.SPD * 3,
        LEAP: Math.floor((primaryAttributes.SPD * 3) / 5),
        STA: modBodyWill * 5,
        ENC: primaryAttributes.BODY * 10,
        REC: modBodyWill,
        HP: modBodyWill * 5,
        VIGOR: 7,
      }

      // return { ...currentState, fields: newTable.fields }
      return newTable
    })
  }, [primaryAttributes])

  function updateCharName(newName: string) {
    setCharName(newName)
  }

  function updatePrimaryAttribute(
    attributeName: keyof PrimaryAttributes,
    newValue: number,
  ) {
    const newTable = { ...primaryAttributes }

    newTable[attributeName] = newValue

    setPrimaryAttributes(newTable)
  }

  function updateSkill(skillName: string, newValue: number) {
    const newTable = { ...skillsTable }

    const isForgotSkill: boolean = newValue === 0

    newTable[skillName] = newValue

    if (isForgotSkill) {
      delete newTable[skillName]
    }

    setSkillsTable(newTable)
  }

  function updateTrainingField(skillName: string, newValue: number) {
    const newTable = { ...trainingTable }

    const isFinishedTraining: boolean = newValue > 3

    newTable.fields[skillName] = newValue

    if (isFinishedTraining) {
      delete newTable.fields[skillName]
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
    const response = await fetch('http://localhost:3434/character_sheets/2')
    const data = await response.json()

    console.log(data)
    setPrimaryAttributes(data.primaryAttributes)
    setSkillsTable(data.skills)
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
        primaryAttributes,
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

        updatePrimaryAttribute,
        updateTrainingField,
        updateSkill,
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
