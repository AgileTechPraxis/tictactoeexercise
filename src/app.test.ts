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
  const game = new TicTacToe(); 
  expect(win(game)).toBe(undefined);
});

it("should recognise player X winning on the top row", () => {
  const game = new TicTacToe();
  const board = ["X", "X", "X", "", "", "", "", "", ""];
  game.board = board;
  expect(win(game)).toBe("X");
});

it("should recognise player O winning on the top row", () => {
  const game = new TicTacToe();
  const board = ["O", "O", "O", "", "", "", "", "", ""];
  game.board = board;
  expect(win(game)).toBe("O");
});

it("should recognise player O winning on the middle row", () => {
  const game = new TicTacToe();
  const board = ["", "", "", "O", "O", "O", "", "", ""];
  game.board = board;
  expect(win(game)).toBe("O");
});

it("should recognise player O winning on the bottom row", () => {
  const game = new TicTacToe();
  const board = ["", "", "", "", "", "", "O", "O", "O"];
  game.board = board;
  expect(win(game)).toBe("O");
});

it("should recognise player X winning on the first column", () => {
  const game = new TicTacToe();
  const board = ["X", "", "", "X", "", "", "X", "", ""];
  game.board = board;
  expect(win(game)).toBe("X");
});

it("should recognise player O winning on the middle column", () => {
  const game = new TicTacToe();
  const board = ["", "O", "", "", "O", "", "", "O", ""];
  game.board = board;
  expect(win(game)).toBe("O");
});

it("should recognise player O winning on the last column", () => {
  const game = new TicTacToe();
  const board = ["", "", "O", "", "", "O", "", "", "O"];
  game.board = board;
  expect(win(game)).toBe("O");
});

it("should recognise player X winning on the up-diagonal", () => {
  const game = new TicTacToe();
  const board = ["", "", "X", "", "X", "", "X", "", ""];
  game.board = board;
  expect(win(game)).toBe("X");
});

it("should recognise player O winning on the up-diagonal", () => {
  const game = new TicTacToe();
  const board = ["O", "", "", "", "O", "", "", "", "O"];
  game.board = board;
  expect(win(game)).toBe("O");
});

it("should recognise a tie", () => {
  const game = new TicTacToe();
  const board = ["O", "X", "O", "O", "X", "X", "X", "O", "O"];
  game.board = board;
  expect(win(game)).toBe("TIE");
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
