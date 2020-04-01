import { win } from "./win";

export class TicTacToe {
  public currentPlayer: string = "X";
  public winner: string;
  public board: string[];

  constructor() {
    this.board = Array(9).fill("");
  }

  public play(position: number) {
    if (this.positionIsOccupied(position)) {
      return;
    }

    if (this.isGameOver()) {
      return;
    }

    this.markBoard(position);   
    
    if (this.isGameOver()) {
      return;
    }

    this.swapPlayer();
  }

  public swapPlayer() {
    this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
  }

  private positionIsOccupied(position: number): boolean {
    return this.board[position] !== "";
  }

  private isGameOver(): boolean {
    this.winner = win(this);
    return this.winner !== undefined;
  }

  private markBoard(position: number): void {
    this.board[position] = this.currentPlayer;  
  }
}
