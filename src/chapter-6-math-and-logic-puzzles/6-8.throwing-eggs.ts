const breakingPoint = 30
let countDrops = 0

const drop = (floors: number): boolean => {
  ++countDrops
  return floors >= breakingPoint
}

const findBreakingPoint = (floors: number): number => {
  let interval = 14
  let prevFloors = 0
  let egg1 = interval

  while (egg1 <= floors && !drop(egg1)) {
    prevFloors = egg1
    --interval
    egg1 += interval
  }

  let egg2 = prevFloors + 1

  while (egg2 <= floors && !drop(egg2)) {
    ++egg2
  }

  return egg2 <= floors ? egg2 : -1
}
