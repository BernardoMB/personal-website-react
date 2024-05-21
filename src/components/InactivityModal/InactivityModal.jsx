import styles from './InactivityModal.module.css'
import { forwardRef } from 'react'

const InactivityModal = forwardRef(function InactivityModal({ userIsActive, loginHandler }, ref) {
    function goToLoginScreen() {
        loginHandler()
    }
    return <>
        <dialog ref={ref} className={styles['result-modal']}>
            <h2>Inactivity timeout expired</h2>
            <form method="dialog">
                <button onClick={goToLoginScreen}>Go to login screen</button>
            </form>
        </dialog>
    </>
})

export default InactivityModal