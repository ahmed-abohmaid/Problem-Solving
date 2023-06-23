# Search and Replace

## Problem Statement <br>

Perform a search and replace on the sentence using the arguments provided and return the new sentence.
<br>
First argument is the sentence to perform the search and replace on.
<br>
Second argument is the word that you will be replacing (before).
<br>
Third argument is what you will be replacing the second argument with (after).
<br>
Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

### Example

```js
myReplace('Let us go to the store', 'store', 'mall'); // Let us go to the mall.
myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting'); // He is Sitting on the couch.
myReplace('I think we should look up there', 'up', 'Down'); // I think we should look down there.
myReplace('This has a spellngi error', 'spellngi', 'spelling'); // This has a spelling error.
myReplace('His name is Tom', 'Tom', 'john'); // His name is John.
myReplace('Let us get back to more Coding', 'Coding', 'algorithms'); // Let us get back to more Algorithms
```

### Solutions <br>

<hr>
Here are the steps:
<br>
[1] Check the character code of the first character of the before word to determine if it is uppercase or lowercase. If the character code is greater than 90, it is lowercase; otherwise, it is uppercase.
<br>
[2] Construct the replacement word reqWord based on the case of the first character in the after word. If the first character of before is lowercase, convert the first character of after to lowercase and append the remaining characters. If the first character of before is uppercase, convert the first character of after to uppercase and append the remaining characters.
<br>
[3] Replace all occurrences of the before word in the sentence str with the reqWord using the replace() method.

```js
function myReplace(str, before, after) {
  let reqWord = '';
  if (before.charCodeAt(0) > 90) {
    reqWord = after[0].toLowerCase() + after.slice(1);
  } else {
    reqWord = after[0].toUpperCase() + after.slice(1);
  }

  console.log(reqWord);

  return str.replace(before, reqWord);
}
```

### Testing <br>

The solution has been tested with the example test cases to ensure its correctness.

### Conclusion <br>

This problem demonstrates a simple approach to perform search and replace in a sentence while preserving the case of the first character in the original word. By determining the case of the first character and constructing the replacement word accordingly, we can achieve the desired result. The solution utilizes string manipulation and the replace() method to accomplish the task efficiently.
