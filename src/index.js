module.exports = function reverse (n) {
    let arr = n.toString().split('').reverse();
  
    if (arr[0] == '0') {
      arr = arr.slice(1);
    }
    
    if (arr[arr.length - 1] == '-') {
      arr = arr.slice(0, - 1);
    }
    return arr.join('');
}
