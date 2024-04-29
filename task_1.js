const getEnding = (num) => {
  const endings = {
    0: 'ов',
    1: '',
    2: 'а',
    3: 'а',
    4: 'а',
    5: 'ов',
    6: 'ов',
    7: 'ов',
    8: 'ов',
    9: 'ов',
  };
  return num >= 5 && num <= 20 ? `${num} компьютеров` : `${num} компьютер${endings[num % 10]}`;
};
