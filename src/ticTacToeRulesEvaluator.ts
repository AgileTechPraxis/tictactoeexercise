import { gameStateEvaluator } from "./gameStateEvaluator";

export class ticTacToeRulesEvaluator {
  evaluateGameState = (board: string[]) => {
    return new gameStateEvaluator().evaluateGameState(board);
  };
  evaluateChanceOfWinning = (board: string[]) => {
    return new gameStateEvaluator().evaluateChanceOfWinning(board);
  };
}
