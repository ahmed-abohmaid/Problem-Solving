# Convert HTML Entities

## Problem Statement <br>

Convert the characters `&`,`<`, `>`,`"` (double quote), and `'` (apostrophe), in a string to their corresponding HTML entities.

### Solution

```js
function uniteUnique(...arr) {
  let newArr = [];
  let reqArr = [];
  arr.map((ele) => newArr.push(...ele));
  newArr.map((num) => {
    if (!reqArr.includes(num)) {
      reqArr.push(num);
    }
  });
  console.log(newArr);
  console.log(reqArr);
  return reqArr;
}
```

### Example

```js
convertHTML('Dolce & Gabbana'); // Dolce &amp; Gabbana.
convertHTML('Hamburgers < Pizza < Tacos'); // Hamburgers &lt; Pizza &lt; Tacos.
convertHTML('Sixty > twelve'); // Sixty &gt; twelve.
convertHTML('Stuff in "quotation marks"'); // Stuff in &quot;quotation marks&quot;.
convertHTML("Schindler's List"); // Schindler&apos;s List.
convertHTML('<>'); // &lt;&gt;.
convertHTML('abc'); // abc
```
