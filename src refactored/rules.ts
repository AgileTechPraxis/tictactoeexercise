import { Player } from "./Player";

export class GameWinConditions {
  private static topRow = (board: Player[]) => evaluateRow(board, 0);
  private static middleRow = (board: Player[]) => evaluateRow(board, 1);
  private static bottomRow = (board: Player[]) => evaluateRow(board, 2);
  private static leftColumn = (board: Player[]) => evaluateColumn(board, 0);
  private static middleColumn = (board: Player[]) => evaluateColumn(board, 1);
  private static rightColumn = (board: Player[]) => evaluateColumn(board, 2);
  private static upDiagonal = (board: Player[]) => evaluateUpDiagonal(board);
  private static downDiagonal = (board: Player[]) =>
    evaluateDownDiagonal(board);

  public static rules = [
    GameWinConditions.topRow,
    GameWinConditions.middleRow,
    GameWinConditions.bottomRow,
    GameWinConditions.leftColumn,
    GameWinConditions.middleColumn,
    GameWinConditions.rightColumn,
    GameWinConditions.upDiagonal,
    GameWinConditions.downDiagonal
  ];
}

function evaluateDownDiagonal(board: Player[]) {
  return allEqualAndNotEmpty(0, 4, 8, board);
}

function evaluateUpDiagonal(board: Player[]) {
  return allEqualAndNotEmpty(2, 4, 6, board);
}

function evaluateColumn(board: Player[], column: number) {
  return allEqualAndNotEmpty(column + 0, column + 3, column + 6, board);
}

function evaluateRow(board: Player[], row: number) {
  return allEqualAndNotEmpty(3 * row + 0, 3 * row + 1, 3 * row + 2, board);
}

function allEqualAndNotEmpty(
  firstIndex: number,
  secondIndex: number,
  thirdIndex: number,
  board: Player[]
) {
  return (
    board[firstIndex] !== Player.None &&
    board[firstIndex] === board[secondIndex] &&
    board[secondIndex] === board[thirdIndex]
  );
}
