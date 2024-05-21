// jsx: javascript syntax extension

import './App.css'
import { Parallax } from './components/Parallax/Parallax'
import { Header } from './components/Header/Header'
import { Work } from './components/Work'
import { Iam } from './components/Iam/Iam'
import { Tabs } from './components/Tabs/Tabs'
import { TestComponents } from './components/TestComponents/TestComponents'
import { GeneratedCode } from './components/GeneratedCode/GeneratedCode'
import { ConditionalContent } from './components/ConditionalContent'

import arrowDownSvg from './assets/arrow-down.svg' // This cannot be done in regular javascript
import { TicTacToe } from './components/Tictactoe/tictactoe'
import InvestmentCalculator from './components/InvestmentCalculator/InvestmentCalculator'
import { useRef, useState } from 'react'
import Contact from './components/Contact/Contact'
import Inactivity from './components/Inactivity/Inactivity'

const personalInfo = {
  firstName: 'Amanda',
  alias: 'Mandy',
  lastName: 'Picciani'
};

const THEMES = [
  {
    name: 'Light',
    color: 'black',
    'background-color': 'white'
  },
  {
    name: 'Dark',
    color: 'white',
    'background-color': 'black'
  },
]

const INACTIVITY_TIMEOUT = 1000 *  10 /* 10 seconds */

const SHOW_INACTIVITY_DIALOG = true

const phrases = [
  {num: 1, phrase: 'Photographer of all love, colors and cultures.' },
  {num: 2, phrase: 'Creating dramatic images of deeply sentimental moments.' },
  {num: 2, phrase: '...All while having the best time!' },
]

export function App() { // <-- App here is a component. A component is a function that must resturn a rederable value.
  const [theme, setTheme] = useState(THEMES[0])
  //#region Inactivity timer
  const [userActive, setUserActive] = useState(true)
  let inactivityTimer = useRef()
  let dialogRef = useRef()
  
  function clearTimer() {
    clearTimeout(inactivityTimer)
  }

  function startTimer() {
    inactivityTimer = setTimeout(function() {
      handleInactivityTimerComplete()
    }, INACTIVITY_TIMEOUT)
  }

  function restartTimer() {
    clearTimer()
    startTimer()
  }
  
  function handleInactivityTimerComplete() {
    if (SHOW_INACTIVITY_DIALOG) {
      dialogRef.current.showModal()
    }
    setUserActive(false)
  }

  function resetInactivityTimer() {
    setUserActive(true)
  }

  if (userActive) {
    startTimer()
  }
  //#endregion
  return (
    <>
      {/* <Parallax 
        firstName={personalInfo.firstName}
        alias={personalInfo.alias}
        lastName={personalInfo.lastName} 
        arrowDownSvg={arrowDownSvg}
      /> */}
      <Parallax {...{...personalInfo, arrowDownSvg, theme, appBackgroundColor: theme['background-color']}} className='display-block' />
      <Header {...personalInfo} />
      <Work />
      <Iam {...{phrases, personalInfo}} />
      <Inactivity dialogRef={dialogRef} userIsActive={userActive} resetInactivityHandler={restartTimer} loginHandler={resetInactivityTimer}></Inactivity>
      <Tabs />
      <TestComponents />
      <ConditionalContent/>
      <GeneratedCode />
      <Contact></Contact>
      <TicTacToe></TicTacToe>
      <InvestmentCalculator></InvestmentCalculator>
    </>
  )
}

export default App
