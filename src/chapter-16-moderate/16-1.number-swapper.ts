export const swap = (ref: { a: number; b: number }): void => {
  ref.a = ref.a ^ ref.b
  ref.b = ref.a ^ ref.b
  ref.a = ref.a ^ ref.b
}
