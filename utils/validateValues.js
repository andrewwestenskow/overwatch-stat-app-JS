export default valuesObj => {
  let result = true;
  for (let key in valuesObj) {
    if (!valuesObj[key]) {
      result = false;
      break;
    }
  }
  return result;
};
