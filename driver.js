import readLineSync from "readline-sync";
import game from "./knights-travail.js";

console.log("welcome to the knight travails algorithm");
console.log(
  "to start you must input your starting and ending positions inside a board"
);
console.log("the positions value must be between 1 and 8");
let start = {};
let end = {};

start.x = readLineSync.questionInt(
  "input the x position of your starting point : "
);
while (start.x < 1 || start.x > 8) {
  start.x = readLineSync.questionInt(
    "please insert an integer number between 1 and 8 : "
  );
}
start.y = readLineSync.questionInt(
  "input the Y position of your starting point : "
);
while (start.y < 1 || start.y > 8) {
  start.y = readLineSync.questionInt(
    "please insert an integer number between 1 and 8 : "
  );
}

end.x = readLineSync.questionInt(
  "input the x position of your ending point : "
);
while (end.x < 1 || end.x > 8) {
  end.x = readLineSync.questionInt(
    "please insert an integer number between 1 and 8 : "
  );
}
end.y = readLineSync.questionInt(
  "input the Y position of your ending point : "
);
while (end.y < 1 || end.y > 8) {
  end.y = readLineSync.questionInt(
    "please insert an integer number between 1 and 8 : "
  );
}

console.log(`the positions of your starting point => [${start.x},${start.y}] `);
console.log(`the positions of your ending point => [${end.x},${end.y}] `);

console.log(`knightMoves ([${start.x},${start.y}],[${end.x},${end.y}])`);

let result = game(start, end);
console.log(
  `=> You made it in ${result.length - 1} moves!  Here's your path: `
);

result.forEach((element) => console.log(element));
