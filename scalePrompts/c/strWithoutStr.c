int strstr_without_string_functions(char *haystack, char *needle) {
  int i, j;

  // Check if needle is empty.
  if (!needle[0]) {
    return 0;
  }

  // Iterate through haystack.
  for (i = 0; haystack[i]; i++) {
    // Check if the current character of haystack is equal to the first character of needle.
    if (haystack[i] != needle[0]) {
      continue;
    }

    // Iterate through needle, comparing each character to the corresponding character in haystack.
    for (j = 1; needle[j]; j++) {
      if (haystack[i + j] != needle[j]) {
        break;
      }
    }

    // If we reach the end of needle without finding any mismatches, then we have found a match.
    if (!needle[j]) {
      return i;
    }
  }

  // No match found.
  return -1;
}
