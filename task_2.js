const commonOD = (arrayNumbers) => {
  const OD = [];
  arrayNumbers.forEach(num => {
    for (let i = 2; i <= num; i++) {
      if (num % i === 0) OD.push(i)
    }
  })
  const countOD = {}
  for (const item of OD) {
    countOD[item] = countOD[item] ? countOD[item] + 1 : 1;
  }
  const result = Object.keys(countOD).filter((item) => countOD[item] === arrayNumbers.length);
  return result;
}
