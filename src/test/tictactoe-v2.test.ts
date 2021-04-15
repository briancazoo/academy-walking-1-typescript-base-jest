enum Mark {
  O = "O",
  X = "X",
}

enum Position {
  TopLeft = "TopLeft"
}

interface Board {
  positions: Map<Position, Mark>;
  placeMark: (mark: Mark, position: Position) => void;
}

interface Game {
  board: Board;
}
class Game {
  play(position: Position) {}
}

describe("TicTacToe", () => {
  test("X plays first", () => {
    const game = new Game();
    expect( () => game.play(Position.TopLeft)).not.toThrow();
  });
  test("O plays second", () => {
    const game = new Game();
    expect( () => {
      game.play(Position.TopLeft)
      game.play(Position.TopMiddle)
    }).not.toThrow();
  })
});

