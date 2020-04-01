"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Bloaters:Long Method
exports.win = (game) => {
    // Object Orientation Abusers: Switch Statements
    if (
    // Change Preventers: Divergent Change
    /* Any change to the board representation will require sweeping changes in this class.
       e.g. if we want a 4x4 or a 3dimensional board in the future */
    game.board[0] !== "" &&
        game.board[0] === game.board[1] &&
        game.board[1] === game.board[2]) {
        // Couplers: Inappropriate Intimacy
        game.winner = game.board[0];
        return game;
    }
    if (
    // Couplers: Feature Envy
    game.board[3] !== "" &&
        game.board[3] === game.board[4] &&
        game.board[4] === game.board[5]) {
        game.winner = game.board[3];
        return game;
    }
    if (game.board[6] !== "" &&
        game.board[6] === game.board[7] &&
        game.board[7] === game.board[8]) {
        game.winner = game.board[6];
        return game;
    }
    if (game.board[0] !== "" &&
        game.board[0] === game.board[3] &&
        game.board[3] === game.board[6]) {
        game.winner = game.board[0];
        return game;
    }
    if (game.board[1] !== "" &&
        game.board[1] === game.board[4] &&
        game.board[4] === game.board[7]) {
        game.winner = game.board[1];
        return game;
    }
    if (game.board[2] !== "" &&
        game.board[2] === game.board[5] &&
        game.board[5] === game.board[8]) {
        game.winner = game.board[2];
        return game;
    }
    if (game.board[2] !== "" &&
        game.board[2] === game.board[4] &&
        game.board[4] === game.board[6]) {
        game.winner = game.board[2];
        return game;
    }
    if (game.board[0] !== "" &&
        game.board[0] === game.board[4] &&
        game.board[4] === game.board[8]) {
        game.winner = game.board[0];
        return game;
    }
    if (game.board.filter(x => x === "").length === 0) {
        // Bloaters:primitive obsession
        game.winner = "TIE";
        return game;
    }
    // Bloaters:primitive obsession
    game.winner = undefined;
    return game;
};
//# sourceMappingURL=win.js.map