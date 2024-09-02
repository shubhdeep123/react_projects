import { useState } from "react";
import "./App.css";
import Card from "./components/Card"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-300 mb-4 rounded-lg text-black">Tailwind</h1>
      <Card username="Alba" btnText="Visit me"/>
      <Card username="Linda"/>
    </>
  );
}

export default App;
