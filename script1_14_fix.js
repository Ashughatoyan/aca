function sum(arr){
  let arr1 = arr.toString();
  let sum = 0;
  for(let i=0;i<arr1.length;i++){
  	(Number.isNaN(Number(arr1[i])) === true ? (arr1[i] === '-' ? true : arr1 = arr1.replace(arr1[i], '_')) : false)
  }
  arr1 = arr1.split('_')
  arr1.forEach((item,index) => Number.isNaN(Number(item)) === false ? sum+=Number(item) : false)
  return sum
}

console.log(sum(["1", "five", "2wenty", "thr33"]))

console.log(sum([["1X2", "t3n"],["1024", "5", "64"]]))

console.log(sum([[["1"], "10v3"], ["738h"], [["s0"], ["1mu4ch3"],"-1s0"]]))

console.log(sum([[["-1"], "-10v-3"], ["738h"], ["1a2v-93jkj"], [["s0"], ["1mu-4ch3"],"-1s0"]]))