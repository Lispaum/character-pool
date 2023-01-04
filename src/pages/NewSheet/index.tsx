import characterImage from '../../assets/meditating-geralt.gif'

import {
  SheetBodyContainer,
  SheetContainer,
  SheetHeaderContainer,
} from './styles'

import { PrimaryAttributesTable } from '../../components/Tables/PrimaryAttributesTable'
import { TrainingTable } from '../../components/Tables/TrainingTable'
import { TotalSum } from '../../components/Tables/TotalSum'
import { SecondaryAttributesTable } from '../../components/Tables/SecondaryAttributesTable'
import { TrainableSkillsTable } from '../../components/Tables/TrainableSkillsTable'
import { SkillsTable } from '../../components/Tables/SkillsTable'
import { ScrollsTable } from '../../components/Tables/ScrollsTable'
import { MagicTable } from '../../components/Tables/MagicTable'
import { SheetContextProvider } from './SheetContextProvider'
import { Background } from '../../components/Background'
import { CharacterName } from '../../components/CharacterName'

export function NewSheet() {
  return (
    <SheetContextProvider>
      <SheetContainer>
        <form action=" ">
          <fieldset>
            <SheetHeaderContainer>
              <CharacterName />
            </SheetHeaderContainer>
            <SheetBodyContainer>
              <TotalSum />
              <PrimaryAttributesTable />
              <SecondaryAttributesTable />

              <div className="middleBlock">
                <img src={characterImage} alt="Character's Image" />
                <TrainingTable />
              </div>

              <div className="skillsBlock">
                <SkillsTable />
                <TrainableSkillsTable />
              </div>

              <div className="magicBlock">
                <MagicTable />
                <ScrollsTable />
              </div>

              <Background />
            </SheetBodyContainer>
          </fieldset>
        </form>
      </SheetContainer>
    </SheetContextProvider>
  )
}
