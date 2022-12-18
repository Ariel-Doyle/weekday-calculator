/*function findDay(x) {
  let date = new Date(x);
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayObject = date.getDay();
  if (date.getDay() + 1) {
    return days[date.getDay()];
  } else {
    return "This is not a valid date.";
  }
}*/

export class Day {
  constructor() {
  }

  static days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  function findDay(x) {
    /*let newDate = new Date(x);
    const dayInt = newDate.getDay();
    if (dayInt + 1) {
      return days[dayInt];
    } else {
      return "This is not a valid date.";
    }*/
  }
}