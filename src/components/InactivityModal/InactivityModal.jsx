import styles from './InactivityModal.module.css'

export default function InactivityModal({dialogRef, userIsActive, loginHandler}) {
    function goToLoginScreen() {
        loginHandler()
    }
    return <>
        <dialog ref={dialogRef} className={styles['result-modal']}>
            <h2>Inactivity timeout expired</h2>
            <form method="dialog">
                <button onClick={goToLoginScreen}>Go to login screen</button>
            </form>
        </dialog>
    </>
}