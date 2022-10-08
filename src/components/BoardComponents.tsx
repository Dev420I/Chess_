import React, {FC, useEffect, useState} from 'react';
import {Board} from "../models/Board";
import CellComponents from "./CellComponents";
import {Cell} from "../models/Cell";

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
}

const BoardComponents: FC<BoardProps> = ({board, setBoard }) => {

    const [selectedCell, setSelectedCell] = useState<Cell | null>(null )

    function click(cell: Cell) {
        if (cell.figure){
            setSelectedCell(cell);
        }

    }

    function highlightCells(){
        board.highlightCells(selectedCell)
        updateBoard()
    }

    function updateBoard(){
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }

 useEffect(() => {
     highlightCells()
 },[selectedCell])

    return (
        <div className='board'>
            {board.cells.map((row, index) =>
                <React.Fragment key={index}>
                    {row.map(cell =>
                        <CellComponents
                            click={click}
                            cell={cell}
                            key={cell.id}
                            selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                        />
                    )}
                </React.Fragment>
            )}
        </div>
    );
};

export default BoardComponents;

//ютуб смотреть до 37 минуты проекта 
