function spinalCase(str) {
  return str.split(/\s+|_+|(?=[A-Z])/g).map(char => char.toLowerCase()).join("-");
}

spinalCase('thisIsSpinalTap'); // this-is-spinal-tap