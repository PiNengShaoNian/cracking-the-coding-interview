import { createWriteStream } from 'fs'
import { uniform } from '../../util/uniform'

export const generateRandomNums = (out: string, iter: number) => {
  const ws = createWriteStream(out)

  for (let i = 0; i < iter; ++i) {
    ws.write(uniform(0, iter) + '\n', 'utf-8')
  }

  ws.end()
}
