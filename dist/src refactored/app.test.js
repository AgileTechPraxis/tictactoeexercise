"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TicTacToe_1 = require("./TicTacToe");
const Player_1 = require("./Player");
const GameState_1 = require("./GameState");
it("should play each move on the board", () => {
    const game = new TicTacToe_1.TicTacToe();
    game.play(0);
    expect(game.getBoard()[0]).toBe(Player_1.Player.X);
    game.play(2);
    expect(game.getBoard()[2]).toBe(Player_1.Player.O);
});
it("should not recognise a winner on an unfinished game", () => {
    const game = new TicTacToe_1.TicTacToe();
    expect(game.getWinner()).toBe(Player_1.Player.None);
});
it("should recognise player X winning on the top row", () => {
    const game = new TicTacToe_1.TicTacToe();
    game.play(0);
    game.play(8);
    game.play(1);
    game.play(7);
    game.play(2);
    expect(game.getWinner()).toBe(Player_1.Player.X);
});
it("should recognise player O winning on the top row", () => {
    const game = new TicTacToe_1.TicTacToe();
    game.play(5);
    game.play(0);
    game.play(8);
    game.play(1);
    game.play(7);
    game.play(2);
    expect(game.getWinner()).toBe(Player_1.Player.O);
});
it("should recognise player O winning on the middle row", () => {
    const game = new TicTacToe_1.TicTacToe();
    const board = ["", "", "", "O", "O", "O", "", "", ""];
    game.play(1);
    game.play(3);
    game.play(8);
    game.play(4);
    game.play(7);
    game.play(5);
    expect(game.getWinner()).toBe(Player_1.Player.O);
});
it("should recognise player O winning on the bottom row", () => {
    const game = new TicTacToe_1.TicTacToe();
    game.play(0);
    game.play(6);
    game.play(1);
    game.play(7);
    game.play(3);
    game.play(8);
    expect(game.getWinner()).toBe(Player_1.Player.O);
});
it("should recognise player X winning on the first column", () => {
    const game = new TicTacToe_1.TicTacToe();
    game.play(0);
    game.play(2);
    game.play(3);
    game.play(7);
    game.play(6);
    expect(game.getWinner()).toBe(Player_1.Player.X);
});
it("should recognise player O winning on the middle column", () => {
    const game = new TicTacToe_1.TicTacToe();
    game.play(5);
    game.play(1);
    game.play(8);
    game.play(4);
    game.play(6);
    game.play(7);
    expect(game.getWinner()).toBe(Player_1.Player.O);
});
it("should recognise player O winning on the last column", () => {
    const game = new TicTacToe_1.TicTacToe();
    game.play(1);
    game.play(2);
    game.play(3);
    game.play(5);
    game.play(6);
    game.play(8);
    expect(game.getWinner()).toBe(Player_1.Player.O);
});
it("should recognise player X winning on the up-diagonal", () => {
    const game = new TicTacToe_1.TicTacToe();
    game.play(2);
    game.play(1);
    game.play(4);
    game.play(5);
    game.play(6);
    expect(game.getWinner()).toBe(Player_1.Player.X);
});
it("should recognise player O winning on the up-diagonal", () => {
    const game = new TicTacToe_1.TicTacToe();
    const board = ["O", "", "", "", "O", "", "", "", "O"];
    game.play(7);
    game.play(0);
    game.play(1);
    game.play(4);
    game.play(5);
    game.play(8);
    expect(game.getWinner()).toBe(Player_1.Player.O);
});
it("should recognise a tie", () => {
    const game = new TicTacToe_1.TicTacToe();
    game.play(1);
    game.play(0);
    game.play(4);
    game.play(2);
    game.play(5);
    game.play(3);
    game.play(6);
    game.play(7);
    game.play(8);
    expect(game.getWinner()).toBe(Player_1.Player.None);
    expect(game.getGameState()).toBe(GameState_1.GameState.Tied);
});
it("should not let a player play over another player", () => {
    const game = new TicTacToe_1.TicTacToe();
    game.play(0);
    game.play(0);
    game.play(1);
    expect(game.getBoard()[0]).toBe(Player_1.Player.X);
    expect(game.getBoard()[1]).toBe(Player_1.Player.O);
});
//# sourceMappingURL=app.test.js.map