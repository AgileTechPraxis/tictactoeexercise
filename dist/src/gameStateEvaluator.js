"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class gameStateEvaluator {
    constructor() {
        this.evaluateGameState = (board) => {
            if (this.winTopRow(board)) {
                return board[0];
            }
            if (this.winMiddleRow(board)) {
                return board[3];
            }
            if (this.winBottomRow(board)) {
                return board[6];
            }
            if (this.winFirstColumn(board)) {
                return board[0];
            }
            if (this.winSecondColumn(board)) {
                return board[1];
            }
            if (this.winThirdColumn(board)) {
                return board[2];
            }
            if (this.winFirstDiagonal(board)) {
                return board[2];
            }
            if (this.winSecondDiagonal(board)) {
                return board[0];
            }
            if (this.allMovesPlayed(board)) {
                return "TIE";
            }
            return undefined;
        };
    }
    evaluateChanceOfWinning(board) {
        /* pretend there is code here - writing a predictor is out of scope for this COP */
    }
    allMovesPlayed(board) {
        return board.filter(x => x === "").length === 0;
    }
    winSecondDiagonal(board) {
        return board[0] !== "" && board[0] === board[4] && board[4] === board[8];
        return board[2] !== "" && board[2] === board[4] && board[4] === board[6];
    }
    winFirstDiagonal(board) {
        return board[2] !== "" && board[2] === board[4] && board[4] === board[6];
    }
    winThirdColumn(board) {
        return board[2] !== "" && board[2] === board[5] && board[5] === board[8];
    }
    winSecondColumn(board) {
        return board[1] !== "" && board[1] === board[4] && board[4] === board[7];
    }
    winFirstColumn(board) {
        return board[0] !== "" && board[0] === board[3] && board[3] === board[6];
    }
    winBottomRow(board) {
        return board[6] !== "" && board[6] === board[7] && board[7] === board[8];
    }
    winMiddleRow(board) {
        return board[3] !== "" && board[3] === board[4] && board[4] === board[5];
    }
    winTopRow(board) {
        return board[0] !== "" && board[0] === board[1] && board[1] === board[2];
    }
}
exports.gameStateEvaluator = gameStateEvaluator;
//# sourceMappingURL=gameStateEvaluator.js.map