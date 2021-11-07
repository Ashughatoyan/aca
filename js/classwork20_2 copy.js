function sumFractions(arr){
  let commondenomi = 1;
  let accumulator=0;
  arr.forEach(item => commondenomi%item !== 0 ? commondenomi*item : false)
  arr.forEach((item,array,index) => accumulator+=item[0]*commondenomi/item[1])
  return Math.round(accumulator)
}

console.log(sumFractions([[18, 13], [4, 5]]))
console.log(sumFractions([[36, 4], [22, 60]]))
console.log(sumFractions([[11, 2], [3, 4], [5, 4], [21, 11], [12, 6]]))