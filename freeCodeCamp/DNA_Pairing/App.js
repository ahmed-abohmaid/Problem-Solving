function pairElement(str) {
  let DNAObj = { A: ['A', 'T'], T: ['T', 'A'], G: ['G', 'C'], C: ['C', 'G'] };
  let arr = [];

  str.split('').map((char) => arr.push(DNAObj[char]));

  console.log(arr);
  return arr;
}

pairElement('GCG'); // [ [ 'G', 'C' ], [ 'C', 'G' ], [ 'G', 'C' ] ]
