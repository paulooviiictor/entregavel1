
function mdc(num1, num2) {
  var resto;

  do {
    resto = num1 % num2;

    num1 = num2;
    num2 = resto;

    console.log(num1);

  } while (resto != 0);
}

mdc(20, 24);
