import characterImage from '../../assets/meditating-geralt.gif'
import {
  SheetBodyContainer,
  SheetContainer,
  SheetHeaderContainer,
  TextBoxContainer,
} from './styles'
import { Table } from '../../components/Table'
import {
  primaryAttributesTableData,
  secondaryAttributesTableData,
  skillsTableData,
  magicTableData,
} from '../../contexts/tests/testData'

export function Sheets() {
  return (
    <SheetContainer>
      <form action=" ">
        <fieldset>
          <SheetHeaderContainer>
            <div>Geralt of Rivia</div>
          </SheetHeaderContainer>
          <SheetBodyContainer>
            <Table {...primaryAttributesTableData} />
            <Table {...secondaryAttributesTableData} />

            <img src={characterImage} alt="" />
            <Table {...skillsTableData} />
            <Table {...magicTableData} />
            <TextBoxContainer>
              <p>
                Geralt of Rivia, Eh? Well there’s a hero if I ever hearda one.
                Ya see witchers ain’t too highly thought of around these parts,
                but Geralt of Rivia’s different. Most witchers don’t get in-
                volved in our affairs. Just sorta pass through town, kill some
                monsters here and there then move on their way. Heh, hard to get
                to likin’ someone who only shows up to kill and leaves when the
                killin’s done. Geralt on the other hand, this whoreson’s name’s
                been on every- body’s tongues from Kovir to Nilfgaard. Name a
                major event in the last few decades and this guy’s probably been
                there. Fought at the battle of Brenna against the black ones,
                was part of the destruction of Stygga Castle in Nilfgaard— swear
                he’s either lookin’ for trouble or he’s the unluckiest man
                alive, heh. Last few years it’s been gettin’ worse. First off,
                the whorseon died! Aye, now that’s one hell of a trick ain’t it?
                Folks say Geralt of Rivia was killed in Rivia by some blighter
                named Rob. Course even that can’t keep this witcher down, and
                just a bit later he’s back huntin’ for a bunch of criminals who
                raided his home in the Blue Mountains. Leaves Geralt in Vizima
                where he’s gotta clean up the whole mutant mess Jaques De
                Aldersburg brought down on the city. Then, just last year,
                Geralt’s put on the block for the murder of King Foltest of
                Temeria, only to escape and go on a hunt for the real killer.
                Winds up at the sum- mit at Loc Muinne where all hell breaks
                loose again. There’s a dragon and rebel mages, and the whole
                thing comes down to Geralt again. Guy can’t catch a break.
                Either way. Here he’s wanderin’ the North lookin’ for his lost
                lady love, Yennefer of Vengerburg and some lass with ashen hair.
                Wish the best of luck to him.
              </p>
              <div>–Rodolf Kazmer</div>
            </TextBoxContainer>
          </SheetBodyContainer>
        </fieldset>
      </form>
    </SheetContainer>
  )
}
