import { useRef, useImperativeHandle, forwardRef } from "react"
import { createPortal } from "react-dom"

const SelectOptionDialog = forwardRef(function SelectOptionDialog({
    message, 
    options, 
    children, 
    selectedOptionRef, 
    optionSelectedCallback
}, ref) {
    let dialogRef = useRef()
    function closeDialog() {
        dialogRef.current.close()
        optionSelectedCallback(null)
    }
    function selectOption(selectedOption) {
        console.log(`Selected option: ${selectedOption}`)
        selectedOptionRef.current = selectedOption
        optionSelectedCallback(selectedOption)
    }
    useImperativeHandle(ref, () => {
        return {
            open() {
                console.log('Opening select option dialog')
                dialogRef.current.showModal()
            }
        }
    })
    return createPortal(<>
        <dialog ref={dialogRef}>
            <button onClick={closeDialog}>Close</button>
            {children}
            <form method="dialog">    
                {options.map((option, index) => {
                    return <button key={index} onClick={() => selectOption(option)}>{option}</button>
                })}
            </form>
        </dialog>
    </>, document.getElementById('dialogTarget'))
})

export default SelectOptionDialog