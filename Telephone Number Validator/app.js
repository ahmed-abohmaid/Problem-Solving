function telephoneCheck(str) {
  if (
    /^1? ?[0-9]{3}-?[0-9]{3}-?[0-9]{4}$|^1? ?[0-9]{3} [0-9]{3} [0-9]{4}$|^1? ?\([0-9]{3}\) ?[0-9]{3}-[0-9]{4}$/.test(
      str
    )
  ) {
    return true;
  }

  return false;
}

telephoneCheck('(555)555-5555'); // true
