class WinningCondition {
  private positions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
  ];

  public getWinner(board: string[]): string {
    const winningPosition = this.positions.find((position) => {
      if (
        board[position[0]] !== "" &&
        board[position[0]] === board[position[1]] &&
        board[position[1]] === board[position[2]]
      ) {
        return true;
      }
    });

    return winningPosition && board[winningPosition[0]];
  }
}

export const win = (board: string[]) => {
  const winningConditions = new WinningCondition();
  const winner = winningConditions.getWinner(board);
  if (winner) {
    return winner;
  }

  if (board.filter((x) => x === "").length === 0) {
    return "TIE";
  }

  return undefined;
};
