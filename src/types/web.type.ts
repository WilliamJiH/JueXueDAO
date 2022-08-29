export class WebResponse {
  public msg: string
  public data: any
  public timestamp: Date

  constructor(data: any, msg = 'OK') {
    this.msg = msg
    this.data = data
    this.timestamp = new Date()
  }
}
