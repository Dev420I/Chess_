import { Figure, FigureNames } from './Figure';
import { Colors } from '../../shared/const/colors';
import { Cell } from '../cell/Cell';
import blackLogo from '../../shared/assets/black-bishop.png';
import whiteLogo from '../../shared/assets/white-bishop.png';

export class Bishop extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.BISHOP;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    if (this.cell.isEmptyDiagonal(target)) return true;
    return false;
  }
}
