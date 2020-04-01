"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GameState_1 = require("./GameState");
const rules_1 = require("./rules");
const Player_1 = require("./Player");
exports.evaluateBoardState = (board) => {
    if (gameHasBeenWon(rules_1.GameWinConditions.rules, board)) {
        return GameState_1.GameState.Won;
    }
    if (boardIsFull(board)) {
        return GameState_1.GameState.Tied;
    }
    return GameState_1.GameState.Unfinished;
};
function gameHasBeenWon(gameWinRules, board) {
    return gameWinRules.map(x => x(board)).reduce((x, y) => x || y);
}
function boardIsFull(board) {
    return board.filter(x => x === Player_1.Player.None).length === 0;
}
//# sourceMappingURL=evaluateBoardState.js.map