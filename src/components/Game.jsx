import React, { useState } from 'react'
import Board from './Board'
import {calculateWinner} from '../helper'

import './Game.css'

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(board)

    const handleClick = (index) => {
        const boardCopy = [...board]
        if (winner || boardCopy[index]) return
        boardCopy[index] = xIsNext ? '人' : 'の'
        setBoard(boardCopy)
        setXIsNext(!xIsNext)
    }

    const startNewGame = () => {
        return (
            <button className='start__btn' onClick={() => setBoard(Array(9).fill(null))}> Очистить поле</button>
        )
    }

    return (
        <div className='wrapper'>
            { startNewGame()}
            <Board squares={board} click={handleClick} />
            <p className='game_info'> 
                {winner ? 'Winner: ' + winner : 'walking now: ' + ( xIsNext ? '人' : 'の')}
            </p>
        </div>
    );
}

export default Game
