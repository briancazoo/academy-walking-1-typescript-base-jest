enum Mark {
  O = "O",
  X = "X",
}

enum Position {}

interface Board {
  positions: Map<Position, Mark>;
  placeMark: (mark: Mark, position: Position) => void;
}

interface Game {
  board: Board;
}

describe("TicTacToe", () => {
  test("X plays first", () => {
    const game = new Game();
    game.play(Position.TopLeft);
  });
});
