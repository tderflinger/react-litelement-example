import { useRef, useEffect } from 'react';
import './App.css';
import './litelements/my-element';
import './litelements/pushbutton-element';

function App() {
  const redButtonRef = useRef();
  
  const clickHandler = () => {
    console.log('RED BUTTON PRESSED!');
  }

  useEffect(() => {
    let redButton = null;

    if (redButtonRef.current) {
      redButtonRef.current.addEventListener('button-press', clickHandler);
      redButton = redButtonRef.current;
    }

    return () => {
      if (redButton) {
        redButton.removeEventListener('button-press', clickHandler);
      }  
    };
  });

  return (
    <div className="App">
      <header className="App-header">
        <my-element />
        <br />
        <wokwi-pushbutton color="red" ref={redButtonRef}/>
        <br />
        <wokwi-pushbutton color="green"/>
        <br />
        <wokwi-pushbutton color="yellow"/>
      </header>
    </div>
  );
}

export default App;
