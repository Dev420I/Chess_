import {Board} from '../models/Board';
import {Colors} from '../models/Colors';
import {Pawn} from '../models/figures/Pawn';
import {Rook} from '../models/figures/Rook';

let board: Board;

beforeEach(() => {
  board = new Board();
  board.initCells();
});

describe('Cell movement helpers', () => {
  test('isEmptyVertical returns true when column is clear', () => {
    const from = board.getCell(0, 0);
    const to = board.getCell(0, 5);
    expect(from.isEmptyVertical(to)).toBe(true);
  });

  test('isEmptyVertical returns false when cells are not in one column', () => {
    const from = board.getCell(0, 0);
    const to = board.getCell(1, 5);
    expect(from.isEmptyVertical(to)).toBe(false);
  });

  test('isEmptyVertical returns false when a piece blocks the way', () => {
    const from = board.getCell(0, 0);
    const to = board.getCell(0, 5);
    new Pawn(Colors.WHITE, board.getCell(0, 3));
    expect(from.isEmptyVertical(to)).toBe(false);
  });

  test('isEmptyHorizontal returns true when row is clear', () => {
    const from = board.getCell(0, 0);
    const to = board.getCell(5, 0);
    expect(from.isEmptyHorizontal(to)).toBe(true);
  });

  test('isEmptyHorizontal returns false when cells are not in one row', () => {
    const from = board.getCell(0, 0);
    const to = board.getCell(5, 1);
    expect(from.isEmptyHorizontal(to)).toBe(false);
  });

  test('isEmptyHorizontal returns false when a piece blocks the way', () => {
    const from = board.getCell(0, 0);
    const to = board.getCell(5, 0);
    new Pawn(Colors.WHITE, board.getCell(3, 0));
    expect(from.isEmptyHorizontal(to)).toBe(false);
  });

  test('isEmptyDiagonal returns true when diagonal is clear', () => {
    const from = board.getCell(2, 2);
    const to = board.getCell(5, 5);
    expect(from.isEmptyDiagonal(to)).toBe(true);
  });

  test('isEmptyDiagonal returns false when cells are not on one diagonal', () => {
    const from = board.getCell(2, 2);
    const to = board.getCell(5, 6);
    expect(from.isEmptyDiagonal(to)).toBe(false);
  });

  test('isEmptyDiagonal returns false when a piece blocks the way', () => {
    const from = board.getCell(2, 2);
    const to = board.getCell(5, 5);
    new Pawn(Colors.WHITE, board.getCell(3, 3));
    expect(from.isEmptyDiagonal(to)).toBe(false);
  });
});

describe('Board highlightCells', () => {
  test('highlightCells marks rook available moves', () => {
    const rookCell = board.getCell(0, 0);
    new Rook(Colors.WHITE, rookCell);
    board.highlightCells(rookCell);
    expect(board.getCell(0, 5).available).toBe(true);
    expect(board.getCell(3, 0).available).toBe(true);
    expect(board.getCell(1, 1).available).toBe(false);
  });

  test('highlightCells clears highlights when no cell is selected', () => {
    new Rook(Colors.WHITE, board.getCell(0, 0));
    board.highlightCells(null);
    const allClear = board.cells.every(row => row.every(cell => !cell.available));
    expect(allClear).toBe(true);
  });
});
