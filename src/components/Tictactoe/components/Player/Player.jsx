import { useState } from "react"

export function Player({ initialName, symbol, isActive, onPlayerNameChange }) {
    const [ playerName, setPlayerName ] = useState(initialName)
    const [ isEditing, setIsEditing ] = useState(false)
    function handleEditClick() {
        if (playerName.trim()) {
            if (isEditing) {
                onPlayerNameChange(symbol, playerName.trim())
            }
            setIsEditing((isEditing) => !isEditing)
        } else {
            alert('Player name cannot be empty')
        }
    }
    function handleChange(event) {
        setPlayerName(event.target.value);
    }
    let playerNameTemplate = <span className='player-name'>{playerName}</span>
    if (isEditing) {
        playerNameTemplate = <input type="text" required value={playerName} onChange={handleChange} />
    }
    return (
        <li className={ isActive ? 'active' : undefined }>
            <span className='player'>
                {playerNameTemplate}
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}