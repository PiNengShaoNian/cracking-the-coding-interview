import { Track } from '../10-10.rank-from-stream'

test('能获得正确的秩', () => {
  const track = new Track()

  const arr = [5, 1, 4, 4, 5, 9, 7, 13, 3]

  for (let i = 0; i < arr.length; ++i) {
    track.track(arr[i])
  }

  expect(track.getRankOfNumber(1)).toBe(0)
  expect(track.getRankOfNumber(3)).toBe(1)
  expect(track.getRankOfNumber(4)).toBe(3)
  expect(track.getRankOfNumber(5)).toBe(5)
})
