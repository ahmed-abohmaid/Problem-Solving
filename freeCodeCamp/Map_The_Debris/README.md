# Map the Debris

## Problem Statement <br>

According to Kepler's Third Law, the orbital period **T** of two point masses orbiting each other in a circular or elliptic orbit is given by the formula:
<br>

T = 2π \* √(a^3 / μ)

<br>

Where:

- **T**: Orbital period in seconds
- **a**: Orbit's semi-major axis
- **μ**: Standard gravitational parameter
- **G**: Gravitational constant
- **M**: Mass of the more massive body

<br>

For this particular problem, we are considering objects orbiting the Earth.

<br>

Given an array of objects in the format `{name: 'name', avgAlt: avgAlt}`, this program calculates the orbital period for each object and returns a new array with the orbital periods rounded to the nearest whole number (in seconds).

<br>

To perform the calculations, the following constants are used:

- Radius of the Earth: 6367.4447 kilometers
- GM value of Earth: 398600.4418 km^3s^-2

<br>

The program takes the average altitude of each object and adds it to the Earth's radius to obtain the semi-major axis. Then, it applies the Kepler's Third Law formula to calculate the orbital period in seconds.

<br>

To use the program, you can provide an array of objects and call the `orbital_periods` function, which returns an array of objects with the orbital periods.

### Solution

```js
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
```

### Examples

```js
orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]); //  [{name: "sputnik", orbitalPeriod: 86400}].

orbitalPeriod([
  { name: 'iss', avgAlt: 413.6 },
  { name: 'hubble', avgAlt: 556.7 },
  { name: 'moon', avgAlt: 378632.553 },
]); //  [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]
```
