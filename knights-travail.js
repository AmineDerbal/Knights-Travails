class Position {
  constructor(x, y, prev = []) {
    this.x = x;
    this.y = y;
    this.prev = prev;
  }
}
const game = (start, end) => {
  return knightMoves(
    new Position(start.x, start.y),
    new Position(end.x, end.y)
  );
};
const KnightPotentialMoves = [
  [-2, -1],
  [-2, 1],
  [-1, -2],
  [-1, 2],
  [1, -2],
  [1, 2],
  [2, -1],
  [2, 1],
];
const knightMoves = (startPos, targetPos, queue = []) => {
  let result;
  let currentPos = JSON.parse(JSON.stringify(startPos));
  currentPos.prev.push([currentPos.x, currentPos.y]);

  if (startPos.x == targetPos.x && startPos.y == targetPos.y) {
    return currentPos.prev;
  }
  for (let i = 0; i < KnightPotentialMoves.length; i++) {
    if (
      currentPos.x + KnightPotentialMoves[i][0] > 0 &&
      currentPos.x + KnightPotentialMoves[i][0] < 9 &&
      currentPos.y + KnightPotentialMoves[i][1] > 0 &&
      currentPos.y + KnightPotentialMoves[i][1] < 9 &&
      !checkPosInPrevious(
        currentPos.x + KnightPotentialMoves[i][0],
        currentPos.y + KnightPotentialMoves[i][1],
        currentPos.prev
      )
    ) {
      queue.push(
        new Position(
          currentPos.x + KnightPotentialMoves[i][0],
          currentPos.y + KnightPotentialMoves[i][1],
          currentPos.prev
        )
      );
    }
  }

  if (result === undefined) {
    let temp = queue.shift();
    result = knightMoves(temp, targetPos, queue);
  }

  return result;
};

const checkPosInPrevious = (x, y, prev) => {
  let result = false;
  if (prev.length == 0) return false;
  prev.forEach((element) => {
    if (element[0] == x && element[1] == y) {
      result = true;
    }
  });

  return result;
};

export default game;
