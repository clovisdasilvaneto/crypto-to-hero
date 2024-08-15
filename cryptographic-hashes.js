const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ["red", "green", "blue", "yellow", "pink", "orange"];

// given a hash, return the color that created the hash

// hash => color
// utf8ToBytes => strings -> bytes -> sha256 => hash
// to compare use toHex => unit8 -> hash
function findColor(hash) {
  const hex = toHex(hash);
  const color = COLORS.find((color) => {
    const hashedColor = toHex(sha256(utf8ToBytes(color)));

    return hashedColor === hex;
  });

  return color;
}

module.exports = findColor;
