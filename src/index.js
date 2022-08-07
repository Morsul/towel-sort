
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix){
    return [];
  }
  let tempArray = []
  matrix.forEach((element, index)=> {
    tempArray = tempArray.concat(index%2 ? element.reverse() : element)
  });
  return tempArray;
}
