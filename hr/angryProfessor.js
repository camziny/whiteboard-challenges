function angryProfessor(k, a) {
  let onTimeCount = 0;
  for (let i = 0; i <= a.length; i++) {
    if (a[i] <= 0) {
      onTimeCount++;
    }
  }

  if (onTimeCount >= k) {
    return "NO";
  } else {
    return "YES";
  }
}
