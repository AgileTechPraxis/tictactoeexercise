import { TicTacToe } from "./TicTacToe";
export const win = (game: TicTacToe) => {
  if (
    game.board[0] !== "" &&
    game.board[0] === game.board[1] &&
    game.board[1] === game.board[2]
  ) {
    game.winner = game.board[0];
    return game;
  }
  if (
    game.board[3] !== "" &&
    game.board[3] === game.board[4] &&
    game.board[4] === game.board[5]
  ) {
    game.winner = game.board[3];
    return game;
  }
  if (
    game.board[6] !== "" &&
    game.board[6] === game.board[7] &&
    game.board[7] === game.board[8]
  ) {
    game.winner = game.board[6];
    return game;
  }
  if (
    game.board[0] !== "" &&
    game.board[0] === game.board[3] &&
    game.board[3] === game.board[6]
  ) {
    game.winner = game.board[0];
    return game;
  }
  if (
    game.board[1] !== "" &&
    game.board[1] === game.board[4] &&
    game.board[4] === game.board[7]
  ) {
    game.winner = game.board[1];
    return game;
  }
  if (
    game.board[2] !== "" &&
    game.board[2] === game.board[5] &&
    game.board[5] === game.board[8]
  ) {
    game.winner = game.board[2];
    return game;
  }
  if (
    game.board[2] !== "" &&
    game.board[2] === game.board[4] &&
    game.board[4] === game.board[6]
  ) {
    game.winner = game.board[2];
    return game;
  }
  if (
    game.board[0] !== "" &&
    game.board[0] === game.board[4] &&
    game.board[4] === game.board[8]
  ) {
    game.winner = game.board[0];
    return game;
  }
  if (game.board.filter(x => x === "").length === 0) {
    game.winner = "TIE";
    return game;
  }

  game.winner = undefined;
  return game;
};
