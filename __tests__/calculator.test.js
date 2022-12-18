import findDay from './../src/index.js'

describe('findDay()', () => {
  test('should return a day of the week that correlates to the index position of the day', () => {
    expect(findDay('December 18, 2022')).toEqual('Sunday');
  });
});