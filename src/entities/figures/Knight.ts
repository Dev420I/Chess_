import { Figure, FigureNames } from './Figure';
import { Colors } from '../../shared/const/colors';
import { Cell } from '../cell/Cell';
import blackLogo from '../../shared/assets/black-knight.png';
import whiteLogo from '../../shared/assets/white-knight.png';

export class Knight extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KNIGHT;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    const dx = Math.abs(this.cell.x - target.x);
    const dy = Math.abs(this.cell.y - target.y);

    return (dx === 1 && dy === 2) || (dx === 2 && dy === 1);
  }
}
