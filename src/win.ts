import { TicTacToe } from "./TicTacToe";

export const win = (game: TicTacToe) => {
  if (
    game.board[0] !== "" &&
    game.board[0] === game.board[1] &&
    game.board[1] === game.board[2]
  ) {
    return game.board[0];
  }

  if (
    game.board[3] !== "" &&
    game.board[3] === game.board[4] &&
    game.board[4] === game.board[5]
  ) {
    return game.board[3];
  }

  if (
    game.board[6] !== "" &&
    game.board[6] === game.board[7] &&
    game.board[7] === game.board[8]
  ) {
    return game.board[6];
  }

  if (
    game.board[0] !== "" &&
    game.board[0] === game.board[3] &&
    game.board[3] === game.board[6]
  ) {
    return game.board[0];
  }

  if (
    game.board[1] !== "" &&
    game.board[1] === game.board[4] &&
    game.board[4] === game.board[7]
  ) {
    return game.board[1];
  }

  if (
    game.board[2] !== "" &&
    game.board[2] === game.board[5] &&
    game.board[5] === game.board[8]
  ) {
    return game.board[2];
  }

  if (
    game.board[2] !== "" &&
    game.board[2] === game.board[4] &&
    game.board[4] === game.board[6]
  ) {
    return game.board[2];
  }

  if (
    game.board[0] !== "" &&
    game.board[0] === game.board[4] &&
    game.board[4] === game.board[8]
  ) {
    return game.board[0];
  }

  if (game.board.filter(x => x === "").length === 0) {
    return "TIE";
  }

  return undefined;
};
