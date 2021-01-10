import { Book } from './Book'

export class Library {
  private books: Map<number, Book> = new Map()

  public addBook(id: number, details: string): Book | null {
    if (this.books.has(id)) {
      return null
    }
    const book = new Book(id, details)
    this.books.set(id, book)
    return book
  }

  public remove(b: Book): boolean {
    return this.remove1(b.getID())
  }

  public remove1(id: number): boolean {
    if (!this.books.has(id)) {
      return false
    }
    this.books.delete(id)
    return true
  }

  public find(id: number): Book | null {
    return this.books.get(id) ?? null
  }
}
