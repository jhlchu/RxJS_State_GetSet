import React, { useState, useEffect } from "react";
import { textfield_pair, textfield$ } from "./States";
import { of, asObservable } from "rxjs";
import { map } from "rxjs/operators";
import { CustomText$ } from "./States";

export default function View1() {
  const [TextField, SetTextField] = useState(false);
  useEffect(() => {
    CustomText$.subscribe(res => {
      console.log(1, res);
      // SetTextField(res);
    });
  });

  return (
    <div>
      <h1>1</h1>
    </div>
  );
}
