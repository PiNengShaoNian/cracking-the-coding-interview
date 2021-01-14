type ExecutorStatus = 'IDLE' | 'PENDING'

export class Executor<TArg> {
  private status: ExecutorStatus = 'IDLE'
  async run(arg: TArg, fn: (arg: TArg) => any): Promise<void> {
    this.status = 'PENDING'
    await fn(arg)
    this.status = 'IDLE'
  }

  getStatus() {
    return this.status
  }
}
