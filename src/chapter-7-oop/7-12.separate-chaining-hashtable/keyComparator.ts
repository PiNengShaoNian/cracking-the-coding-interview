import { Comparable } from "./Comparable"

type Key = string | number | Comparable<Key>

export const keyComparator = (key1: Key, key2: Key): number => {
  if (typeof key1 === 'number') {
    return key1 - (key2 as number)
  } else if (typeof key1 === 'string') {
    if (key1 === key2) return 0
    return key1 < (key2 as string) ? -1 : 1
  } else {
    return (key1 as Comparable<Key>).compareTo(key2)
  }
}
