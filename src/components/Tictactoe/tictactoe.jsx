import './tictactoe.css'
import gameLogo from '../../assets/tictactoe/game-logo.png'
import { Player } from './components/Player/Player'
import GameBoard from './components/GameBoard/GameBoard.jsx'
import { useState } from 'react'
import Log from './components/Log/Log'
import { WINNING_COMBINATIONS } from './winning-combinations.js'
import GameOver from './components/GameOver/GameOver'

const PLAYERS = {
    'X': 'Player 1',
    'O': 'Player 2'
}

const INITIAL_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

function deriveActivePlayer(gameTurns) {
    let currentPlayer = 'X'
    const lastTurn = gameTurns[0];
    if (gameTurns.length > 0 && lastTurn.player === 'X') {
        currentPlayer = 'O'
    }
    return currentPlayer
}

function deriveGameBoard(gameTurns) {
    let gameBoard = [...INITIAL_GAME_BOARD.map(innerArray => [...innerArray])]
    for (const turn of gameTurns) {
        const { square, player } = turn
        const { row, col }  = square
        gameBoard[row][col] = player
    }
    return gameBoard
}

function deriveWinner(gameBoard, players) {
    let winner
    for (const combination of WINNING_COMBINATIONS) {
        const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
        const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
        const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]
        if (
            !!firstSquareSymbol 
            && firstSquareSymbol === secondSquareSymbol 
            && secondSquareSymbol === thirdSquareSymbol
        ) {
            winner = players[firstSquareSymbol]
        }
    }
    return winner
}

export function TicTacToe() {
    const [ players, setPlayers ] = useState(PLAYERS)
    const [ gameTurns, setGameTurns ] = useState([])
    const activePlayer = deriveActivePlayer(gameTurns)
    const gameBoard = deriveGameBoard(gameTurns);
    const winner = deriveWinner(gameBoard, players);
    const hasDraw = gameTurns.length === 9 && !winner
    function handleSelectSquare(rowIndex, colIndex) {
        setGameTurns(prevTurns => {
            const currentPlayer = deriveActivePlayer(prevTurns)
            const updatedTurns = [{
                square: { row: rowIndex, col: colIndex },
                player: currentPlayer
            }, ...prevTurns]
            return updatedTurns
        })
    }
    function handleRematch() {
        setGameTurns([])
    }
    function handlePlayerNameChange(player, name) {
        setPlayers(prevPlayers => ({
            ...prevPlayers,
            [player]: name
        }))
    }
    return (
        <div className="tictactoe">
            <div className="tictactoe-container">
                <header>
                    <img src={gameLogo} alt="Hand-drwan tic tac toe game board"/>
                    <h1>Tic-Tac-Toe</h1>
                </header>
                <main>
                    <div id="game-container">
                        <ol id="players" className='highlight-player'>
                            <Player initialName={PLAYERS.X}
                                symbol="X" 
                                isActive={activePlayer === 'X'} 
                                onPlayerNameChange={handlePlayerNameChange}>
                            </Player>
                            <Player initialName={PLAYERS.O}
                                symbol="O" 
                                isActive={activePlayer === 'O'} 
                                onPlayerNameChange={handlePlayerNameChange}>
                            </Player>
                        </ol>
                        {(winner || hasDraw) && <GameOver winner={winner} onRematch={handleRematch}></GameOver>}
                        <GameBoard board={gameBoard} onSelectSquare={handleSelectSquare}></GameBoard>
                    </div>
                    <Log turns={gameTurns}></Log>
                </main>
            </div>
        </div>
    )
}