// function to covert Celsius
// to Fahrenheit
function cToF(celsius) {
  const cTemp = celsius;
  const cToFahr = cTemp * 9 / 5 + 32;
  const message = `${cTemp}\xB0C is ${cToFahr} \xB0F.`;
  console.log(message);
}

// driver code to test the function
cToF(60);