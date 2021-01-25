export class BitInteger extends Int8Array {
  public static readonly INTEGER_SIZE: number = 32
  constructor(n: number) {
    super(32)

    for (let i = 0; i < BitInteger.INTEGER_SIZE; ++i) {
      if (n & (1 << i)) {
        this[i] = 1
      }
    }
  }
}

export const findMissing = (arr: BitInteger[]): number => {
  const core = (arr: BitInteger[], column: number): number => {
    if (column >= BitInteger.INTEGER_SIZE) return 0

    const zeroBits: BitInteger[] = []
    const oneBits: BitInteger[] = []

    for (let i = 0; i < arr.length; ++i) {
      if (arr[i][column] === 0) {
        zeroBits.push(arr[i])
      } else oneBits.push(arr[i])
    }

    if (zeroBits.length <= oneBits.length) {
      const v = core(zeroBits, column + 1)
      return (v << 1) | 0
    } else {
      const v = core(oneBits, column + 1)
      return (v << 1) | 1
    }
  }

  return core(arr, 0)
}
