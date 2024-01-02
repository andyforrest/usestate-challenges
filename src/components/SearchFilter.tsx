import React, { useState } from "react";

const items = ["Apple", "Banana", "Carrot", "Date", "Eggplant", "Fig", "Grape"];

function ResultFilter() {
  const [result, setResult] = useState<string[]>([]);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const filterItems = items.filter((i) =>
      i.toLowerCase().includes(e.target.value.toLowerCase())
    );
    
    // setResult with filterItems only if there is user input to prevent empty input
    // displaying all items
    {
      e.target.value !== "" ? setResult(filterItems) : setResult([]);
    }
  }

  return (
    <div>
      <input type="text" onInput={handleInput} />
      {result.length > 0 && (
        <ul>
          {result.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ResultFilter;
