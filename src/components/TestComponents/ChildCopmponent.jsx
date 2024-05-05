export function ChildCopmponent(props) {
    return (
        <div>
            <p>Child component 1</p>
            <ul>
                <li>{props.prop1}</li>
                <li>{props.prop2}</li>
                <li>{props.prop3}</li>
            </ul>
        </div>
    )
}

export function ChildCopmponent2({ prop1, prop2, prop3 }) {
    return (
        <div>
            <p>Child component 2</p>
            <ul>
                <li>{prop1}</li>
                <li>{prop2}</li>
                <li>{prop3}</li>
            </ul>
        </div>
    )
}

export function ChildCopmponent3({ obj }) {
    return (
        <div>
            <p>Child component 3</p>
            <ul>
                <li>{obj.prop1}</li>
                <li>{obj.prop2}</li>
                <li>{obj.prop3}</li>
            </ul>
        </div>
    )
}

export function ChildCopmponent4({ ...obj }) {
    return (
        <div>
            <p>Child component 4</p>
            <ul>
                <li>{obj.prop1}</li>
                <li>{obj.prop2}</li>
                <li>{obj.prop3}</li>
            </ul>
        </div>
    )
}