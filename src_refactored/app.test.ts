import { TicTacToe } from "./TicTacToe";
import { Player } from "./Player";
import { GameState } from "./GameState";

it("should play each move on the board", () => {
  const game = new TicTacToe();
  game.play(0);
  expect(game.getBoard()[0]).toBe(Player.X);
  game.play(2);
  expect(game.getBoard()[2]).toBe(Player.O);
});

it("should not recognise a winner on an unfinished game", () => {
  const game = new TicTacToe();

  expect(game.getWinner()).toBe(Player.None);
});

it("should recognise player X winning on the top row", () => {
  const game = new TicTacToe();
  game.play(0);
  game.play(8);
  game.play(1);
  game.play(7);
  game.play(2);
  expect(game.getWinner()).toBe(Player.X);
});

it("should recognise player O winning on the top row", () => {
  const game = new TicTacToe();
  game.play(5);
  game.play(0);
  game.play(8);
  game.play(1);
  game.play(7);
  game.play(2);
  expect(game.getWinner()).toBe(Player.O);
});

it("should recognise player O winning on the middle row", () => {
  const game = new TicTacToe();
  const board = ["", "", "", "O", "O", "O", "", "", ""];
  game.play(1);
  game.play(3);
  game.play(8);
  game.play(4);
  game.play(7);
  game.play(5);
  expect(game.getWinner()).toBe(Player.O);
});

it("should recognise player O winning on the bottom row", () => {
  const game = new TicTacToe();
  game.play(0);
  game.play(6);
  game.play(1);
  game.play(7);
  game.play(3);
  game.play(8);
  expect(game.getWinner()).toBe(Player.O);
});

it("should recognise player X winning on the first column", () => {
  const game = new TicTacToe();
  game.play(0);
  game.play(2);
  game.play(3);
  game.play(7);
  game.play(6);
  expect(game.getWinner()).toBe(Player.X);
});

it("should recognise player O winning on the middle column", () => {
  const game = new TicTacToe();
  game.play(5);
  game.play(1);
  game.play(8);
  game.play(4);
  game.play(6);
  game.play(7);
  expect(game.getWinner()).toBe(Player.O);
});

it("should recognise player O winning on the last column", () => {
  const game = new TicTacToe();
  game.play(1);
  game.play(2);
  game.play(3);
  game.play(5);
  game.play(6);
  game.play(8);
  expect(game.getWinner()).toBe(Player.O);
});

it("should recognise player X winning on the up-diagonal", () => {
  const game = new TicTacToe();
  game.play(2);
  game.play(1);
  game.play(4);
  game.play(5);
  game.play(6);
  expect(game.getWinner()).toBe(Player.X);
});

it("should recognise player O winning on the up-diagonal", () => {
  const game = new TicTacToe();
  const board = ["O", "", "", "", "O", "", "", "", "O"];
  game.play(7);
  game.play(0);
  game.play(1);
  game.play(4);
  game.play(5);
  game.play(8);
  expect(game.getWinner()).toBe(Player.O);
});

it("should recognise a tie", () => {
  const game = new TicTacToe();
  game.play(1);
  game.play(0);
  game.play(4);
  game.play(2);
  game.play(5);
  game.play(3);
  game.play(6);
  game.play(7);
  game.play(8);
  expect(game.getWinner()).toBe(Player.None);
  expect(game.getGameState()).toBe(GameState.Tied);
});

it("should not let a player play over another player", () => {
  const game = new TicTacToe();
  game.play(0);
  game.play(0);
  game.play(1);
  expect(game.getBoard()[0]).toBe(Player.X);
  expect(game.getBoard()[1]).toBe(Player.O);
});
