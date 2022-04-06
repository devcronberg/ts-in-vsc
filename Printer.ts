import { format } from "date-fns";

export class Printer {
  public static print(value: string | number, txt?: string) {
    const time = format(new Date(), "HH:mm:ss");
    if (txt === undefined) console.log(time + " " + value);
    else console.log(time + " " + txt + ": " + value);
  }
}

// console.log skulle gerne give en warning - se .eslintrc.json
