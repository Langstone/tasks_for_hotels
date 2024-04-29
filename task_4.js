function consoleMultiply (num) {
  const numbers = {};
  for (let i = 1; i <= num; i++) {
    numbers[i] = {};
    for (let j = 1; j <= num; j++) {
      numbers[i][j] = i * j 
    }
  }
  console.table(numbers);
}
