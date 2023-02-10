function duplicateEncode(word) {
  word = word.toLowerCase();
  let charCount = word.split("").reduce((acc, char) => {
    acc[char] = acc[char] ? acc[char] + 1 : 1;
    return acc;
  }, {});
  return word
    .split("")
    .map((char) => (charCount[char] > 1 ? ")" : "("))
    .join("");
}
