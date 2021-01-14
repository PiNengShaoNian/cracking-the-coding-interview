import http from 'http'
import https from 'https'

export const request = (url: string, timeout?: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    const method = url.startsWith('https') ? https : http

    if (typeof timeout !== 'undefined') {
      setTimeout(() => {
        reject(new Error('Timeout'))
      }, timeout)
    }
    method
      .get(url, function (res) {
        var html = ''
        // 绑定data事件 回调函数 累加html片段
        res.on('data', function (data) {
          html += data
        })

        res.on('end', function () {
          resolve(html)
        })
      })
      .on('error', function (err) {
        reject(err)
      })
  })
}
