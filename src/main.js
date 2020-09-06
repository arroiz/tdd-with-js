export const sum = (numberA, numberB) => numberA + numberB;
export const sub = (numberA, numberB) => numberA - numberB;
export const mult = (numberA, numberB) => numberA * numberB;
export const div = (numberA, numberB) => {
  if (numberB === 0) {
    return 'Não é possivel divisão por zero!';
  }
  return numberA / numberB;
};
