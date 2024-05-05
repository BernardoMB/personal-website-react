// jsx: javascript syntax extension

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Parallax } from './components/Parallax'
import { Header } from './components/Header'
import { Work } from './components/Work'
import { Iam } from './components/Iam/Iam'
import { Tabs } from './components/Tabs/Tabs'
import { TestComponents } from './components/TestComponents/TestComponents'

import arrowDownSvg from './assets/arrow-down.svg' // This cannot be done in regular javascript

const personalInfo = {
  firstName: 'Amanda',
  alias: 'Mandy',
  lastName: 'Picciani'
};

const phrases = [
  {num: 1, phrase: 'Photographer of all love, colors and cultures.' },
  {num: 2, phrase: 'Creating dramatic images of deeply sentimental moments.' },
  {num: 2, phrase: '...All while having the best time!' },
]

export function App() { // <-- App here is a component. A component is a function that must resturn a rederable value.
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Parallax 
        firstName={personalInfo.firstName}
        alias={personalInfo.alias}
        lastName={personalInfo.lastName} 
        arrowDownSvg={arrowDownSvg}
      /> */}
      <Parallax {...{...personalInfo, arrowDownSvg}} />
      <Header {...personalInfo} />
      <Work />
      <Iam {...{phrases, personalInfo}} />
      <Tabs />
      <TestComponents />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
