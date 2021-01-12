import { move, Tower } from '../8-6.tower-of-hanoi'

test('能正确的移动汉诺塔', () => {
  {
    const tower3 = new Tower(3)
    const tower2 = new Tower(2)
    const tower1 = new Tower(1)

    tower1.add(1)

    move([tower1, tower2, tower3])

    expect(tower3.size()).toBe(1)
  }

  {
    const tower1 = new Tower(1)
    const tower2 = new Tower(2)
    const tower3 = new Tower(3)

    tower1.add(2)
    tower1.add(1)

    move([tower1, tower2, tower3])

    expect(tower3.size()).toBe(2)
  }

  {
    const tower1 = new Tower(1)
    const tower2 = new Tower(2)
    const tower3 = new Tower(3)

    tower1.add(3)
    tower1.add(2)
    tower1.add(1)

    move([tower1, tower2, tower3])

    expect(tower3.size()).toBe(3)
    expect(tower3.validate()).toBeTruthy()
  }
})
