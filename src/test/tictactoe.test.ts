type Player = "X" | "O";
type Coordinate = 0 | 1 | 2;


class TicTacToe {
  private gameHasFinished: boolean = false;
  private lastPlayer: Player = "O";
  private grid: string[][] = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  public turn(player: unknown, x: unknown, y: unknown): string {
    if (
      !this.isPlayer(player) ||
      !this.isValidCoordinate(x) ||
      !this.isValidCoordinate(y)
    )
      return "Invalid move";

    if (this.gameHasFinished) return "Invalid move";

    if (this.lastPlayer === player) {
      return "Invalid move";
    }
    if (this.grid[x][y]) {
      return "Invalid move";
    }

    this.grid[x][y] = player;
    this.lastPlayer = player;
    if (this.isGameWon()) {
      this.gameHasFinished = true;
      return `${player} wins!`;
    }

    if (this.grid.every((row) => row.every((cell) => cell.length))) {
      this.gameHasFinished = true;
      return "Draw!";
    }

    return this.printGrid();
  }

  private printGrid() {
    let result: string = "";
    this.grid.forEach((row) => {
      row.forEach((cell) => {
        result += cell || "-";
      });
      result += "\n";
    });
    return result.slice(0, -1);
  }

  private isGameWon(): boolean {
    let isWon: boolean = false;
    this.grid.forEach((rows) => {
      if (rows.every((cell) => cell === "X")) isWon = true;
      if (rows.every((cell) => cell === "O")) isWon = true;
    });

    [0, 1, 2].forEach((colIndex) => {
      const col = [
        this.grid[0][colIndex],
        this.grid[1][colIndex],
        this.grid[2][colIndex],
      ];
      if (col.every((cell) => cell === "X")) isWon = true;
      if (col.every((cell) => cell === "O")) isWon = true;
    });

    const diagonal1 = [this.grid[0][0], this.grid[1][1], this.grid[2][2]];
    if (diagonal1.every((cell) => cell === "X")) isWon = true;
    if (diagonal1.every((cell) => cell === "O")) isWon = true;

    const diagonal2 = [this.grid[0][2], this.grid[1][1], this.grid[2][0]];
    if (diagonal2.every((cell) => cell === "X")) isWon = true;
    if (diagonal2.every((cell) => cell === "O")) isWon = true;

    return isWon;
  }

  private isPlayer = (player: unknown): player is Player => {
    return player === "X" || player === "O";
  };

  private isValidCoordinate = (
    coordinate: unknown
  ): coordinate is Coordinate => {
    return (
      typeof coordinate === "number" &&
      Number.isInteger(coordinate) &&
      coordinate >= 0 &&
      coordinate <= 2
    );
  };
}

