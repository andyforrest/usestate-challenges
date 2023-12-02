import React, { useState } from 'react';

function InputField() {
    const [text, setText] = useState('')

    function handleInput(e:React.ChangeEvent<HTMLInputElement>){
        setText(e.target.value)
    }
  return (
    <div>
      <input type="text" onInput={handleInput}/>
      <p>Input text: {text}</p>
    </div>
  );
}

export default InputField;