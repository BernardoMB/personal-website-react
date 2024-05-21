import InactivityModal from '../InactivityModal/InactivityModal'
import styles from './Inactivity.module.css'

export default function Inactivity({userIsActive, resetInactivityHandler, loginHandler}) {
    function handleClick() {
        resetInactivityHandler()
    }
    return <>
        {userIsActive === false ? <InactivityModal userIsActive={userIsActive} loginHandler={loginHandler}></InactivityModal> : undefined}
        <p className={userIsActive? styles['active'] : styles['inactive']}>{userIsActive ? 'User is active' : 'User is inactive'}</p>
        <button style={{height: '50px'}} onClick={handleClick}>{userIsActive ? 'Reset inactivity timer' : 'Go to login screen and reset inactivity timer'}</button>
    </>
}