"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gameStateEvaluator_1 = require("./gameStateEvaluator");
class ticTacToeRulesEvaluator {
    constructor() {
        this.evaluateGameState = (board) => {
            return new gameStateEvaluator_1.gameStateEvaluator().evaluateGameState(board);
        };
        this.evaluateChanceOfWinning = (board) => {
            return new gameStateEvaluator_1.gameStateEvaluator().evaluateChanceOfWinning(board);
        };
    }
}
exports.ticTacToeRulesEvaluator = ticTacToeRulesEvaluator;
//# sourceMappingURL=ticTacToeRulesEvaluator.js.map