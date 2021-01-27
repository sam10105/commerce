import rangeMap from '../range-map'

describe('Range Map', () => {
  it('should return an array of two items', () => {
    const arr = rangeMap(2, (i) => i + 1)

    expect(arr).toEqual([1, 2])
  })
})
