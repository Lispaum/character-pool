import { d10 } from './gameTools'
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
  if (characterRace === 'Witcher') {
    return {
      whenItStarted: randomPickBetween(ageOptions),
      whatSchool: randomPickBetween(schoolOptions),
      howwasEarlyTraining: randomPickBetween(earlyTrainingOptions),
      howwasTrials: randomPickBetween(trialsOptions),
      mostImportantEvent: randomPickBetween(mostImportantEventOptions),
      currentStatus: randomPickBetween(currentStatusOptions),
    }
  }

  if (characterRace === 'Human') {
    return {}
  }
  if (characterRace === 'Non-Human') {
    return {}
  }
}
