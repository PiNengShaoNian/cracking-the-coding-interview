import { Executor } from './Executor'

export class TaskManager<T> {
  private executors: Executor<T>[]
  private tasks: T[] = []

  constructor(
    private parallelNumber: number = 4,
    private handle: (arg: T) => void
  ) {
    this.executors = Array.from(
      { length: this.parallelNumber },
      () => new Executor<T>()
    )
  }

  private perform() {
    for (let i = 0; i < this.executors.length; ++i) {
      if (this.executors[i].getStatus() === 'IDLE') {
        this.performOnExecutor(i)
      }
    }
  }

  private async performOnExecutor(i: number): Promise<void> {
    if (this.tasks.length) {
      const task = this.tasks.pop()!
      try {
        await this.executors[i].run(task, this.handle)
      } catch {
        this.tasks.push(task)
      }
      this.performOnExecutor(i)
    }
  }

  addTasks(tasks: T[]): void {
    this.tasks.push(...tasks)
    this.perform()
  }

  addTask(task: T): void {
    this.tasks.push(task)
    this.perform()
  }
}
