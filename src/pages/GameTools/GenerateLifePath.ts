import { d10 } from './gameTools'

type option = {
  rangeRoof: number
  value: string
}

function randomPickBetween(possibleOptions: option[]) {
  let pickedValue: string | undefined = ''

  const rollResult = d10()

  pickedValue = possibleOptions.find(
    (option) => rollResult <= option.rangeRoof,
  )?.value

  return pickedValue
}

export function GenerateLifePath() {
  const ageOptions: option[] = [
    {
      rangeRoof: 2,
      value: `Infancy (-2 to the Trial of the Grasses)`,
    },
    {
      rangeRoof: 8,
      value: `Early Childhood (No Modifiers)`,
    },
    {
      rangeRoof: 10,
      value: `Late Childhood (+2 to the Trial of the Grasses)`,
    },
  ]
  const schoolOptions: option[] = [
    {
      rangeRoof: 2,
      value: `The Wolf School (No Penalty For Strong Strikes)`,
    },
    {
      rangeRoof: 4,
      value: `The Gryphon School (+2 Vigor Threshold)`,
    },
    {
      rangeRoof: 6,
      value: `The Cat School (Immune to Charm Attempts)`,
    },
    {
      rangeRoof: 8,
      value: `The Viper School (No Penalties for Dual Wielding)`,
    },
    {
      rangeRoof: 10,
      value: `The Bear School (-2 to Overall Armor Penalty)`,
    },
  ]
  const earlyTrainingOptions: option[] = [
    {
      rangeRoof: 1,
      value: `Wounded on the Gauntlet (-1 SPD)
      You were wounded while running the gauntlet around your School. Your leg was broken badly,
      and even after healing it is still slightly stiff.`,
    },
    {
      rangeRoof: 2,
      value: `Stolen Knowledge (+1 Witcher Diagram)
      While training at your School you snuck into the libraries of the keep and copied one of the secret
      witcher diagrams, smuggling the information out with you.`,
    },
    {
      rangeRoof: 3,
      value: `Made a Rival (Make 1 Witcher Enemy)
      While training at the keep you formed a rivalry with another witcher in training. Even after mu-
      tations, their hatred of you continues to boil.`,
    },
    {
      rangeRoof: 4,
      value: `Easy Mutations (+2 to the Trial of the Grasses)
      You adapted well to the lesser mutations and mutagenic mushrooms you were fed early in train-
      ing. When the time came for the Trial of the Grasses, you were well prepared.`,
    },
    {
      rangeRoof: 5,
      value: `Magical Backfire (-1 Vigor Threshold)
      A failure casting a sign caused minor damage to your body. It was horrifically painful, and even
      after your body healed your Vigor Threshold was lowered.`,
    },
    {
      rangeRoof: 6,
      value: `Top of Your Class (+1 Swordsmanship)
      You were one of the best swordsmen in your class and your skills haven’t dulled. You perform the
      complex movements, pirouettes, and spins of the witcher with ease.`,
    },
    {
      rangeRoof: 7,
      value: `Bad Reaction to Mutagens (-2 to the Trial of the Grasses)
      You had allergic reactions to the mutagenic mushrooms and chemical compounds given to you in
      early training. When the Trial of the Grasses came, it was more difficult.`,
    },
    {
      rangeRoof: 8,
      value: `Made a Friend (Make a Witcher Friend)
      You made a fast friend in your early years of witcher training. The rough training and dangerous
      situations sealed your bond.`,
    },
    {
      rangeRoof: 9,
      value: `Wounded by the Pendulum (-1 REF)
      You were wounded while training on the pendulum. You fell from the posts and broke several
      bones on the rocks below. While healed, you are a little stiffer than before.`,
    },
    {
      rangeRoof: 10,
      value: `Extensive Research (+1 Witcher Training)
      While sword training was important, you spent most of your free time in the libraries of the keep
      studying the monsters of the world and taking notes.`,
    },
  ]
  const trialsOptions: option[] = [
    {
      rangeRoof: 1,
      value: `Nearly Fatal (Additional -1 EMP & -1 BODY)
      The Trial of the Grasses nearly destroyed your body. Though you survived the process, your body
      and mind were damaged permanently.`,
    },
    {
      rangeRoof: 3,
      value: `Poorly Accepted (Additional-1 EMP)
      The Trial of the Grasses went poorly and the witchers in charge of mutation weren’t entirely sure
      you would make it. You survived, but not without mental scars.`,
    },
    {
      rangeRoof: 9,
      value: `Passable Mutations (No Modifiers)
      The Trial of the Grasses went well. You passed into the ranks of witchers with nothing more than
      memories of horrible pain.`,
    },
    {
      rangeRoof: 10,
      value: `Extra Mutations (Additional +1 EMP & +1 DEX)
      Your body was very receptive to the Trial of the Grasses and you had extra mutations applied to
      you. Your body handled it well, and all of the pain paid off in the end.`,
    },
  ]
  const mostImportantEventOptions: option[] = [
    {
      rangeRoof: 1,
      value: `Given a Child by the Law of Surprises
      Along your travels you invoked the Law of Surprises and received a child. They may have been a boy, in
      which case they were made into a witcher, or a girl, in which case their fate was up to you.`,
    },
    {
      rangeRoof: 2,
      value: `Hunted by a Sentient Monster
      The tables turned during one of your hunts. Sentient monsters like grave hags and katakan can be dangerous
      quarry, and you wound up becoming the hunted for a stressful night.`,
    },
    {
      rangeRoof: 3,
      value: `Fought Alongside a Knight
      You did battle alongside a noble knight. This may have been against both of your wishes or even an accident,
      but fighting beside a noble changed your outlook on knights and your job as a witcher.`,
    },
    {
      rangeRoof: 4,
      value: `Captured by a Mage for Testing
      Mages lust after the secrets of Witcher mutations. At some point in your life, you were captured by a mage
      who experimented on you in an attempt to reverse-engineer them.`,
    },
    {
      rangeRoof: 5,
      value: `Worked for a Nobleman
      For a time you worked for a nobleman. The pay was good, but it was strange and aggravating to have to hide
      most of your actions to avoid shaming the family by bringing their secrets to light.`,
    },
    {
      rangeRoof: 6,
      value: `Went Beyond the Boundaries
      Once, you traveled beyond the borders of the Continent—past the Dragon Mountains, the Tir Tochair or
      Blue Mountains, or the Great Sea. You have seen far lands unknown to most others.`,
    },
    {
      rangeRoof: 7,
      value: `Meaningful Romance
      Most witchers remain neutral and avoid meaningful relationships. However, this didn’t stop you. You fell in
      love and actually considered settling down. It still occurs to you sometimes.`,
    },
    {
      rangeRoof: 8,
      value: `Fought for your Keep
      You fought at a siege of your keep. You were outnumbered and overpowered, but you stayed nonetheless. You
      survived the siege with serious wounds, but saw your brethren dying around you.`,
    },
    {
      rangeRoof: 9,
      value: `Gained Infamy
      After helping a city with a monster, the people became afraid and turned on you. They might have even tried
      to kill you. Either way, you’ve seen what kind of reward you can expect from people.`,
    },
    {
      rangeRoof: 10,
      value: `Gained Fame
      You were well-received in a town after helping them with a monster. You didn’t expect free drinks or women
      casting you glances, but that’s what you got. You haven’t seen such kindness again, but it was heartening.`,
    },
  ]
  const currentStatusOptions: option[] = [
    {
      rangeRoof: 1,
      value: `Became a Personal Witcher
      You signed on to work for a merchant group, noble house, or important person as a personal
      witcher. You work for modest pay and hunt what they tell you to hunt. Mostly it’s monsters...`,
    },
    {
      rangeRoof: 2,
      value: `Looking For Work
      The hard life of a witcher continues. You spend a lot of time on the road, lamenting the efficiency
      of your kind and the extinction of monsters. You travel constantly and never settle down.`,
    },
    {
      rangeRoof: 8,
      value: `Became a Hermit
      You gave up on the life of a witcher and traveled out into the wilderness. Now you live as a hermit
      in the wilds. Only now that monsters are returning have you started to venture out again.`,
    },
    {
      rangeRoof: 9,
      value: `Turned to a Normal Life
      You’ve tried for decades to leave the witcher life behind. It’s difficult, since people won’t ever really
      accept you, but you have managed to cobble together an almost normal life. Good luck.`,
    },
    {
      rangeRoof: 10,
      value: `Became a Dangerous Criminal
      Eventually all the negativity and thankless people got to you— you decided that with fewer and
      fewer monsters, it was time to start hunting people. You can determine what you do to survive.`,
    },
  ]

  return {
    whenItStarted: randomPickBetween(ageOptions),
    whatSchool: randomPickBetween(schoolOptions),
    howwasEarlyTraining: randomPickBetween(earlyTrainingOptions),
    howwasTrials: randomPickBetween(trialsOptions),
    mostImportantEvent: randomPickBetween(mostImportantEventOptions),
    currentStatus: randomPickBetween(currentStatusOptions),
  }
}
