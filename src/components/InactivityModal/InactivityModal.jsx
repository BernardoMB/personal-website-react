import styles from './InactivityModal.module.css'
import { forwardRef, useImperativeHandle, useRef } from 'react'

const InactivityModal = forwardRef(function InactivityModal({ userIsActive, loginHandler }, ref) {
    const dialog = useRef()
    function goToLoginScreen() {
        loginHandler()
    }
    useImperativeHandle(ref, () => {
        return {
            open() {
                console.log('Opening dialog')
                dialog.current.showModal()
            }
        }
    })
    function handleClose() {
        console.log('Closing dialog');
    }
    return <>
        <dialog ref={dialog} className={styles['result-modal']} onClose={handleClose}>
            <h2>Inactivity timeout expired</h2>
            <form method="dialog">
                <button onClick={goToLoginScreen}>Go to login screen</button>
            </form>
        </dialog>
    </>
})

export default InactivityModal