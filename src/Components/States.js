import { BehaviorSubject } from "rxjs";
import react, { useState } from "react";

let CustomText$;

export function States() {
  const [CustomText, SetCustomText] = useState("");
  CustomText$ = new BehaviorSubject(CustomText);
  console.log(CustomText$);
  return;
}

export { CustomText$ };
