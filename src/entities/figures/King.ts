import { Figure, FigureNames } from './Figure';
import { Colors } from '../../shared/const/colors';
import { Cell } from '../cell/Cell';
import blackLogo from '../../shared/assets/black-king.png';
import whiteLogo from '../../shared/assets/white-king.png';

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KING;
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    return true;
  }
}
