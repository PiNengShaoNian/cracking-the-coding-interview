import { generateRandomNums } from '../10-6.external-sort/generateRandomNums'

import { join } from 'path'
import { createReadStream, existsSync } from 'fs'
import readline from 'readline'

if (!existsSync(join(__dirname, 'ints.txt')))
  generateRandomNums(join(__dirname, 'ints.txt'), 40 * 100000000)

export const numberOfInts = async () => {
  const rl = readline.createInterface({
    input: createReadStream(join(__dirname, 'ints.txt')),
  })

  const bitfield = new Int8Array(40 * 10000000 + 1)
  let result = -1
  rl.on('line', (line) => {
    bitfield[+line] = 1
  })

  result = await new Promise((resolve) => {
    rl.on('close', () => {
      for (let i = 0; i < bitfield.length; ++i) {
        if (bitfield[i] === 0) {
          resolve(i)
          return
        }
      }
    })
  })

  return result
}

numberOfInts().then((v) => console.log(v))
