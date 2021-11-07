function twins(arr){
  let accumulator =  0;
  let indexf;
  arr.forEach(item => accumulator+=item)
  accumulator /= 2;
  arr.forEach((item,index) => {accumulator-=item;accumulator===0 ? indexf=index+1:false})
  return indexf
}

console.log(twins([10, 20, 30, 5, 40, 50, 40, 15]))
console.log(twins([1, 2, 3, 4, 5, 5]))
console.log(twins([3, 3]))