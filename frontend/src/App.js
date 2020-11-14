import "./App.css";
import { ModalOpener } from "./components/modalopener/modalopener";

function App() {
  return (
    <div className="App">
      <div>Initial commit</div>
      <ModalOpener>
        <div>Close me!</div>
      </ModalOpener>
    </div>
  );
}

export default App;
