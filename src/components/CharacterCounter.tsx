import {useState} from 'react';

function CharacterCounter() {
    const [count, setCount] = useState(0)

    function handleInput(e:React.ChangeEvent<HTMLTextAreaElement>){
        setCount(e.target.value.length)
    }
  return (
    <div>
      <textarea onInput={handleInput}/>
      <p>Character count: {count}</p>
    </div>
  );
}

export default CharacterCounter;