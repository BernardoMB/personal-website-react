import styles from './Inactivity.module.css'

export default function Inactivity({isActive, onResetInactivity}) {
    return <>
        <p className={isActive ? styles['active'] : styles['inactive']}>{isActive ? 'User is active' : 'User is inactive'}</p>
        <button onClick={onResetInactivity}>{isActive ? 'Reset inactivity timer' : 'Go to login screen and reset inactivity timer'}</button>
    </>
}