export const merge = (arr1: number[], arr2: number[]): void => {
  let indexMerged = arr1.length + arr2.length - 1
  let index1 = arr1.length - 1
  let index2 = arr2.length - 1

  while (index2 >= 0) {
    if (index1 >= 0 && arr1[index1] >= arr2[index2]) {
      arr1[indexMerged] = arr1[index1]
      --index1
    } else {
      arr1[indexMerged] = arr2[index2]
      --index2
    }

    --indexMerged
  }
}
