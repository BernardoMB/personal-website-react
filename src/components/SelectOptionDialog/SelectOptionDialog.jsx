import { useRef, useImperativeHandle, forwardRef } from "react"

const SelectOptionDialog = forwardRef(function SelectOptionDialog({message, options, children, selectedOptionRef}, ref) {
    let dialogRef = useRef()
    function closeDialog() {
    }
    function selectOption(selectedOption) {
        console.log(`Selected option: ${selectedOption}`)
        selectedOptionRef.current = selectedOption
    }
    useImperativeHandle(ref, () => {
        return {
            open() {
                console.log('Opening select option dialog')
                dialogRef.current.showModal()
            }
        }
    })
    return <>
        <dialog ref={dialogRef}>
            <button onClick={closeDialog}>Close</button>
            {children}
            <form method="dialog">    
                {options.map((option, index) => {
                    return <button key={index} onClick={() => selectOption(option)}>{option}</button>
                })}
            </form>
        </dialog>
    </>
})

export default SelectOptionDialog