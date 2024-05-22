import { useRef, useState } from 'react'
import InactivityModal from '../InactivityModal/InactivityModal'
import styles from './Inactivity.module.css'

export default function Inactivity({dialogRef, userIsActive, resetInactivityHandler, loginHandler, inactivityTime}) {
    let timeRemainingTimer = useRef()
    const [timeRemaining, setTimeRemaining] = useState((+inactivityTime)/1000)
    function startInterval() {
        console.log('Starting interval')
        timeRemainingTimer.current = setInterval(() => {
            setTimeRemaining((prevTimeRemaining) => {
                return prevTimeRemaining - 1
            })
        }, 1000)
    }
    function stopInterval() {
        console.log('Stopping interval')
        clearInterval(timeRemainingTimer.current)
    }
    function restartInterval() {
        console.log('Restarting interval')
        stopInterval()
        startInterval()
        setTimeRemaining((+inactivityTime)/1000)
    }
    if (userIsActive && timeRemainingTimer.current === undefined) {
        startInterval()
    }
    if (timeRemaining <= 0) {
        clearInterval(timeRemainingTimer.current)
    }
    function resetInactivity() {
        restartInterval()
        loginHandler()
    }
    function refreshInactivity() {
        restartInterval()
        resetInactivityHandler()
    }
    return <>
        <InactivityModal ref={dialogRef} userIsActive={userIsActive} loginHandler={resetInactivity}></InactivityModal>
        <p className={userIsActive? styles['active'] : styles['inactive']}>{userIsActive ? 'User is active' : 'User is inactive'}</p>
        <div><p><label>Time remaining: </label>{timeRemaining} seconds</p></div>
        {userIsActive ? (
            <button style={{height: '50px'}} onClick={refreshInactivity}>Reset inactivity timer</button>
        ) : (
            <button style={{height: '50px'}} onClick={resetInactivity}>Go to login screen and reset inactivity timer</button>
        )}
    </>
}