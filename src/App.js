import Grid from "./components/grid/grid";
import './App.css'
import { useState } from "react";

function App() {
  const [ action, setAction ] = useState('current action')
  return (
    <div className="w-screen flex flex-col  items-center min-h-screen">
      <Grid action={action} setAction={setAction}>
      <h1 className="text-3xl  underline capitalize">
        { action }
      </h1>
      </Grid>
    </div>
  );
}

export default App;
