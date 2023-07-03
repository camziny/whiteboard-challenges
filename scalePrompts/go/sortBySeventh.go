func sortStringsBy7thCharacter(strings []string) []string {
  // Create a slice of 7th characters.
  seventhCharacters := make([]byte, len(strings))
  for i, s := range strings {
    seventhCharacters[i] = s[6]
  }

  // Sort the slice of 7th characters.
  sort.Slice(seventhCharacters, func(i, j int) bool {
    return seventhCharacters[i] < seventhCharacters[j]
  })

  // Sort the strings by their 7th characters.
  for i, j := range seventhCharacters {
    strings[i] = strings[i][:6] + string(seventhCharacters[j])
  }

  return strings
}
