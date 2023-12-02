import "./App.css";
import Counter from "./components/Counter";
import ControlledInputField from "./components/ControlledInputField";
import ToggleVisibility from "./components/ToggleVisibility";

function App() {
  return (
    <>
      <Counter />
      <hr />
      <ControlledInputField />
      <hr />
      <ToggleVisibility />
    </>
  );
}

export default App;
