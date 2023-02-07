function toCamelCase(str){
  return str ? str.split(/-|_/).map((el, i) => (i !== 0 ? el[0].toUpperCase() : el[0]) + el.slice(1)).join("") : "";
}