"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const win_1 = require("./win");
// Dispensables: Data Class
class TournamentGame {
    constructor() {
        this.currentPlayer = "X";
    }
}
exports.TournamentGame = TournamentGame;
class TicTacToe extends TournamentGame {
    constructor() {
        super();
        this.board = Array(9).fill("");
    }
    play(position) {
        // Dispensables: Comments
        /* checks if the position has been played before.
        If it has it doesnt move to the next player cos the move was illegal */
        if (this.board[position] !== "") {
            return;
        }
        // check if game is already won - don't need to play the move if the game is already won
        win_1.win(this);
        // if the winner is undefined, can continue
        if (this.winner) {
            // if the game is won we can just exit early
            return;
        }
        // Since the player is just a string, can just put that into the board
        this.board[position] = this.currentPlayer;
        // Calculate the winner
        win_1.win(this);
        // if the winner is undefined, don't need to set it
        if (this.winner) {
            // if the game is won we can just exit early
            return;
        }
        this.swapPlayer();
    }
    swapPlayer() {
        // Change preventers: Shotgun Surgery
        /* Any change to the player symbols or representation will require changes in
           all of the multitude of classes that may care about the different types of players */
        this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
    }
}
exports.TicTacToe = TicTacToe;
//# sourceMappingURL=TicTacToe.js.map