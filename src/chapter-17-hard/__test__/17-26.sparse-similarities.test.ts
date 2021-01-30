import { computeSimilarities } from '../17-26.sparse-similarities'

test('能求出正确的相似度', () => {
  const similarities = computeSimilarities(
    new Map([
      [
        13,
        {
          id: 13,
          words: [14, 15, 100, 9, 3],
        },
      ],
      [
        16,
        {
          id: 16,
          words: [32, 1, 9, 3, 5],
        },
      ],
      [
        19,
        {
          id: 19,
          words: [15, 29, 2, 6, 8, 7],
        },
      ],
      [
        24,
        {
          id: 24,
          words: [7, 10],
        },
      ],
    ])
  )

  expect(similarities.get('13-19')).toBe(0.1)
  expect(similarities.get('13-16')).toBe(0.25)
  expect(similarities.get('19-24')).toBeCloseTo(0.14285)
})
