# Cash Register

## Problem Statement <br>

Design a cash register drawer function `checkCashRegister()` that accepts purchase price as the first argument (`price`), payment as the second argument (`cash`), and cash-in-drawer (`cid`) as the third argument.
<br><br>
`cid` is a 2D array listing available currency.
<br><br>
The `checkCashRegister()` function should always return an object with a `status` key and a `change` key.
<br><br>
Return `{status: "INSUFFICIENT_FUNDS", change: []}` if cash-in-drawer is less than the change due, or if you cannot return the exact change.
<br><br>
Return `{status: "CLOSED", change: [...]}` with cash-in-drawer as the value for the key `change` if it is equal to the change due.
<br><br>
Otherwise, return `{status: "OPEN", change: [...]}`, with the change due in coins and bills, sorted in highest to lowest order, as the value of the `change` key.

<br>

| Currency Unit       | Amount             |
| ------------------- | ------------------ |
| Penny               | $0.01 (PENNY)      |
| Nickel              | $0.05 (NICKEL)     |
| Dime                | $0.1 (DIME)        |
| Quarter             | $0.25 (QUARTER)    |
| Dollar              | $1 (ONE)           |
| Five Dollars        | $5 (FIVE)          |
| Ten Dollars         | $10 (TEN)          |
| Twenty Dollars      | $20 (TWENTY)       |
| One-hundred Dollars | $100 (ONE HUNDRED) |

<br><br>

See below for an example of a cash-in-drawer array:

<br><br>

```js
[
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100],
];
```

### Solution <br>

```js
function checkCashRegister(price, cash, cid) {
  const currencyUnits = [
    ['PENNY', 0.01],
    ['NICKEL', 0.05],
    ['DIME', 0.1],
    ['QUARTER', 0.25],
    ['ONE', 1],
    ['FIVE', 5],
    ['TEN', 10],
    ['TWENTY', 20],
    ['ONE HUNDRED', 100],
  ];

  let change = cash - price;
  let changeArr = [];
  let totalChange = 0;

  for (let i = 0; i < cid.length; i++) {
    totalChange += cid[i][1];
  }

  // console.log(totalChange);
  // console.log(change);

  if (totalChange < change) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  } else if (totalChange == change) {
    return { status: 'CLOSED', change: cid };
  }

  let checkForExistingChange = 0;
  for (let i = currencyUnits.length - 1; i >= 0; i--) {
    let currentName = currencyUnits[i][0];
    let currentValue = currencyUnits[i][1];
    let reqValue = 0;

    while (change >= currentValue && cid[i][1] >= currentValue) {
      reqValue += currentValue;
      change -= currentValue;
      cid[i][1] -= currentValue;
      // console.log(change);

      change = change.toFixed(2);
      // console.log(change);
    }

    if (reqValue > 0) {
      changeArr.push([currentName, reqValue]);
      checkForExistingChange += reqValue;
    }
  }

  if (checkForExistingChange > change) {
    return { status: 'OPEN', change: changeArr };
  } else {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }
}
```

### Examples

```js
checkCashRegister(19.5, 20, [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100],
]);
// should return an object.

checkCashRegister(19.5, 20, [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100],
]);
// {status: "OPEN", change: [["QUARTER", 0.5]]}.

checkCashRegister(3.26, 100, [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100],
]);
// {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

checkCashRegister(19.5, 20, [
  ['PENNY', 0.01],
  ['NICKEL', 0],
  ['DIME', 0],
  ['QUARTER', 0],
  ['ONE', 0],
  ['FIVE', 0],
  ['TEN', 0],
  ['TWENTY', 0],
  ['ONE HUNDRED', 0],
]);
// {status: "INSUFFICIENT_FUNDS", change: []}.

checkCashRegister(19.5, 20, [
  ['PENNY', 0.01],
  ['NICKEL', 0],
  ['DIME', 0],
  ['QUARTER', 0],
  ['ONE', 1],
  ['FIVE', 0],
  ['TEN', 0],
  ['TWENTY', 0],
  ['ONE HUNDRED', 0],
]);
// {status: "INSUFFICIENT_FUNDS", change: []}.

checkCashRegister(19.5, 20, [
  ['PENNY', 0.5],
  ['NICKEL', 0],
  ['DIME', 0],
  ['QUARTER', 0],
  ['ONE', 0],
  ['FIVE', 0],
  ['TEN', 0],
  ['TWENTY', 0],
  ['ONE HUNDRED', 0],
]);
// {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
```

### Resource

[freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter)
