import { GameState } from "./GameState";
import { GameWinConditions } from "./rules";
import { Player } from "./Player";
export const evaluateBoardState = (board: Player[]): GameState => {
  if (gameHasBeenWon(GameWinConditions.rules, board)) {
    return GameState.Won;
  }

  if (boardIsFull(board)) {
    return GameState.Tied;
  }

  return GameState.Unfinished;
};

function gameHasBeenWon(
  gameWinRules: ((board: Player[]) => boolean)[],
  board: Player[]
) {
  return gameWinRules.map(x => x(board)).reduce((x, y) => x || y);
}

function boardIsFull(board: Player[]) {
  return board.filter(x => x === Player.None).length === 0;
}
