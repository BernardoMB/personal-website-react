import { useState } from "react";

export function ConditionalContent() {
    const defaultState = false
    const [ showContent, setShowContent ] = useState(defaultState)
    function toggleShowContent() {
        setShowContent(!showContent)
    }
    return (
        <>
            <button onClick={toggleShowContent}>{ showContent ? 'Hide Content' : 'Show Content' }</button>
            { showContent ? 
                <div>Some content</div> 
                :
                null
            }
        </>
    )
}