const app = "I don't do much.";

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyPrependKitten(kitten) {
  kittens.unshift(kitten);
  return kittens;
}
function destructivelyAppendKitten(kitten) {
  kittens.shift();
  return kittens;
}


var kittens = ['Milo', 'Otis', 'Garfield'];
