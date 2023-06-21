# Wherefore art thou

## Problem Statement <br>

Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
<br>
For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

### Example

```js
whatIsInAName(
  [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, bat: 2 }
); // should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].
whatIsInAName(
  [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, cookie: 2 }
); // should return [{ "apple": 1, "bat": 2, "cookie": 2 }].
whatIsInAName(
  [
    { apple: 1, bat: 2 },
    { apple: 1 },
    { apple: 1, bat: 2, cookie: 2 },
    { bat: 2 },
  ],
  { apple: 1, bat: 2 }
); // should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].
whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 }); // should return []
```

### Solutions <br>

<hr>
The solution involves using the filter() method to iterate over the collection array and filter out the objects that don't have the matching name and value pairs with the source object.
<br>
Steps:
<br>
1. Retrieve the keys of the source object using `Object.keys(source)` and store them in the `sourceKeys` variable.
<br>
2. Use the `filter()` method on the collection array to iterate over each object in the array.
<br>
3. Inside the filter callback function, loop through the `sourceKeys` array and compare the corresponding values of each key in both the object from the collection and the source object.
<br>
4. If any of the values do not match, return `false` to exclude the object from the filtered array.
<br>
5. If all the values match, return `true` to include the object in the filtered array.
<br>
6. The `filter()` method will return the new array containing objects that have matching name and value pairs with the source object.
<br>
Here's the JavaScript code for the solution:

```js
function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);
  console.log(sourceKeys);

  return collection.filter((ele) => {
    for (let i = 0; i < sourceKeys.length; i++) {
      if (ele[sourceKeys[i]] !== source[sourceKeys[i]]) {
        return false;
      }
    }
    return true;
  });
}
```

### Testing <br>

The solution has been tested with the example test cases to ensure its correctness.

### Conclusion <br>

This problem demonstrates how to filter out objects from an array based on matching name and value pairs with a given source object. The solution uses the filter() method along with a loop to compare the name and value pairs of each object in the collection array with the source object, and constructs a new array that includes only the objects that have matching pairs.
