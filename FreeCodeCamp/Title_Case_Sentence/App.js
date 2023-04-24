function titleCase(str) {
  return str
    .split(' ')
    .map((str) => str[0].toUpperCase() + str.substr(1).toLowerCase())
    .join(' ');
}

titleCase("I'm a little tea pot"); // I'm A Little Tea Pot
