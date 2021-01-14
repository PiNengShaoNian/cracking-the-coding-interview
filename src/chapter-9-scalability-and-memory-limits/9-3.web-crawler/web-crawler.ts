import { request } from './request'
import { TaskManager } from './TaskManager'

export const webCrawler = (
  url: string,
  depth: number = 100,
  parallel: number = 4
) => {
  const visited: Set<string> = new Set()
  const htmlAnchorRE = /<a\s+href="(http.+?)"/g
  const distTo: Map<string, number> = new Map()
  distTo.set(url, 0)

  const taskManager = new TaskManager<string>(parallel, async (url) => {
    if (visited.has(url)) return

    visited.add(url)
    const html = await request(url, 3000)
    let match: string[] | null

    console.log({
      url,
      depth: distTo.get(url),
    })

    while ((match = htmlAnchorRE.exec(html))) {
      const dist = distTo.get(url)! + 1
      if (dist <= depth && !visited.has(match[1])) {
        distTo.set(match[1], dist)
        taskManager.addTask(match[1])
      } else {
        break
      }
    }

    htmlAnchorRE.lastIndex = 0
  })

  taskManager.addTask(url)
}

// webCrawler('https://www.baidu.com/')
webCrawler('https://www.cnblogs.com/daysme/p/9109214.html')
