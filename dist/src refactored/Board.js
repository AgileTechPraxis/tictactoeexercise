"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const evaluateBoardState_1 = require("./evaluateBoardState");
const Player_1 = require("./Player");
class Board {
    constructor() {
        this.board = Array(9).fill(Player_1.Player.None);
    }
    getBoard() {
        return Object.assign([], this.board);
    }
    checkState() {
        return evaluateBoardState_1.evaluateBoardState(this.board);
    }
    play(position, player) {
        this.board[position] = player;
    }
    isLegalMove(position) {
        return this.board[position] === Player_1.Player.None;
    }
}
exports.Board = Board;
//# sourceMappingURL=Board.js.map