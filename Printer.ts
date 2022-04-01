import { format } from "date-fns";

export class Printer {
  public static print(value: string | number, txt?: string) {
    let time = format(new Date(), "HH:mm:ss");
    if (txt === undefined) console.log(time + " " + value);
    else console.log(time + " " + txt + ": " + value);
  }
}
