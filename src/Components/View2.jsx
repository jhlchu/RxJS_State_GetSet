import React, { useState, useEffect } from "react";
import { textfield_pair, textfield$ } from "./States";
import { of, asObservable } from "rxjs";
import { map } from "rxjs/operators";
import { CustomText$ } from "./States";

export default function View2() {
  const [CustomText, SetCustomerText] = useState(false);
  useEffect(() => {
    CustomText$.subscribe(res => {
      SetCustomerText(res);
    });
  });

  const HandleChange = evt => CustomText.set(evt.target.value);

  return (
    <div>
      <h1>2</h1>
      <input
        type="text"
        name="set"
        id="set"
        value={CustomText.get}
        onChange={HandleChange}
      />
    </div>
  );
}
