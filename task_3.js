const getPrimeNumbers = (a, b) => {
  const numbers = [];
  const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  for (let i = a; i <= b; i ++) {
    if (isPrime(i)) numbers.push(i);
  }
}
