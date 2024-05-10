// jsx: javascript syntax extension

import './App.css'
import { Parallax } from './components/Parallax/Parallax'
import { Header } from './components/Header'
import { Work } from './components/Work'
import { Iam } from './components/Iam/Iam'
import { Tabs } from './components/Tabs/Tabs'
import { TestComponents } from './components/TestComponents/TestComponents'
import { GeneratedCode } from './components/GeneratedCode/GeneratedCode'
import { ConditionalContent } from './components/ConditionalContent'

import arrowDownSvg from './assets/arrow-down.svg' // This cannot be done in regular javascript
import { TicTacToe } from './components/Tictactoe/tictactoe'
import InvestmentCalculator from './components/InvestmentCalculator/InvestmentCalculator'

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
  return (
    <>
      {/* <Parallax 
        firstName={personalInfo.firstName}
        alias={personalInfo.alias}
        lastName={personalInfo.lastName} 
        arrowDownSvg={arrowDownSvg}
      /> */}
      <Parallax {...{...personalInfo, arrowDownSvg}} className='display-block' />
      <Header {...personalInfo} />
      <Work />
      <Iam {...{phrases, personalInfo}} />
      <Tabs />
      <TestComponents />
      <ConditionalContent/>
      <GeneratedCode />
      <TicTacToe></TicTacToe>
      <InvestmentCalculator></InvestmentCalculator>
    </>
  )
}

export default App
