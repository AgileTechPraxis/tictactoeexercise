import { GameState } from "./GameState";
import { Board } from "./Board";
import { Player } from "./Player";

export class TicTacToe {
  private board: Board = new Board();
  private gameState: GameState = GameState.Unfinished;
  private currentPlayer: Player = Player.X;
  private winner: Player = Player.None;

  getGameState(): GameState {
    return this.gameState;
  }

  getBoard() {
    return this.board.getBoard();
  }

  getWinner() {
    return this.winner;
  }

  public play(position: number) {
    if (!this.board.isLegalMove(position)) {
      return;
    }
    this.board.play(position, this.currentPlayer);
    this.updateWinner();
    this.swapPlayer();
  }

  private updateWinner() {
    this.gameState = this.board.checkState();
    if (this.gameState === GameState.Won) {
      this.winner = this.currentPlayer;
    }
  }

  public swapPlayer() {
    this.currentPlayer = this.currentPlayer === Player.X ? Player.O : Player.X;
  }
}
