func memoize(f func(x int) int) func(x int) int {
  table := make(map[int]int)
  return func(x int) int {
    v, ok := table[x]
    if ok {
      return v
    }
    v = f(x)
    table[x] = v
    return v
  }
}

func memoRec2(fOpenRec func(f func(x int) int, x int) int) func(x int) int {
  // using mutation we can put configurable function here
  f := func(x int) int {
    assert(false)
  }
  fRecMemo := memoize(func(x int) int {
    return fOpenRec(f, x)
  })
  f = fRecMemo
  return fRecMemo
}
