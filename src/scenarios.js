import React, { useState } from "react";

function Inp({ scenario }) {
  const [formVal, setFormVal] = useState([
    {
      text: "hello",
      currency: "12345",
      password: "newPass",
      checkbox: "on",
      radio: "on",
    },
  ]);
  const [textVal, setTextVal] = useState("");
  const [checkboxVal, setCheckboxVal] = useState("");
  const [password, setPassword] = useState("");
  const [radioInp, setRadioInp] = useState("");
  const [currencyVal, setCurrencyVal] = useState(0);

  const handleButton = () => {
    if (
      textVal != "" &&
      currencyVal != 0 &&
      password != "" &&
      checkboxVal != "" &&
      radioInp != ""
    ) {
      let val = {
        text: textVal,
        currency: currencyVal,
        password: password,
        checkbox: checkboxVal,
        radio: radioInp,
      };
      setFormVal([...formVal, val]);
    }
  };

  return (
    <div className="inputs">
      {scenario == "create" && (
        <div className="create">
          <label>Text Input</label>
          <input
            type="text"
            placeholder="Enter text"
            onChange={(e) => setTextVal(e.target.value)}
            required
          ></input>
          {!textVal && <span className="err">Please fill this field</span>}
          <br />

          <label>Checkbox Input</label>
          <input
            type="checkbox"
            placeholder="Enter checkbox"
            onChange={(e) => setCheckboxVal(e.target.value)}
          ></input>
          {!checkboxVal && <span className="err">Please fill this field</span>}
          <br />

          <label>Password Input</label>
          <input
            type="password"
            placeholder="Enter password"
            minLength={8}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          {!password && <span className="err">Please fill this field</span>}
          <br />

          <label>Radio Input</label>
          <input
            type="radio"
            placeholder="Enter radio"
            onChange={(e) => setRadioInp(e.target.value)}
          ></input>
          {!radioInp && <span className="err">Please fill this field</span>}
          <br />

          <label>Currency Input</label>
          <input
            type="number"
            placeholder="Enter Currency"
            onChange={(e) => setCurrencyVal(e.target.value)}
          ></input>
          {!currencyVal && <span className="err">Please fill this field</span>}
          <br />

          <label>Button Input</label>
          <input
            type="button"
            placeholder="Enter button"
            onClick={handleButton}
          ></input>
        </div>
      )}

      {scenario == "edit" &&
        formVal.map((val, index) => (
          <div key={index} className="edit">
            <label>Text Input</label>
            <input
              type="text"
              placeholder="Enter text"
              value={val.text}
              onChange={(e) => setTextVal(e.target.value)}
            ></input>
            {!textVal && <span className="err">Please fill this field</span>}
            <br />

            <label>Checkbox Input</label>
            <input
              type="checkbox"
              placeholder="Enter checkbox"
              value={val.checkbox}
              onChange={(e) => setCheckboxVal(e.target.value)}
            ></input>
            {!checkboxVal && (
              <span className="err">Please fill this field</span>
            )}
            <br />

            <label>Password Input</label>
            <input
              type="password"
              placeholder="Enter password"
              value={val.password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            {!password && <span className="err">Please fill this field</span>}
            <br />

            <label>Radio Input</label>
            <input
              type="radio"
              placeholder="Enter radio"
              value={val.radio}
              onChange={(e) => setRadioInp(e.target.value)}
            ></input>
            {!radioInp && <span className="err">Please fill this field</span>}
            <br />

            <label>Currency Input</label>
            <input
              type="number"
              placeholder="Enter Currency"
              value={val.currency}
              onChange={(e) => setCurrencyVal(e.target.value)}
            ></input>
            {!currencyVal && (
              <span className="err">Please fill this field</span>
            )}
            <br />

            <label>Button Input</label>
            <input
              type="button"
              placeholder="Enter button"
              onClick={handleButton}
            ></input>
          </div>
        ))}

      {scenario == "disable" &&
        formVal.map((val, index) => (
          <div key={index} className="disable">
            <label>Text Input</label>
            <input
              type="text"
              placeholder="Enter text"
              value={val.text}
              disabled
            ></input>
            <br />

            <label>Checkbox Input</label>
            <input
              type="checkbox"
              placeholder="Enter checkbox"
              value={val.checkbox}
              disabled
            ></input>
            <br />

            <label>Password Input</label>
            <input
              type="password"
              placeholder="Enter password"
              value={val.password}
              disabled
            ></input>
            <br />

            <label>Radio Input</label>
            <input
              type="radio"
              placeholder="Enter radio"
              value={val.radio}
              disabled
            ></input>
            <br />

            <label>Currency Input</label>
            <input
              type="number"
              placeholder="Enter Currency"
              value={val.currency}
              disabled
            ></input>
            <br />
          </div>
        ))}
    </div>
  );
}

export default Inp;
