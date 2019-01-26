export const clamp = (value, lower, upper) => {
  if (value < lower) {
    return lower;
  } else if (value > upper) {
    return upper;
  }
  return value;
};
