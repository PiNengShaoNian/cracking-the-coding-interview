export const getChineseInt = (n: number): string => {
  if (n > 2 ** 31 - 1) {
    throw new Error('Invalid input')
  }

  const result: string[] = []
  const numberToChinese: Record<number, string> = {
    [10 ** 8]: '亿',
    [10 ** 4]: '万',
    [10 ** 3]: '千',
    [10 ** 2]: '百',
    [10 ** 1]: '十',
  }
  const numberToChinese1: Record<number, string> = {
    [9]: '九',
    [8]: '八',
    [7]: '七',
    [6]: '六',
    [5]: '五',
    [4]: '四',
    [3]: '三',
    [2]: '二',
    [1]: '一',
  }

  for (let i = 8; i >= 0; --i) {
    let power10 = 10 ** i
    if (n < power10) continue
    let number: number
    //处理千万，百万，十万的情况
    if (i === 7 || i === 6 || i === 5) {
      number = Math.floor(n / 10000)
      n -= number * 10000
      power10 = 10000
    } else {
      number = Math.floor(n / power10)
      n -= number * power10
    }

    if (number > 0) {
      //类似于300万这中情况，调用递归生成 3百 + 万
      const a = number > 9 ? getChineseInt(number) : numberToChinese1[number]
      const b = numberToChinese[power10] ?? ''
      result.push(a + b)
    }
  }

  return result.join('')
}
