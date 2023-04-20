function sumDigits(number) {
  let sum = 0;
  while (number > 0) {
    let curDigit = number % 10;
    sum += curDigit;
    number = number / 10;
    number = parseInt(number);
  }
  console.log(sum);
}
sumDigits(245678);
