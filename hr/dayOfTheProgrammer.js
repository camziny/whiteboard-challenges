function dayOfProgrammer(year) {
  let date;
  if (year < 1918) {
    date = year % 4 == 0 ? "12.09." + year : "13.09." + year;
  } else if (year > 1918) {
    date =
      year % 400 == 0 || (year % 4 == 0 && year % 100 !== 0)
        ? "12.09." + year
        : "13.09." + year;
  } else {
    date = "26.09." + year;
  }
  return date;
}
