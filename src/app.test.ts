import { TicTacToe } from "./TicTacToe";
import { win } from "./win";

it("should alternate players", () => {
  const game = new TicTacToe();
  expect(game.currentPlayer).toBe("X");
  game.play(0);
  expect(game.currentPlayer).toBe("O");
  game.play(2);
  expect(game.currentPlayer).toBe("X");
});

it("should play each move on the board", () => {
  const game = new TicTacToe();
  game.play(0);
  expect(game.board[0]).toBe("X");
  game.play(2);
  expect(game.board[2]).toBe("O");
});

it("should not recognise a winner on an unfinished game", () => {
  const board = Array<string>(9).fill("");
  expect(win(board)).toBeUndefined();
});

it("should recognise player X winning on the top row", () => {
  const board = ["X", "X", "X", "", "", "", "", "", ""];
  expect(win(board)).toBe("X");
});

it("should recognise player O winning on the top row", () => {
  const board = ["O", "O", "O", "", "", "", "", "", ""];
  expect(win(board)).toBe("O");
});

it("should recognise player O winning on the middle row", () => {
  const board = ["", "", "", "O", "O", "O", "", "", ""];
  expect(win(board)).toBe("O");
});

it("should recognise player O winning on the bottom row", () => {
  const board = ["", "", "", "", "", "", "O", "O", "O"];
  expect(win(board)).toBe("O");
});

it("should recognise player X winning on the first column", () => {
  const board = ["X", "", "", "X", "", "", "X", "", ""];
  expect(win(board)).toBe("X");
});

it("should recognise player O winning on the middle column", () => {
  const board = ["", "O", "", "", "O", "", "", "O", ""];
  expect(win(board)).toBe("O");
});

it("should recognise player O winning on the last column", () => {
  const board = ["", "", "O", "", "", "O", "", "", "O"];
  expect(win(board)).toBe("O");
});

it("should recognise player X winning on the up-diagonal", () => {
  const board = ["", "", "X", "", "X", "", "X", "", ""];
  expect(win(board)).toBe("X");
});

it("should recognise player O winning on the up-diagonal", () => {
  const board = ["O", "", "", "", "O", "", "", "", "O"];
  expect(win(board)).toBe("O");
});

it("should recognise a tie", () => {
  const board = ["O", "X", "O", "O", "X", "X", "X", "O", "O"];
  expect(win(board)).toBe("TIE");
});

it("should not let a player play over another player", () => {
  const game = new TicTacToe();
  const board = ["O", "", "", "", "", "", "", "", ""];
  game.board = board;
  game.play(0);
  expect(game.board[0]).toBe("O");
  expect(game.currentPlayer).toBe("X");
});

it("should not play on a won game", () => {
  const game = new TicTacToe();
  const board = ["", "O", "", "", "O", "", "", "O", ""];
  game.board = board;
  game.play(0);
  expect(game.currentPlayer).toBe("X");
});

it("should set winner when playing the winning move", () => {
  const game = new TicTacToe();
  const board = ["", "O", "", "", "O", "", "", "", ""];
  game.board = board;
  game.currentPlayer = "O";
  game.play(7);
  expect(game.winner).toBe("O");
});
