class Test {
  private name: string
  private age: number
  private tel: string

  constructor(name: string, age: number, tel: string) {
    this.name = name
    this.age = age
    this.tel = tel
  }

  tellMyName(): void {
    console.log(this.name)
    console.log("HELLO")

  }
}