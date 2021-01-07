import { printBinary } from '../5-2.print-binary'

test('能正常的打印数字', () => {
  expect(printBinary(0.5)).toBe('.1')
  expect(printBinary(0.75)).toBe('.11')
  expect(printBinary(0.875)).toBe('.111')
})
