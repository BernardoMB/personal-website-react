import './tictactoe.css'
import gameLogo from '../../assets/tictactoe/game-logo.png'
import { Player } from './components/Player/Player'
import GameBoard from './components/GameBoard/GamrBoard'
import { useState } from 'react'
import Log from './components/Log/Log'

export function TicTacToe() {
    const [ activePlayer, setActivePlayer ] = useState('X')
    function handleSelectSquare() {
        setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X')
    }
    return (
        <>
            <div className="tictactoe">
                <div className="tictactoe-container">
                    <header>
                        <img src={gameLogo} alt="Hand-drwan tic tac toe game board"/>
                        <h1>Tic-Tac-Toe</h1>
                    </header>
                    <main>
                        <div id="game-container">
                            <ol id="players" className='highlight-player'>
                                <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}></Player>
                                <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}></Player>
                            </ol>
                            <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}></GameBoard>
                        </div>
                        <Log></Log>
                    </main>
                </div>
            </div>
        </>
    )
}