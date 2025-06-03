import { Figure, FigureNames } from './Figure';
import { Colors } from '../../shared/const/colors';
import { Cell } from '../cell/Cell';
import blackLogo from '../../shared/assets/black-rook.png';
import whiteLogo from '../../shared/assets/white-rook.png';

export class Rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.ROOK;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    if (this.cell.isEmptyVertical(target)) return true;
    if (this.cell.isEmptyHorizontal(target)) return true;
    return false;
  }
}
