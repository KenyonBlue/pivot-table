import Grid from "./components/grid/grid";
import './App.css'
import { useState } from "react";

function App() {
  const [ action, setAction ] = useState('current action')
  return (
    <div className="w-full test flex flex-col  items-center">
      <h1 className="text-3xl  underline capitalize">
        { action }
      </h1>
      <Grid action={action} setAction={setAction} />
    </div>
  );
}

export default App;
