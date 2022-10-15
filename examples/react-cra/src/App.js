import React from 'react';
import logo from './logo.svg';
import './App.css';
import { sayHelloTo } from '@test-workspaces/utils-one';
import { uppercaseText } from '@test-workspaces/utils-two';

function App() {
  const [text, setText] = React.useState('');
  const handleTextButtonClick = () => {
    if (text !== '') {
      setText('');
      return;
    }
    setText(uppercaseText('Hello Luke'));
  }
  const handleButtonLoggerClick = () => {
    sayHelloTo('Luke');
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* MAIN CONTNET */}
        <div>
          <button onClick={handleTextButtonClick}>Toggle Text</button>
          <p>{text || <>&nbsp;</>}</p>
        </div>
        <div>
          <p>Open you console and click the button</p>
          <button onClick={handleButtonLoggerClick}>Log text</button>
        </div>
        <br />
        <br />
        {/* LOGO */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
