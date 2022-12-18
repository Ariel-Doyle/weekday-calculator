import Day from './../src/index.js'

describe('Day', () => {
  test('should return a day of the week that correlates to the index position of the day', () => {
    Day.findDay('December 18, 2022');
    expect(Day.findDay()).toEqual('Sunday');
  });
});