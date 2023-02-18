function RNG(max: number) {
  return Math.floor(Math.random() * max) + 1
}

export function roll(command: string) {
  // vai receber XdY, como 2d6
  let result = 0

  const rollCommand = command.split('d').map((element) => Number(element))

  for (let i = 0; i < rollCommand[0]; i++) {
    result += RNG(rollCommand[1])
  }

  return result
}

export function d10() {
  return RNG(10)
}
