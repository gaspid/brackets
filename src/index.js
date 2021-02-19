module.exports = function check(str, bracketsConfig) {
  const bracketPairs = bracketsConfig.map(function (val) {
      return val.join("");
  });

  let reducedStr = str;
  let prevStr;
  do{
      prevStr = reducedStr;
      bracketPairs.forEach(function (val) {
          reducedStr = reducedStr.replace(val,"");
      });
  } while (reducedStr.length < prevStr.length);

  return reducedStr.length === 0;
}