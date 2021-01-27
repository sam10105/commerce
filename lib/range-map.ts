const rangeMap = (n: number, fn: (index: number) => any) =>
  [...Array(n).keys()].map(fn)

export default rangeMap
