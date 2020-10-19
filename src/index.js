module.exports = function reverse (n) {
  let arr =  n.toString().split('');
  
  if (arr.indexOf('-') === 0) {
    arr.splice(0, 1);
  };
  
  if (arr.lastIndexOf('0') === arr.length - 1) {
    arr.splice(arr.length - 1, 1);
  }

  return +arr.reverse().join('');
}
