export default class Day {
  constructor() {
  }

  static DaysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  findDay(x) {
    let newDate = new Date(x);
    const dayInt = newDate.getDay();
    if (dayInt + 1) {
      return daysOfTheWeek[dayInt];
    } else {
      return "This is not a valid date.";
    }
  }
}