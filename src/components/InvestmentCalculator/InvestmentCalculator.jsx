import './InvestmentCalculator.css'
import Header from './components/Header/Header'
import Results from './components/Results.jsx/Results'
import UserInput from './components/UserInput/UserInput'
import { useState } from 'react'

export default function InvestmentCalculator() {
    const [ userInput, setUserInput ] = useState({
        initialInvestment: 1000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    })
    const inputIsValid = userInput.duration >= 1;
    function handleInputChange(inputIdentifier, newValue) {
        setUserInput(prevUserInput => ({
            ...prevUserInput,
            [inputIdentifier]: +newValue
        }))
    }
    return <div className='investment-calculator'>
        <Header></Header>
        <UserInput userInput={userInput} handleChange={handleInputChange}></UserInput>
        { !inputIsValid && <p className='center'>Please enter valid input data</p> }
        { inputIsValid && <Results input={userInput}></Results>}
    </div>
}