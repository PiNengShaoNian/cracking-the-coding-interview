import { Encode } from '../16-12.xml-encoding'

test('能正确地编码xml', () => {
  const xml = `
<family lastName="gebi" state="CA">
  <person firstName="wang">Some Message</person>
</family>
`

  expect(
    Encode.encode(
      xml,
      new Map([
        ['family', 1],
        ['person', 2],
        ['firstName', 3],
        ['lastName', 4],
        ['state', 5],
      ])
    )
  ).toBe('1 4 gebi 5 CA 0 2 3 wang 0 Some Message 0 0')
})
