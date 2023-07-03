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

console.log(
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
  ])
);
