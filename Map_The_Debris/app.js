function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  const orbitalPeriodFunc = (r, GM) => {
    return 2 * Math.PI * Math.sqrt(Math.pow(r, 3) / GM);
  };

  let newArr = [];
  let orbitalPeriod;

  arr.forEach((obj) => {
    orbitalPeriod = Math.round(orbitalPeriodFunc(earthRadius + obj.avgAlt, GM));
    newArr.push({ name: obj.name, orbitalPeriod });
  });

  // console.log(newArr);
  return newArr;
}

orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]);
