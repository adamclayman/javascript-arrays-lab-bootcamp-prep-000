const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyPrependKitten(kittens, kitten) {
  kittens.unshift(kitten);
  return kittens;
}
function destructivelyAppendKitten(kittens, kitten) {
  kittens.push(kitten);
  return kittens;
}
function destructivelyRemoveFirstKitten(kittens) {
  kittens.shift();
  return kittens;
}
function destructivelyRemoveLastKitten(kittens) {
  kittens.pop();
  return kittens;
}
function prependKitten(kittens, kitten) {
  var kittens2 = [kitten, ...kittens];
  return kittens2;
}
function appendKitten(kittens, kitten) {
  var kittens2 = [...kittens, kitten];
  return kittens2;
}
function removeFirstKitten(kittens) {
  var kittens2 = kittens.slice(1);
  return kittens2;
}
function removeLastKitten(kittens) {
  var kittens2 = kittens.slice(0, kittens.length - 1);
  return kittens2;
}
