import React from 'react'
import logo from './logo.svg'
import './styles/App.css'
import { ReactComponent as LogoApp } from './logo.svg'

function App() {
  let a = 100
  console.log('a fsffs: ', a)
  return (
    <div className="App w-[200px]">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LogoApp />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.sd
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
