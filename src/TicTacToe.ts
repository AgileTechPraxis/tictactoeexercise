import { win } from "./win";

export class TournamentGame {
  public currentPlayer: string = "X";
  public winner: string;
  public tournament: string;
}

export class TicTacToe extends TournamentGame {
  public board: string[];

  constructor() {
    super();
    this.board = Array(9).fill("");
  }

  public play(position: number) {
    /* checks if the position has been played before. 
    If it has it doesnt move to the next player cos the move was illegal */
    if (this.board[position] !== "") {
      return;
    }
    // check if game is already won - don't need to play the move if the game is already won
    win(this);
    // if the winner is undefined, can continue
    if (this.winner) {
      // if the game is won we can just exit early
      return;
    }
    // Since the player is just a string, can just put that into the board
    this.board[position] = this.currentPlayer;
    // Calculate the winner
    win(this);
    // if the winner is undefined, don't need to set it
    if (this.winner) {
      // if the game is won we can just exit early
      return;
    }
    this.swapPlayer();
  }
  public swapPlayer() {
    this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
  }
}
