import { Book } from './Book'
import { Display } from './Display'
import { Library } from './Library'
import { User } from './User'
import { UserManager } from './UserManager'

export class OnlineReaderSystem {
  private library: Library
  private userManager: UserManager
  private display: Display

  private activeBook: Book | null = null
  private activeUser: User | null = null

  public constructor() {
    this.userManager = new UserManager()
    this.library = new Library()
    this.display = new Display()
  }

  public getLibrary(): Library {
    return this.library
  }

  public getUserManager(): UserManager {
    return this.userManager
  }

  public getDisplay(): Display {
    return this.display
  }

  public getActiveBook(): Book | null {
    return this.activeBook
  }

  public setActiveBook(book: Book): void {
    this.display.displayBook(book)
    this.activeBook = book
  }

  public getActiveUser(): User | null {
    return this.activeUser
  }

  public setActiveUser(user: User): void {
    this.activeUser = user
    this.display.displayUser(user)
  }
}
