import characterImage from '../../assets/meditating-geralt.gif'
import {
  SheetContainer,
  SheetHeaderContainer,
  TextBoxContainer,
} from './styles'
import { Table } from '../../components/Table'

export function Sheets() {
  const primaryAttributes = [
    { fieldKey: 'INT', fieldValue: 6 },
    { fieldKey: 'REF', fieldValue: 14 },
    { fieldKey: 'DEX', fieldValue: 10 },
    { fieldKey: 'BODY', fieldValue: 8 },
    { fieldKey: 'SPD', fieldValue: 9 },
    { fieldKey: 'EMP', fieldValue: 3 },
    { fieldKey: 'CRA', fieldValue: 5 },
    { fieldKey: 'WILL', fieldValue: 8 },
  ]

  const secondaryAttributes = [
    { fieldKey: 'STUN', fieldValue: 8 },
    { fieldKey: 'RUN', fieldValue: 27 },
    { fieldKey: 'STA', fieldValue: 5 },
    { fieldKey: 'ENC', fieldValue: 40 },
    { fieldKey: 'REC', fieldValue: 80 },
    { fieldKey: 'HP', fieldValue: 55 },
    { fieldKey: 'VIGOR', fieldValue: 7 },
  ]

  const skills = [
    { fieldKey: 'Awareness', fieldValue: 9 },
    { fieldKey: 'Riding', fieldValue: 4 },
    { fieldKey: 'Spell Casting', fieldValue: 8 },
    { fieldKey: 'Alchemy', fieldValue: 5 },
    { fieldKey: 'Brawling', fieldValue: 6 },
    { fieldKey: 'Dodge/Escape', fieldValue: 10 },
    { fieldKey: 'Wildernes Survival', fieldValue: 9 },
    { fieldKey: 'Swordsmanship', fieldValue: 11 },
    { fieldKey: 'Athletics', fieldValue: 10 },
    { fieldKey: 'Small Blades', fieldValue: 9 },
    { fieldKey: 'Melle', fieldValue: 7 },
    { fieldKey: 'Deduction', fieldValue: 8 },
    { fieldKey: 'Crossbow', fieldValue: 6 },
    { fieldKey: 'Stealth', fieldValue: 8 },
    { fieldKey: 'Intimidation', fieldValue: 9 },
    { fieldKey: 'Physique', fieldValue: 6 },
    { fieldKey: 'Resist Coercion', fieldValue: 8 },
    { fieldKey: 'Resist Magic', fieldValue: 6 },
    { fieldKey: 'Resist Endurance', fieldValue: 10 },
  ]

  return (
    <SheetContainer>
      <SheetHeaderContainer>
        <div>Geralt of Rivia</div>
      </SheetHeaderContainer>
      <form action=" ">
        <Table fields={primaryAttributes} />
        <Table fields={secondaryAttributes} />

        <img src={characterImage} alt="" />
        <Table fields={skills} />
        <TextBoxContainer>
          <p>
            Geralt of Rivia, Eh? Well there’s a hero if I ever hearda one. Ya
            see witchers ain’t too highly thought of around these parts, but
            Geralt of Rivia’s different. Most witchers don’t get in- volved in
            our affairs. Just sorta pass through town, kill some monsters here
            and there then move on their way. Heh, hard to get to likin’ someone
            who only shows up to kill and leaves when the killin’s done. Geralt
            on the other hand, this whoreson’s name’s been on every- body’s
            tongues from Kovir to Nilfgaard. Name a major event in the last few
            decades and this guy’s probably been there. Fought at the battle of
            Brenna against the black ones, was part of the destruction of Stygga
            Castle in Nilfgaard— swear he’s either lookin’ for trouble or he’s
            the unluckiest man alive, heh. Last few years it’s been gettin’
            worse. First off, the whorseon died! Aye, now that’s one hell of a
            trick ain’t it? Folks say Geralt of Rivia was killed in Rivia by
            some blighter named Rob. Course even that can’t keep this witcher
            down, and just a bit later he’s back huntin’ for a bunch of
            criminals who raided his home in the Blue Mountains. Leaves Geralt
            in Vizima where he’s gotta clean up the whole mutant mess Jaques De
            Aldersburg brought down on the city. Then, just last year, Geralt’s
            put on the block for the murder of King Foltest of Temeria, only to
            escape and go on a hunt for the real killer. Winds up at the sum-
            mit at Loc Muinne where all hell breaks loose again. There’s a
            dragon and rebel mages, and the whole thing comes down to Geralt
            again. Guy can’t catch a break. Either way. Here he’s wanderin’ the
            North lookin’ for his lost lady love, Yennefer of Vengerburg and
            some lass with ashen hair. Wish the best of luck to him.
          </p>
          <div>–Rodolf Kazmer</div>
        </TextBoxContainer>
      </form>
    </SheetContainer>
  )
}
