import { useState } from "react";
import "./App.css";
import Inp from "./scenarios";

function App() {
  const [scenario, setScenario] = useState("");

  return (
    <div className="App">
      <select
        className="scenario"
        onChange={(e) => setScenario(e.target.value)}
      >
        <option value="">Select Scenarios</option>
        <option value="create">Create</option>
        <option value="edit">Edit</option>
        <option value="disable">Disable</option>
      </select>
      {scenario && <Inp scenario={scenario} />}
    </div>
  );
}

export default App;
