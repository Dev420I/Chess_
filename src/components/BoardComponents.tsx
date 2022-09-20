import React, {FC, useState} from 'react';
import {Board} from "../models/Board";
import CellComponents from "./CellComponents";
import {Cell} from "../models/Cell";

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
}

const BoardComponents: FC<BoardProps> = ({board, setBoard }) => {

    const [selectedCell, setSelectedCell] = useState<Cell | null>(null )
    return (
        <div className='board'>
            {board.cells.map((row, index) =>
                <React.Fragment key={index}>
                    {row.map(cell =>
                        <CellComponents
                            cell={cell}
                            key={cell.id}
                        />
                    )}
                </React.Fragment>
            )}
        </div>
    );
};

export default BoardComponents;
