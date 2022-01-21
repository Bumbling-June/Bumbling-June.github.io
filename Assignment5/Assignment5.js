// The Temperature Converter
let celTemp=-7, fahTemp=32;
let celCalc=(fahTemp - 32) * .5556;
let fahCalc=(celTemp * 1.8)+ 32;
console.log(celTemp + '°C is ' + fahCalc +'°F');
console.log(fahTemp + '°F is ' + celCalc +'°C');

// BMI Calculator
let johnBMI=28.3, lucasBMI=23.9;
let johnBMIHigher=false, lucasBMIHigher=false;

if (johnBMI<lucasBMI) {
  lucasBMIHigher=true;
  console.log("Lucas's BMI is Higer than John's BMI!" );
  console.log(`Lucas's BMI (${lucasBMI}) is Higer than John's BMI (${johnBMI}), that is ${lucasBMIHigher}` );
} else {
  johnBMIHigher=true;
  console.log("John's BMI is Higer than Lucas's BMI!");
  console.log(`John's BMI (${johnBMI}) is Higer than Lucas's BMI (${lucasBMI}), that is ${johnBMIHigher}` );
}

// UserPrompt
let answer = prompt("Guess the correct number from 1-10. There are two correct numbers.");

if(isNaN(answer)){
  console.log("Please enter a number");
}
else if (answer == 10) {
  console.log("You win 10 points");
}
else if (answer == 8) {
  console.log("You win 8 points");
}else {
  console.log("Wrong number");
}
