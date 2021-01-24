export const calculate = (expr: string): number => {
  expr.trim()

  if (!expr) return 0

  const readInteger = (expr: string, start: number): [number, number] => {
    let result = ''
    let index = start

    while (index < expr.length) {
      if (expr[index] === ' ') {
        ++index
        continue
      }
      if (expr[index] >= '0' && expr[index] <= '9') {
        result += expr[index]
        ++index
      } else break
    }

    if (!result) throw new Error(`Read integer failed from index ${start}`)

    return [+result, index]
  }

  const readOperator = (expr: string, start: number): [string, number] => {
    let index = start

    while (index < expr.length) {
      if (expr[index] === ' ') {
        ++index
        continue
      }
      if (
        expr[index] === '+' ||
        expr[index] === '-' ||
        expr[index] === '*' ||
        expr[index] === '/'
      )
        return [expr[index], index + 1]
      else throw new Error(`Read operator failed from index ${start}`)
    }

    return ['', index]
  }

  const funcs = {
    '+': (a: number, b: number) => a + b,
    '-': (a: number, b: number) => a - b,
    '*': (a: number, b: number) => a * b,
    '/': (a: number, b: number) => a / b,
  }

  const core = (expr: string, index: number): number => {
    const [num1, endOfNum1] = readInteger(expr, index)
    const [op1, endOfOp1] = readOperator(expr, endOfNum1)

    if (!op1) return num1

    if (op1 === '+' || op1 === '-') {
      return funcs[op1](num1, core(expr, endOfOp1))
    } else {
      let result = num1
      let nextOp: string
      let start = endOfOp1
      let nextNum
      ;[nextNum, start] = readInteger(expr, start)
      ;[nextOp, start] = readOperator(expr, start)
      result = funcs[op1 as '*' | '/'](result, nextNum)

      while (nextOp === '*' || nextOp === '/') {
        ;[nextNum, start] = readInteger(expr, start)
        result = funcs[nextOp](result, nextNum)
        ;[nextOp, start] = readOperator(expr, start)
      }

      if (!nextOp) return result

      return funcs[nextOp as '+' | '-'](result, core(expr, start))
    }
  }

  return core(expr, 0)
}
