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
import { Bag } from '../../components/Inventory/Bag'
import { Equipped } from '../../components/Inventory/Equipped'
import { HomeChest } from '../../components/Inventory/HomeChest'

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
              <div className="leftBlock">
                <div className="attributesBlock">
                  <TotalSum />
                  <PrimaryAttributesTable />
                  <SecondaryAttributesTable />
                </div>
              </div>

              <div className="middleBlock">
                <img src={characterImage} alt="Character's Image" />
                <div className="inventoryBlock">
                  <HomeChest />
                  <Bag />
                  <Equipped />
                </div>
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
