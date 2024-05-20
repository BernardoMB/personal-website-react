import { useRef, useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
    const fullNameRef = useRef() // Changes in the ref do not update the state
    const emailRef = useRef()
    const messageRef = useRef()
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)
    function handleFullNameChange(event) {
        setSubmitted(false)
        setFullName(event.target.value)
    }
    function handleEmailChange(event) {
        setSubmitted(false)
        setEmail(event.target.value)
    }
    function handleMessageChange(event) {
        setSubmitted(false)
        setMessage(event.target.value)
    }
    function submitContactForm() {
        // TODO: Call contact service and react to message sent result
        setSubmitted(true)
        const payload = {
            fullName, email, message
        }
        console.log({payload})

        const payloadWithRefs = {
            fullNameRef, emailRef, messageRef
        }
        console.log(payloadWithRefs)
    }
    return <section className={styles['contact-section']}>
        <p>Contact</p>
        <input ref={fullNameRef} type="text" placeholder='Full name' value={fullName} onChange={() => handleFullNameChange(event)}></input>
        <input ref={emailRef} type="text" placeholder='Email' value={email} onChange={() => handleEmailChange(event)}></input>
        <textarea ref={messageRef} placeholder='Leave a message' value={message} onChange={() => handleMessageChange(event)}></textarea>
        <button onClick={submitContactForm}>Send</button>
        <p>{submitted ? JSON.stringify({fullName, email, message}) : ''}</p>
        <p>{submitted ? JSON.stringify({
            fullName: fullNameRef.current?.value, // Keep in mind that fullNameRef.current is undefined during the first render cycle because the ref prop has not been set yet
            email: emailRef.current?.value, 
            message: messageRef.current?.value
        }) : ''}</p>
    </section>
}