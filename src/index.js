import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { CustomText$ } from "./Components/States";
import View1 from "./Components/View1";
import View2 from "./Components/View2";
import View3 from "./Components/View3";

import "./styles.css";

function App() {
  const [Selection, SetSelection] = useState(1);
  const [CustomText, SetCustomText] = useState("Dog");

  useEffect(() => {
    CustomText$.next({ get: CustomText, set: SetCustomText });
  });

  const ChangeCard = evt => SetSelection(parseInt(evt.target.value));

  const View = () => {
    switch (Selection) {
      case 1:
        return <View1 />;
      case 2:
        return <View2 />;
      case 3:
        return <View3 />;
      default:
        return <View1 />;
    }
  };

  return (
    <div className="App">
      <div>
        {[1, 2, 3].map(val => (
          <button onClick={ChangeCard} value={val} key={val}>
            {val}
          </button>
        ))}
      </div>
      {View()}
      <View1 />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
