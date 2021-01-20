import { uniform } from '../../util/uniform'
import { minus, divide, multiply } from '../16-9.operations'

describe('operations', () => {
  test('minus', () => {
    for (let i = 0; i < 10000; ++i) {
      const a = uniform(-100000, 100000)
      const b = uniform(-100000, 100000)
      expect(minus(a, b)).toBe(a - b)
    }
  })

  test('multiply', () => {
    for (let i = 0; i < 1000; ++i) {
      const a = uniform(-10000, 10000)
      const b = uniform(-10000, 10000)

      //toBe使用Object.is -0和0不相等
      expect(multiply(a, b)).toBe(a * b === 0 ? 0 : a * b)
    }
  })

  test('divide', () => {
    for (let i = 0; i < 1000; ++i) {
      const a = uniform(-100000, 100000)
      const b = uniform(-100000, 100000)

      const sign = a * b > 0 ? 1 : -1
      const value = Math.floor(Math.abs(a) / Math.abs(b))
      expect(divide(a, b)).toBe(value === 0 ? 0 : value * sign)
    }
  })
})
