"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GameState_1 = require("./GameState");
const Board_1 = require("./Board");
const Player_1 = require("./Player");
class TicTacToe {
    constructor() {
        this.board = new Board_1.Board();
        this.gameState = GameState_1.GameState.Unfinished;
        this.currentPlayer = Player_1.Player.X;
        this.winner = Player_1.Player.None;
    }
    getGameState() {
        return this.gameState;
    }
    getBoard() {
        return this.board.getBoard();
    }
    getWinner() {
        return this.winner;
    }
    play(position) {
        if (!this.board.isLegalMove(position)) {
            return;
        }
        this.board.play(position, this.currentPlayer);
        this.updateWinner();
        this.swapPlayer();
    }
    updateWinner() {
        this.gameState = this.board.checkState();
        if (this.gameState === GameState_1.GameState.Won) {
            this.winner = this.currentPlayer;
        }
    }
    swapPlayer() {
        this.currentPlayer = this.currentPlayer === Player_1.Player.X ? Player_1.Player.O : Player_1.Player.X;
    }
}
exports.TicTacToe = TicTacToe;
//# sourceMappingURL=TicTacToe.js.map