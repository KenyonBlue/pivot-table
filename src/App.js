import Grid from "./components/grid/grid";
import './App.css'

function App() {
  return (
    <div className="w-full test flex flex-col  items-center">
      <h1 className="text-3xl font-bold underline App-link">
        Hello world
      </h1>
      <Grid/>
    </div>
  );
}

export default App;
