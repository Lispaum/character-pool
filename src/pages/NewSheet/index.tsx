import characterImage from '../../assets/meditating-geralt.gif'
import {
  SheetBodyContainer,
  SheetContainer,
  SheetHeaderContainer,
  TextBoxContainer,
} from './styles'
import { KeyValueTable } from '../../components/Tables/KeyValueTable'
import { createContext, useState } from 'react'
import {
  primaryAttributesTable,
  skillsTable,
  magicTable,
  background,
  secondaryAttributesTable,
  scrolls,
  trainableSkillsTable,
  currentTraining,
} from '../../contexts/tests/testData'
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
  skillsTable: KeyValueTableProps
  magicTable: ListTableProps
  background: string
}

export const SheetContext = createContext({
  primaryAttributesTable: { ...primaryAttributesTable },
  secondaryAttributesTable: { ...secondaryAttributesTable },
  skillsTable: { ...skillsTable },
  magicTable: { ...magicTable },
} as SheetContextType)

export function NewSheet() {
  const [charName, setCharName] = useState('Your Char Name')

  return (
    <SheetContext.Provider
      value={{
        primaryAttributesTable,
        secondaryAttributesTable,
        background,
        skillsTable,
        magicTable,
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
              <KeyValueTable {...primaryAttributesTable} />
              <KeyValueTable {...secondaryAttributesTable} />

              <div className="middleBlock">
                <img src={characterImage} alt="" />
                <TrainingTable {...currentTraining} />
              </div>
              <div className="skillsBlock">
                <KeyValueTable {...skillsTable} />
                <KeyValueTable {...trainableSkillsTable} />
              </div>
              <div className="magicBlock">
                <ListTable {...magicTable} />
                <ListTable {...scrolls} />
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
