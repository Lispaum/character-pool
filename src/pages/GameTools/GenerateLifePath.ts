import { d10 } from './gameTools'
import {
  familyOptions,
  nilfgaardianOptions,
  northernOriginOptions,
  parentsOptions,
  regionOptions,
  vassalOriginOptions,
} from './Tables/HumanLifePathTables'
import {
  ageOptions,
  currentStatusOptions,
  earlyTrainingOptions,
  mostImportantEventOptions,
  schoolOptions,
  trialsOptions,
} from './Tables/WitcherLifePathTables'

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

  if (!pickedValue) return ''

  return pickedValue
}

export function GenerateLifePath(
  characterRace: 'Witcher' | 'Human' | 'Non-Human',
) {
  const fallback = { aaa: 'aaa' }
  if (characterRace === 'Witcher') {
    return GenerateWitcherLifePath()
  }

  if (characterRace === 'Human') {
    return GenerateHumanLifePath()
  }
  if (characterRace === 'Non-Human') {
    return {}
  }
  // gambiarra below
  return fallback
}

export function GenerateWitcherLifePath() {
  return {
    whenItStarted: randomPickBetween(ageOptions),
    whatSchool: randomPickBetween(schoolOptions),
    howwasEarlyTraining: randomPickBetween(earlyTrainingOptions),
    howwasTrials: randomPickBetween(trialsOptions),
    mostImportantEvent: randomPickBetween(mostImportantEventOptions),
    currentStatus: randomPickBetween(currentStatusOptions),
  }
}

export function GenerateHumanLifePath() {
  const region = randomPickBetween(regionOptions)
  let homeland: string = ''

  if (region === 'Nilfgaard') {
    homeland = randomPickBetween(nilfgaardianOptions)
    if (homeland === 'Vassal') {
      homeland = randomPickBetween(vassalOriginOptions)
    }
  } else if (region === 'Northern Kingdoms') {
    homeland = randomPickBetween(northernOriginOptions)
  }

  const family = randomPickBetween(familyOptions)
  let parents = ''
  if (family === familyOptions[0].value) {
    parents = randomPickBetween(parentsOptions)
  }

  return {
    region,
    homeland,
    family,
    parents,
  }
}
