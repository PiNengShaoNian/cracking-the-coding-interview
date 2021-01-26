import { Queue } from '../util/Queue'

export const waterPuzzle = (n: number): number[] => {
  const queue = new Queue<number>()
  const visited: boolean[] = []
  const edgeTo: number[] = []

  n %= 5
  n %= 3

  //若水壶1的容量为x，水壶2的容量为y则用数字 x * 10 + y 代表该状态
  //0就是两个水壶都是空的
  queue.enqueue(0)
  visited[0] = true
  let end = -1

  while (!queue.isEmpty()) {
    const cur = queue.dequeue()!

    //水壶1中的水
    const a = Math.floor(cur / 10)
    //水壶2中的水
    const b = cur % 10

    //下一步会出现的各种情况
    const nexts: number[] = []

    //将水壶1或者水壶2加满水，另一个则保持不变
    nexts.push(5 * 10 + b)
    nexts.push(a * 10 + 3)

    //将水壶1或者水壶2倒空，另一个则不变
    nexts.push(0 * 10 + b)
    nexts.push(a * 10 + 0)

    //将水壶1的水倒入水壶2中,倒的水最多使水壶2的水刚好倒满
    const x = Math.min(a, 3 - b)
    nexts.push((a - x) * 10 + (b + x))

    //将水壶2的水倒入水壶1中,倒的水最多使水壶1的水刚好倒满
    const y = Math.min(5 - a, b)
    nexts.push((a + y) * 10 + (b - y))

    for (const next of nexts) {
      if (!visited[next]) {
        queue.enqueue(next)
        visited[next] = true
        edgeTo[next] = cur

        //若有一个水壶中的水刚好等于目标值
        if (Math.floor(next / 10) === n || next % 10 === n) {
          const res = []

          while (end !== 0) {
            res.push(end)
            end = edgeTo[end]
          }
          res.push(0)
          return res
        }
      }
    }
  }

  return []
}
