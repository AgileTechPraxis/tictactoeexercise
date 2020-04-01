import { TicTacToe } from "./TicTacToe";

export const win = (board: string[]) => {
  if (
    board[0] !== "" &&
    board[0] === board[1] &&
    board[1] === board[2]
  ) {
    return board[0];
  }

  if (
    board[3] !== "" &&
    board[3] === board[4] &&
    board[4] === board[5]
  ) {
    return board[3];
  }

  if (
    board[6] !== "" &&
    board[6] === board[7] &&
    board[7] === board[8]
  ) {
    return board[6];
  }

  if (
    board[0] !== "" &&
    board[0] === board[3] &&
    board[3] === board[6]
  ) {
    return board[0];
  }

  if (
    board[1] !== "" &&
    board[1] === board[4] &&
    board[4] === board[7]
  ) {
    return board[1];
  }

  if (
    board[2] !== "" &&
    board[2] === board[5] &&
    board[5] === board[8]
  ) {
    return board[2];
  }

  if (
    board[2] !== "" &&
    board[2] === board[4] &&
    board[4] === board[6]
  ) {
    return board[2];
  }

  if (
    board[0] !== "" &&
    board[0] === board[4] &&
    board[4] === board[8]
  ) {
    return board[0];
  }

  if (board.filter(x => x === "").length === 0) {
    return "TIE";
  }

  return undefined;
};
