import "./App.css";
import { calculate } from "./Hello";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => calculate({ name: "Ali" })}>
          Take the Shot!
        </button>
      </header>
    </div>
  );
}

export default App;
