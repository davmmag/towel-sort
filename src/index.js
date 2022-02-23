
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix === undefined || matrix.length === 0) return [];
  return matrix.reduce((total, amount, index) => {
    if(index % 2 === 0) { return total.concat(...amount);}
    else { return total.concat(...amount.reverse());}
})
}
