export const isSubString = (str: string, sub: string): boolean => {
  if (str.length !== sub.length) return false

  return (str + str).includes(sub)
}
