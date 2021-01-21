export class Encode {
  private static index = 0
  private static xml: string
  private static blankRE = /\s/
  private static letterRE = /[-a-zA-Z0-9]/
  private static map: Map<string, number>
  private static result: string[]

  static encode(xml: string, map: Map<string, number>): string {
    this.xml = xml
    this.index = 0
    this.map = map
    this.result = []

    this.skipBlank()
    while (true) {
      this.skipBlank()
      if (this.index >= this.xml.length) break
      const cur = this.xml[this.index]
      const lookahead = this.xml[this.index + 1]
      if (cur === '<' && lookahead !== '/') {
        this.readStartTag()
        continue
      }

      if (cur === '<' && lookahead === '/') {
        this.readEndTag()
        continue
      }

      this.readValue()
    }

    return this.result.join(' ')
  }

  private static skipBlank(): void {
    while (
      this.index < this.xml.length &&
      this.blankRE.test(this.xml[this.index])
    )
      ++this.index
  }

  private static readValue(): void {
    this.skipBlank()
    let startIndex = this.index

    while (this.index < this.xml.length && this.xml[this.index] !== '<')
      ++this.index

    if (this.xml[this.index] !== '<') throw this.error()

    this.result.push(this.xml.slice(startIndex, this.index).trimEnd())
  }

  private static putToken(token: string): void {
    const n = this.map.get(token)

    if (n === undefined) throw new Error(`Unexpected token ${token}`)

    this.result.push(n + '')
  }

  private static readStartTag(): void {
    ++this.index
    this.skipBlank()
    let startIndex = this.index

    while (
      this.index < this.xml.length &&
      this.letterRE.test(this.xml[this.index])
    )
      ++this.index

    this.putToken(this.xml.slice(startIndex, this.index))
    this.skipBlank()

    if (this.xml[this.index] === '>') {
      ++this.index
      return
    }

    while (this.index < this.xml.length && this.xml[this.index] !== '>') {
      this.skipBlank()
      this.readAttribute()
    }
    this.skipBlank()

    if (this.xml[this.index] !== '>') throw this.error()
    ++this.index
    this.result.push('0')
  }

  private static readAttribute(): void {
    let startIndex = this.index

    while (this.letterRE.test(this.xml[this.index])) ++this.index

    this.result.push(this.map.get(this.xml.slice(startIndex, this.index))! + '')
    this.skipBlank()
    if (this.xml[this.index] !== '=') throw this.error()
    ++this.index
    this.skipBlank()
    if (this.xml[this.index] !== '"') throw this.error()
    ++this.index

    startIndex = this.index

    while (this.index < this.xml.length && this.xml[this.index] !== '"')
      ++this.index

    if (this.xml[this.index] !== '"') throw this.error()

    this.result.push(this.xml.slice(startIndex, this.index))
    ++this.index
  }

  private static readEndTag(): void {
    ++this.index
    ++this.index
    this.skipBlank()
    while (this.letterRE.test(this.xml[this.index])) ++this.index

    this.skipBlank()
    this.result.push('0')

    if (this.xml[this.index] !== '>') throw this.error()
    ++this.index
  }

  static error(): Error {
    throw new Error(`Unexpected token at index ${this.index}`)
  }
}
