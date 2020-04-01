"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = require("./Player");
class GameWinConditions {
}
exports.GameWinConditions = GameWinConditions;
GameWinConditions.topRow = (board) => evaluateRow(board, 0);
GameWinConditions.middleRow = (board) => evaluateRow(board, 1);
GameWinConditions.bottomRow = (board) => evaluateRow(board, 2);
GameWinConditions.leftColumn = (board) => evaluateColumn(board, 0);
GameWinConditions.middleColumn = (board) => evaluateColumn(board, 1);
GameWinConditions.rightColumn = (board) => evaluateColumn(board, 2);
GameWinConditions.upDiagonal = (board) => evaluateUpDiagonal(board);
GameWinConditions.downDiagonal = (board) => evaluateDownDiagonal(board);
GameWinConditions.rules = [
    GameWinConditions.topRow,
    GameWinConditions.middleRow,
    GameWinConditions.bottomRow,
    GameWinConditions.leftColumn,
    GameWinConditions.middleColumn,
    GameWinConditions.rightColumn,
    GameWinConditions.upDiagonal,
    GameWinConditions.downDiagonal
];
function evaluateDownDiagonal(board) {
    return allEqualAndNotEmpty(0, 4, 8, board);
}
function evaluateUpDiagonal(board) {
    return allEqualAndNotEmpty(2, 4, 6, board);
}
function evaluateColumn(board, column) {
    return allEqualAndNotEmpty(column + 0, column + 3, column + 6, board);
}
function evaluateRow(board, row) {
    return allEqualAndNotEmpty(3 * row + 0, 3 * row + 1, 3 * row + 2, board);
}
function allEqualAndNotEmpty(firstIndex, secondIndex, thirdIndex, board) {
    return (board[firstIndex] !== Player_1.Player.None &&
        board[firstIndex] === board[secondIndex] &&
        board[secondIndex] === board[thirdIndex]);
}
//# sourceMappingURL=rules.js.map