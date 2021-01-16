import { createWriteStream } from 'fs'
import { uniform } from '../../util/uniform'

export const generateRandomNums = (out: string, iter: number) => {
  const blockCount = 100
  const batchSize = (iter / blockCount) >> 0
  for (let i = 0; i < blockCount; ++i) {
    const ws = createWriteStream(out, { flags: 'a' })
    for (let j = i * batchSize; j < Math.min(batchSize * (i + 1), iter); ++j) {
      ws.write(uniform(0, (iter / 2) >> 0) + '\n', 'utf-8')
    }
  }
}
