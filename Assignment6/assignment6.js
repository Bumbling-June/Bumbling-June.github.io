// Sports Calculator Function//
function WinnerWinner(){
  let n1=80, n2=82, n3=100;
  let k1=80, k2=90, k3=106;
  let nAverage=(n1 + n2 + n3)/3, kAverage=(k1 + k2 + k3)/3;
  let announcement = "Nets scores: "+n1+", "+n2+", "+n3+".\nKnicks scores: "+k1+", "+k2+", "+k3+".";

  if (nAverage > kAverage) {
    announcement= announcement +"\nNets Wins!";
  } else if (kAverage > nAverage) {
    announcement= announcement+"\nMets Wins!";
  } else if (kAverage == nAverage && kAverage>=100 && nAverage>=100) {
    announcement= announcement+"\nDraw!";
  } else {
    announcement= announcement +"\n No trophy has been won";
  }
  return announcement;
}
console.log(WinnerWinner());


//Tip Calculator Function//

function TipCalculator(){
  let bill=275;
  let normtip =.15;
  let difftip =.20;
  let total = 0;
  let tip = 0;

  switch (bill) {
    case bill<=30 && bill>=100:
      tip=bill*normtip;
      total=bill+tip;
      break;
    default:
      tip=bill*difftip;
      total=bill+tip;

    return "The bill was $"+ bill +", the tip was $"+ tip +", the total is $"+ total;
  }
}
console.log(TipCalculator());


//Temperature Converter//

  //... C to F
  CovertCelsiusToFahrenheit = (cel) => {

    let fahCalc = (cel * 1.8)+ 32;
    return cel + '°C is ' + fahCalc +'°F';
  }
  console.log(CovertCelsiusToFahrenheit(7));

  //...F to C
  CovertFahrenheitToCelsius = (fah) => {

    let celCalc = (fah - 32) * .5556;
    return fah + '°F is ' + celCalc +'°C';
  }
  console.log(CovertFahrenheitToCelsius(32));
