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