import React, {useState} from 'react'
import Board from './Board'
import { calculateWinner } from '../helper'

import './Game.css'

const Game = () => {

    const [board, setBoard] = useState (Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(board) 


    const handleClick = (index) => {
        const boardCopy = [...board]

        if (winner || boardCopy[index])
            return

        boardCopy[index] = xIsNext ? 'X' : 'O'

        setBoard(boardCopy)
        setXIsNext(!xIsNext)

    }

    const startNewGame =() => {
        return(
            <button className='start_btn' onClick ={() => setBoard (Array(9).fill(null))}>
                Очистить поле
            </button>
        )
    }
    return (
        <div className='wrapper'>
            { startNewGame()}
            <Board squares = {board} click={handleClick}/>
            <p className='gameInfo'>
                {winner ? "Победитель " + winner : "Сейчас ходит " + (xIsNext ? 'X' : 'O')}
            </p>
        </div>
    )
}

export default Game


