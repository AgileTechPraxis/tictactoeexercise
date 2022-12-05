import { evaluateBoardState } from "./evaluateBoardState";
import { GameState } from "./GameState";
import { Player } from "./Player";

export class Board {
  getBoard() {
    return Object.assign([], this.board);
  }
  checkState(): GameState {
    return evaluateBoardState(this.board);
  }

  play(position: number, player: Player) {
    this.board[position] = player;
  }

  isLegalMove(position: number) {
    return this.board[position] === Player.None;
  }

  private board: Player[] = Array(9).fill(Player.None);
}
