import { useState } from "react";

function ToggleVisibility() {
  const [visibility, setVisibility] = useState("Toggle me!");

  function handleClick() {
    console.log("click")
    visibility === "" ? setVisibility("Toggle me!") : setVisibility("");
  }

  return (
    <div>
      <button onClick={handleClick}>Show/Hide Text</button>
      <p>{visibility}</p>
    </div>
  );
}

export default ToggleVisibility;
