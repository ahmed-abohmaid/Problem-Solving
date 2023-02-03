function openOrSenior(data) {
  let newData = [];
  data.map((data) => {
    if (data[0] >= 55 && data[1] > 7) {
      newData.push("Senior");
    } else {
      newData.push("Open");
    }
  });
  return newData;
}

openOrSenior();
