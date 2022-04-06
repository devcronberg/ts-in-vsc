// Ikke eksporteret
class Test {}

export class Terning {
  private værdi: number = 0;

  public get Værdi() {
    return this.værdi;
  }

  constructor() {
    this.Ryst();
  }

  public VærdiSomStreng(): string {
    return "[ " + this.værdi + " ]";
  }

  public Ryst() {
    this.værdi = Math.floor(Math.random() * 6) + 1;
  }
}
