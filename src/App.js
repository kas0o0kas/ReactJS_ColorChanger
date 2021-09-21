import Input from "./Input";
import Square from "./Square";
import { useState } from 'react';

function App() {
  const [colorValue, setColorValue] = useState('');
  const [hexValue, setHexValue] = useState('');


  return (
    <div className="App">
      <Square 
        colorValue = {colorValue}
        hexValue = {hexValue}
      ></Square>
      <Input 
        colorValue = {colorValue} 
        setColorValue = {setColorValue}
        hexValue = {hexValue}
        setHexValue = {setHexValue}
      ></Input>
    </div>
  );
}

export default App;
