"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TicTacToe_1 = require("./TicTacToe");
const win_1 = require("./win");
it("should alternate players", () => {
    const game = new TicTacToe_1.TicTacToe();
    expect(game.currentPlayer).toBe("X");
    game.play(0);
    expect(game.currentPlayer).toBe("O");
    game.play(2);
    expect(game.currentPlayer).toBe("X");
});
it("should play each move on the board", () => {
    const game = new TicTacToe_1.TicTacToe();
    game.play(0);
    expect(game.board[0]).toBe("X");
    game.play(2);
    expect(game.board[2]).toBe("O");
});
it("should not recognise a winner on an unfinished game", () => {
    const game = new TicTacToe_1.TicTacToe();
    win_1.win(game);
    expect(game.winner).toBe(undefined);
});
it("should recognise player X winning on the top row", () => {
    const game = new TicTacToe_1.TicTacToe();
    const board = ["X", "X", "X", "", "", "", "", "", ""];
    game.board = board;
    win_1.win(game);
    expect(game.winner).toBe("X");
});
it("should recognise player O winning on the top row", () => {
    const game = new TicTacToe_1.TicTacToe();
    const board = ["O", "O", "O", "", "", "", "", "", ""];
    game.board = board;
    win_1.win(game);
    expect(game.winner).toBe("O");
});
it("should recognise player O winning on the middle row", () => {
    const game = new TicTacToe_1.TicTacToe();
    const board = ["", "", "", "O", "O", "O", "", "", ""];
    game.board = board;
    win_1.win(game);
    expect(game.winner).toBe("O");
});
it("should recognise player O winning on the bottom row", () => {
    const game = new TicTacToe_1.TicTacToe();
    const board = ["", "", "", "", "", "", "O", "O", "O"];
    game.board = board;
    win_1.win(game);
    expect(game.winner).toBe("O");
});
it("should recognise player X winning on the first column", () => {
    const game = new TicTacToe_1.TicTacToe();
    const board = ["X", "", "", "X", "", "", "X", "", ""];
    game.board = board;
    win_1.win(game);
    expect(game.winner).toBe("X");
});
it("should recognise player O winning on the middle column", () => {
    const game = new TicTacToe_1.TicTacToe();
    const board = ["", "O", "", "", "O", "", "", "O", ""];
    game.board = board;
    win_1.win(game);
    expect(game.winner).toBe("O");
});
it("should recognise player O winning on the last column", () => {
    const game = new TicTacToe_1.TicTacToe();
    const board = ["", "", "O", "", "", "O", "", "", "O"];
    game.board = board;
    win_1.win(game);
    expect(game.winner).toBe("O");
});
it("should recognise player X winning on the up-diagonal", () => {
    const game = new TicTacToe_1.TicTacToe();
    const board = ["", "", "X", "", "X", "", "X", "", ""];
    game.board = board;
    win_1.win(game);
    expect(game.winner).toBe("X");
});
it("should recognise player O winning on the up-diagonal", () => {
    const game = new TicTacToe_1.TicTacToe();
    const board = ["O", "", "", "", "O", "", "", "", "O"];
    game.board = board;
    win_1.win(game);
    expect(game.winner).toBe("O");
});
it("should recognise a tie", () => {
    const game = new TicTacToe_1.TicTacToe();
    const board = ["O", "X", "O", "O", "X", "X", "X", "O", "O"];
    game.board = board;
    win_1.win(game);
    expect(game.winner).toBe("TIE");
});
it("should not let a player play over another player", () => {
    const game = new TicTacToe_1.TicTacToe();
    const board = ["O", "", "", "", "", "", "", "", ""];
    game.board = board;
    game.play(0);
    expect(game.board[0]).toBe("O");
    expect(game.currentPlayer).toBe("X");
});
//# sourceMappingURL=app.test.js.map