import { createReadStream, writeFileSync } from 'fs'
import { join } from 'path'
import readline from 'readline'
import MaxHeap from '../../util/MaxHeap'
import { generateRandomNums } from './generateRandomNums'

generateRandomNums(join(__dirname, 'source/source.txt'), 10000 * 8)

const sort = (batchSize: number, source: string) => {
  const rl = readline.createInterface({
    input: createReadStream(source),
  })
  console.log(batchSize)
  const lines: string[] = []
  rl.on('line', (_: string) => {
    if (rl.cursor > 0 && rl.cursor % batchSize === 0) {
      writeFileSync(
        join(__dirname, `merge/block${Math.floor(rl.cursor / batchSize)}.txt`),
        lines.join('\n')
      )
      lines.length = 0
    }
  })
}

sort(100, join(__dirname, 'source/source.txt'))
