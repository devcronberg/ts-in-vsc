// Se .eslintrc.json for at slå eslint regler til
import { LudoTerning } from "./Terning/ludoterning";
import { Printer } from "./Printer";

Printer.print("TS Test");
let a: number = 2;
a++;
Printer.print(a, "TS Test");

let terning = new LudoTerning();
let txt = "";
for (let i = 0; i < 10; i++) {
  txt += terning.VærdiSomStreng();
  terning.Ryst();
}
console.log(txt);
