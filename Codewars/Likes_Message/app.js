function likes(names) {
  let ourLikes = [...names];

  switch (ourLikes.length) {
    case 0:
      return "no one likes this";
      break;
    case 1:
      return `${ourLikes[0]} likes this`;
      break;
    case 2:
      return `${ourLikes[0]} and ${ourLikes[1]} like this`;
      break;
    case 3:
      return `${ourLikes[0]}, ${ourLikes[1]} and ${ourLikes[2]} like this`;
      break;
    default:
      return `${ourLikes[0]}, ${ourLikes[1]} and ${
        ourLikes.length - 2
      } others like this`;
      break;
  }
}

likes([]); // "no one likes this"
likes(["Peter"]); // "Peter likes this"
likes(["Jacob", "Alex"]); // "Jacob and Alex like this"
likes(["Max", "John", "Mark"]); // "Max, John and Mark like this"
likes(["Alex", "Jacob", "Mark", "Max"]); // "Alex, Jacob and 2 others like this"
