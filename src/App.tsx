import "./App.css";
import Counter from "./components/Counter";
import ControlledInputField from "./components/ControlledInputField";
import ToggleVisibility from "./components/ToggleVisibility";
import CharacterCounter from "./components/CharacterCounter";

function App() {
  return (
    <>
      <Counter />
      <hr />
      <ControlledInputField />
      <hr />
      <ToggleVisibility />
      <hr />
      <CharacterCounter />
    </>
  );
}

export default App;
