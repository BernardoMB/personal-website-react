export function Phrase(props) {
    return (
        <div>{props.num} {props.phrase}</div>
    )
}

export function Phrase2({num = 1, phrase = ''}) {
    return (
        <div>{num} {phrase}</div>
    )
}