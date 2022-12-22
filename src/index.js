export default function findDay(x) {
  /*let date = new Date(x);
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayObject = date.getDay();
  if (date.getDay() + 1) {
    return days[date.getDay()];
  } else {
    return "This is not a valid date.";
  }*/
}

export class PlanetaryAge {
  static PlanetsAndRotations = ([['Mercury', .24], ['Venus', .62], ['Earth', 1], ['Mars', 1.88], ['Jupiter', 11.86], ['Saturn', 29.46], ['Uranus', 84.01], ['Neptune', 164.79]]);

  constructor(age) {
    this.age = age;
  }

  getPlantaryAge(i, age) {
    return (age / PlanetaryAge.PlanetsAndRotations[i][1]);
  }

  loopThroughAllPlanets(age) {
    let value = [];
      for(i = 0; i < PlanetsAndRotations.length; i++) {    
        value.push(getPlanetaryAge(i, age));
      }
    return value;
  }

  messageForPlanetaryAge() {
    let message = ``;
    let planetaryAgeArray = loopThroughAllPlanets(age);
    for(i = 0; i< planetaryAgeArray.length; i++) {
      message + `Your age on ${PlanetaryAge.PlanetsAndRotations[i][0]} is ${planetaryAgeArray[i]}!\n`;
    }
  }

  messageForPastAndFutureBirthdays(age, newAge) {    
    let years = age - newAge;
    let yearsMessage = ``;
    let birthdayMessage = ``;
    let planetaryAgeArray = [];

    if (years > 0) {
      birthdayMessage = `have passed`;
    } else if (years <= 0) {
      birthdayMessage = 'have yet to pass';
      years *= (-1);
    } 

    planetaryAgeArray = loopThroughAllPlanets(years);

    for(i = 0; i < planetaryAgeArray.length; i++) {
      yearsMessage += `${planetaryAgeArray[i]} years ${birthdayMessage} on ${PlanetaryAge.PlanetsAndRotations[i][0]}\n` 
    } 
    
    return yearsMessage;
  }
}