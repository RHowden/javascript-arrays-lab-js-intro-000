var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
}

function appendKitten(name) {
  return kittens.concat(name)
}

function prependKitten(name) {
  kittens.unshift(name)
}

function removeLastKitten(name) {
  kittens.pop(name)
}

function removeFirstKitten(name) {
  kittens.shift(name)
}
