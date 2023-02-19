function RNGCreator(max: number) {
  return () => Math.floor(Math.random() * max) + 1
}

function RNG(max: number) {
  return Math.floor(Math.random() * max) + 1
}

export function roll(command: string) {
  // it receives a command like XdY, like 2d6
  let result = 0

  const [amountOfRolls, diceKind] = command
    .split('d')
    .map((element) => Number(element))

  // TODO: can I optimize this by creating a function in this scope to roll the correct dice? Does the code below makes sense? 🤔

  const throwDice = RNGCreator(diceKind)

  for (let i = 0; i < amountOfRolls; i++) {
    result += throwDice()
  }

  return result
}

export function d2() {
  return RNG(2)
}

export function d10() {
  return RNG(10)
}

export function testRNGRandomness(
  diceKind: number = 100,
  amountOfRolls: number = 10000000,
) {
  const sample = new Array<number>(diceKind + 1).fill(0)

  const throwDice = RNGCreator(diceKind)

  for (let i = 0; i < amountOfRolls; i++) {
    sample[throwDice()]++
  }

  const testResult = sample.map((number, index) => {
    return `${index}s frequency: ${(number / amountOfRolls) * 100}%`
  })

  return testResult
}