describe("tictactoe", () => {
  it("can start a game", () => {
    const game = new TicTacToe();
    expect(game).toBeDefined();
  });

  describe("turn", () => {
    it("only accepts X as first move", () => {
      const game = new TicTacToe();
      expect(game.turn("X", 0, 0)).toEqual("X--\n---\n---");
    });

    it("does not accept O as first move", () => {
      const game = new TicTacToe();
      expect(game.turn("O", 0, 0)).toEqual("Invalid move");
    });

    it("does not allow X to move twice in a row", () => {
      const game = new TicTacToe();
      game.turn("X", 0, 0);
      expect(game.turn("X", 1, 0)).toEqual("Invalid move");
    });

    it("allows a second player to make a move", () => {
      const game = new TicTacToe();
      game.turn("X", 0, 0);
      expect(game.turn("O", 0, 1)).toEqual("XO-\n---\n---");
    });

    it("does not allow a player to use an occupied space", () => {
      const game = new TicTacToe();
      game.turn("X", 0, 0);
      expect(game.turn("O", 0, 0)).toEqual("Invalid move");
    });

    it.each([["Y"], ["XYZ"], [1], [undefined], [null]])(
      "does not allow invalid players",
      (invalidPlayer) => {
        const game = new TicTacToe();
        game.turn("X", 0, 0);
        expect(game.turn(invalidPlayer, 0, 1)).toEqual("Invalid move");
      }
    );

    it.each([
      [0, 3],
      [3, 3],
      [3, 0],
      ["5", 0],
      [2, 1.5],
      [NaN, 1],
    ])("does not allow invalid placements", (...[X, Y]) => {
      const game = new TicTacToe();
      expect(game.turn("X", X, Y)).toEqual("Invalid move");
    });

    it("does not allow a player to continue the game once finished", () => {
      const game = new TicTacToe();
      game.turn("X", 0, 0);
      game.turn("O", 1, 0);
      game.turn("X", 0, 1);
      game.turn("O", 1, 1);
      game.turn("X", 0, 2);
      expect(game.turn("O", 1, 2)).toEqual("Invalid move");
    });

    describe("winning conditions", () => {
      it("returns the winning player when the game is won by a top row", () => {
        const game = new TicTacToe();
        game.turn("X", 0, 0);
        game.turn("O", 1, 0);
        game.turn("X", 0, 1);
        game.turn("O", 1, 1);
        expect(game.turn("X", 0, 2)).toEqual("X wins!");
      });

      it("returns the winning player when the game is won by X in the first column", () => {
        const game = new TicTacToe();
        game.turn("X", 0, 0);
        game.turn("O", 0, 1);
        game.turn("X", 1, 0);
        game.turn("O", 0, 2);
        expect(game.turn("X", 2, 0)).toEqual("X wins!");
      });

      it("returns the winning player when the game is won by O in the first column", () => {
        const game = new TicTacToe();
        game.turn("X", 2, 2);
        game.turn("O", 0, 0);
        game.turn("X", 2, 1);
        game.turn("O", 1, 0);
        game.turn("X", 1, 1);
        expect(game.turn("O", 2, 0)).toEqual("O wins!");
      });

      it("returns the winning player when the game is won by a second column", () => {
        const game = new TicTacToe();
        game.turn("X", 0, 0);
        game.turn("O", 0, 1);
        game.turn("X", 1, 0);
        game.turn("O", 1, 1);
        game.turn("X", 2, 2);
        expect(game.turn("O", 2, 1)).toEqual("O wins!");
      });

      it("returns the winning player when the game is won by player X by a major diagonal", () => {
        const game = new TicTacToe();
        game.turn("X", 0, 0);
        game.turn("O", 0, 1);
        game.turn("X", 1, 1);
        game.turn("O", 1, 2);
        expect(game.turn("X", 2, 2)).toEqual("X wins!");
      });

      it("returns the winning player when the game is won by player X by a minor diagonal", () => {
        const game = new TicTacToe();
        game.turn("X", 0, 2);
        game.turn("O", 0, 1);
        game.turn("X", 1, 1);
        game.turn("O", 1, 2);
        expect(game.turn("X", 2, 0)).toEqual("X wins!");
      });

      it("returns the winning player when the game is won by player O by a major diagonal", () => {
        const game = new TicTacToe();
        game.turn("X", 0, 2);
        game.turn("O", 0, 0);
        game.turn("X", 0, 1);
        game.turn("O", 1, 1);
        game.turn("X", 1, 0);
        expect(game.turn("O", 2, 2)).toEqual("O wins!");
      });

      it("returns the winning player when the game is won by player O by a minor diagonal", () => {
        const game = new TicTacToe();
        game.turn("X", 0, 0);
        game.turn("O", 0, 2);
        game.turn("X", 0, 1);
        game.turn("O", 1, 1);
        game.turn("X", 1, 2);
        expect(game.turn("O", 2, 0)).toEqual("O wins!");
      });
    });

    describe("draw", () => {
      it("returns a draw when the game is a draw", () => {
        const game = new TicTacToe();
        game.turn("X", 0, 0);
        game.turn("O", 0, 1);
        game.turn("X", 0, 2);
        game.turn("O", 1, 1);
        game.turn("X", 1, 0);
        game.turn("O", 1, 2);
        game.turn("X", 2, 1);
        game.turn("O", 2, 0);
        expect(game.turn("X", 2, 2)).toBe("Draw!");
      });
    });
  });
});
