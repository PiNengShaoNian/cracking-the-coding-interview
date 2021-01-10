import { User } from './User'
import { Book } from './Book'

export class Display {
  private activeBook: Book | null = null
  private activeUser: User | null = null
  private pageNumber: number = 0

  public displayUser(user: User): void {
    this.activeUser = user
    this.refreshUsername()
  }

  public displayBook(book: Book): void {
    this.pageNumber = 0
    this.activeBook = book

    this.refreshTitle()
    this.refreshDetails()
    this.refreshPage()
  }

  public refreshUsername() {
    /* updates username display */
  }

  public refreshTitle() {
    /* updates title display */
  }

  public refreshDetails() {
    /* updates details display */
  }

  public refreshPage() {
    /* updated page display */
  }

  public turnPageForward() {
    this.pageNumber++
    this.refreshPage()
  }

  public turnPageBackward() {
    this.pageNumber--
    this.refreshPage()
  }
}
