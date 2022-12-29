import characterImage from '../../assets/meditating-geralt.gif'

import {
  BackgroundContainer,
  SheetBodyContainer,
  SheetContainer,
  SheetHeaderContainer,
} from './styles'

import { PrimaryAttributesTable } from '../../components/Tables/PrimaryAttributesTable'
import { useContext } from 'react'
import { TrainingTable } from '../../components/Tables/TrainingTable'
import { TotalSum } from '../../components/Tables/TotalSum'
import { SecondaryAttributesTable } from '../../components/Tables/SecondaryAttributesTable'
import { TrainableSkillsTable } from '../../components/Tables/TrainableSkillsTable'
import { SkillsTable } from '../../components/Tables/SkillsTable'
import { ScrollsTable } from '../../components/Tables/ScrollsTable'
import { MagicTable } from '../../components/Tables/MagicTable'
import { SheetContext, SheetContextProvider } from './SheetContextProvider'

export function NewSheet() {
  const { charName, updateCharName, background, updateBackground } =
    useContext(SheetContext)

  console.log(background)
  return (
    <SheetContextProvider>
      <SheetContainer>
        <form action=" ">
          <fieldset>
            <SheetHeaderContainer>
              <input
                type="text"
                placeholder="Character Name"
                value={charName}
                // onChange={(event) => updateCharName(event.target.value)}
              />
            </SheetHeaderContainer>
            <SheetBodyContainer>
              <TotalSum />
              <PrimaryAttributesTable />
              <SecondaryAttributesTable />

              <div className="middleBlock">
                <img src={characterImage} alt="" />
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

              <BackgroundContainer>
                <input
                  type="text"
                  placeholder="Character's Background"
                  value={background}
                  onChange={(event) => updateBackground(event.target.value)}
                />
                <div>–Rodolf Kazmer</div>
              </BackgroundContainer>
            </SheetBodyContainer>
          </fieldset>
        </form>
      </SheetContainer>
    </SheetContextProvider>
  )
}
