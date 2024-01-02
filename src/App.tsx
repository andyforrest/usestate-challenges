import "./App.css";
import Counter from "./components/Counter";
import ControlledInputField from "./components/ControlledInputField";
import ToggleVisibility from "./components/ToggleVisibility";
import CharacterCounter from "./components/CharacterCounter";
import TodoList from "./components/TodoList";
import ColorSwitcher from "./components/ColorSwitcher";
import SearchFilter from "./components/SearchFilter";

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
      <hr />
      <TodoList/>
      <hr />
      <ColorSwitcher />
      <hr />
      <SearchFilter />
    </>
  );
}

export default App;
