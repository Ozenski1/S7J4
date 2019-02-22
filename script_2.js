function findFactorial() {
  var num = prompt("Choisis un chiffre positif")
  var fact = 1;

  for (i = 1; i <= num; i++) {
    fact = fact * i;
  }
  console.log(fact);
}

findFactorial();