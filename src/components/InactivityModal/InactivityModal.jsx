import styles from './InactivityModal.module.css'

export default function InactivityModal({userIsActive, loginHandler}) {
    function goToLoginScreen() {
        loginHandler()
    }
    return <>
        <dialog className={styles['result-modal']} open>
            <h2>Inactivity timeout expired</h2>
            <form method="dialog">
                <button onClick={goToLoginScreen}>Go to login screen</button>
            </form>
        </dialog>
    </>
}