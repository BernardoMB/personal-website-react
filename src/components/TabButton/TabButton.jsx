import './TabButton.css'

export function TabButton(props) {
    return (
        <li>
            <button>{props.children}</button>
        </li>
    )
}

/**
 * Children is being pulled out with object destructuring.
 * Children are the elements that are inside the component html tags
 * @param {*} param0 
 * @returns 
 */
export function TabButton2({children}) {
    return (
        <li>
            <button>{children}</button>
        </li>
    )
}

export function TabButton3({children}) {
    function handleClick(event) {
        console.log('Button clicked', event);
    }

    return (
        <li>
            <button onClick={handleClick}>{children}</button>
        </li>
    )
}

export function TabButton4({children, onClick}) {
    return (
        <li>
            <button onClick={onClick}>{children}</button>
        </li>
    )
}

export function TabButton5({children, onSelect, isSelected}) {
    return (
        <li>
            <button className={ isSelected ? 'active' : undefined } onClick={onSelect}>{children}</button>
        </li>
    )
}