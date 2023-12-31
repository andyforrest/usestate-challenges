import { useState } from 'react';

function ColorSwitcher() {

    function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setColor(e.target.value);
    }

    const [color, setColor] = useState("red");

    return (
        <div>
            <select onChange={handleChange}>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
            </select>
            <div style={{ backgroundColor: color }}>
                <p>Hello there</p>
            </div>
        </div>
    );
}

export default ColorSwitcher;
