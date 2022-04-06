import { Terning } from "./terning";

export class LudoTerning extends Terning {
  public VærdiSomStreng(): string {
    if (this.Værdi === 3) {
      return "[ * ]";
    } else if (this.Værdi === 5) {
      return "[ @ ]";
    } else {
      return super.VærdiSomStreng();
    }
  }
}
