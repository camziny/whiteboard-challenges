// There is a collection of input strings and a collection of query strings.
// For each query string, determine how many times it occurs in the list of input strings.
// Return an array of the results.

function matchingStrings(strings, queries) {
  const stack = {};
  for (const string of strings) stack[string] = (stack[string] || 0) + 1;
  return queries.map((query) => stack[query] || 0);
}
