import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* no `\` - visible */}
        <button className={"bg-blue-500 material-symbols-outlined before:content-['light']"}>Hello</button>

        {/* Contains a `\` - not visible */}
        <button className={"bg-red-500 material-symbols-outlined before:content-['light\\_mode']"}>World</button>

        {/* Regular button */}
        <button className="bg-green-500">Hello World</button>
      </header>
    </div>
  );
}

export default App;
