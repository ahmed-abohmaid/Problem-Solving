function convertHTML(str) {
  const entities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
  };

  return str
    .split('')
    .map((char) =>
      Object.keys(entities).includes(char) ? entities[char] : char
    )
    .join('');
}

convertHTML('Dolce & Gabbana'); // Dolce &amp; Gabbana
