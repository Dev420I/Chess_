import {Cell} from './Cell'
import {Colors} from "./Colors";
import {Pawn} from "./figures/Pawn";

export class Board {
    cells: Cell[][] = []


    public initCell(){
        for (let i = 0; i < 8; i++) {
            const row: Cell[] = []
            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2 !== 0) {
                    row.push(new Cell(this, j, i, Colors.BLACK, null)) //черные ячеики
                } else {
                    row.push(new Cell(this, j, i, Colors.WHITE, null)) // белые ячейки
                }
            }
            this.cells.push(row)
        }
    }
    public getCell(x: number, y: number){
        return this.cells[y][x]
    }

    private addPawns(){
        for (let i = 0; i < 8; i++) {
            new Pawn(Colors.BLACK, this.getCell(i,1))
            new Pawn(Colors.WHITE, this.getCell(i,7))
        }
    }

    private addKing(){

    }

    private addQueen(){

    }

    private addKnights(){

    }

    private addRook(){

    }

    private addBishop(){

    }

    public addFigure(){
        this.addBishop()
        this.addRook()
        this.addKnights()
        this.addQueen()
        this.addKing()
        this.addPawns()
    }
}
