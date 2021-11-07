//6 (1_14)
function sum(arr){
  let sum = '';
  let arr1 = arr;
  let check = 1;
  let arr2 = [];
  while(check !== 0){
  	check = 0;
  	arr2 = [];
  	arr1.forEach((item,index) => typeof item === 'object' ? (arr2=arr2.concat(item),check++) : sum+=item+',');
  	arr1 = arr2;
  }
  arr2 =0;
  for(let i=0;i<sum.length;i++){
  	(Number.isNaN(Number(sum[i])) === true ? (sum[i] === '-' ? true : sum = sum.replace(sum[i], '_')) : false)
  }
  sum = sum.split('_')
  sum.forEach((item,index) => Number.isNaN(Number(item)) === false ? arr2+=Number(item) : false)
  return arr2;
}

console.log(sum(["1", "five", "2wenty", "thr33"]))
console.log(sum([["1X2", "t3n"],["1024", "5", "64"]]))
console.log(sum([[["1"], "10v3"], ["738h"], [["s0"], ["1mu4ch3"],"-1s0"]]))
console.log(sum([[["-1"], "-10v-3"], ["738h"], ["1a2v-93jkj"], [["s0"], ["1mu-4ch3"],"-1s0"]]))






//1
function expandedForm(num){
  let i = 10;
  num1 = num;
  let arr = '';
  while(num1 !== 0){
    num1%i !== 0 ? (arr=(num1 % i)+'+'+arr) : false;
    num1 -= num1%i;
    i*=10;
  }
  return arr.substr(0,arr.length-1)
}

console.log(expandedForm(70304))
console.log(expandedForm(1037903))
console.log(expandedForm(802539))





//2
function findBrokenKeys(str_r,str_w){
  let arr = [str_r,str_w]
  let i=0;
  while(arr[0].length!==i){
    arr[0].substr(i,1) === arr[1].substr(i,1) ? 
    true : 
    (arr[3] === undefined ? 
    (arr[3]=new Array,arr[3].push(arr[0].substr(i,1))) :
    (arr[3].includes(arr[0].substr(i,1)) ? true : arr[3].push(arr[0].substr(i,1))))
    i++
  }
  return arr[3]
}

console.log(findBrokenKeys("happy birthday", "hawwy birthday"))
console.log(findBrokenKeys("starry night", "starrq light"))
console.log(findBrokenKeys("beethoven", "affthoif5"))
console.log(findBrokenKeys("mozart", "aiwgvx"))
console.log(findBrokenKeys("5678", "4678"))
console.log(findBrokenKeys("!!??$$", "$$!!??"))





//3
function getFrame(num1,num2,thing){
  let arr;
  num1>2 && num2>2 
  ? arr = 
  Array.from(Array(num2), (_, index) => 
    (index>0 && index<num2-1 ? index = Array.from(Array(num1), (_, index) => (index===0 || index===num1-1 ? index=thing : index=' ') ) : index=new Array(num1).fill(thing) ) )
  : arr = 'invalid';
  (typeof arr === 'object' ? (arr.forEach((item,index) => arr[index] = arr[index].join(' ')),arr.forEach((item,index) => arr.push(new Array(1).fill(item)) ),arr = arr.slice(num2)) : false)
  return arr
}

console.log(getFrame(4, 5, "#"));
console.log(getFrame(10, 3, "*"));
console.log(getFrame(2, 5, "0"));
console.log(getFrame(2, 5, "0"))
console.log(getFrame(1, 6, "["))
console.log(getFrame(5, 4, "z"))
console.log(getFrame(3, 4, "A"))
console.log(getFrame(10, 2, "`"))
console.log(getFrame(1, 6, "r"))





//4
function majorSum(arr){
  let sum = [0,0,0];
  arr.forEach((item,index) =>  item === 0 ? sum[2]++ : (item > 0 ? sum[0]+=item : sum[1]+=item) )
  Math.max(sum[0],sum[1]*-1,sum[2]) === sum[1]*-1 ? sum = sum[1] : sum = Math.max(sum[0],sum[2])
  return sum
}

console.log(majorSum([1, 2, 3, 4, 0, 0, -3, -2]))
console.log(majorSum([-4, -8, -12, -3, 4, 7, 1, 3, 0, 0, 0, 0]))
console.log(majorSum([0, 0, 0, 0, 0, 1, 2, -3]))
console.log(majorSum([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))
console.log(majorSum([0]))
console.log(majorSum([1]))
console.log(majorSum([-1]))
console.log(majorSum([10, -12, 4, 0, -3, -7, -91, 45]))
console.log(majorSum([0, 1, 0, 1, 0, 1, 0, 1, 0]))
console.log(majorSum([-1, -1, -1, -1, -1, 1, 1, 1, 1, 0, 0, 0, 0]))
console.log(majorSum([1, 2, 3, 4, -5, -4, -3, -2, -1, 0]))
console.log(majorSum([0, 1, -2]))
console.log(majorSum([2, 0, -1]))
console.log(majorSum([2, 0, 0, 0, -1]))
console.log(majorSum([2, 0, 0, 0, 0, -1]))





//5
function nextPrime(num){
  let i = 2;
  let j = num;
  let ternary = true;
  while(ternary){
    i++
    j % i === 0 ? (j++,i=2) : false;
    j >= num && j-1 === i ? ternary = false : false; 
  }
  return j
}

console.log(nextPrime(12))
console.log(nextPrime(24))
console.log(nextPrime(11))
console.log(nextPrime(13))
console.log(nextPrime(14))
console.log(nextPrime(33))





//6
function returnUnique(arr){
  let arr1 = arr;
  let sum = [];
  arr1.forEach((item,index) => (sum.push(item),delete arr1[index],(arr1.includes(sum[sum.length - 1]) ? (arr1[index]=sum[sum.length - 1],sum.pop()) : arr1[index]=sum[sum.length - 1])) )
  return sum
}

console.log(returnUnique([1, 9, 8, 8, 7, 6, 1, 6]))
console.log(returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1]))
console.log(returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]))
console.log(returnUnique([4, 3, 9, 9, 1, 1, 6, 1, 6, 2, 4]))
console.log(returnUnique([44, 44, 44, 2, 55, 55, 55, 0, 66, 66, 66]))
console.log(returnUnique([-9, -9, -9, 7, -9, -9, 1]))
console.log(returnUnique([2, 2, -19, 2, 7, 7, 4, 9, 9, 0, 0, 3, 3, 3]))





//7
function safecracker(num,arr){
  let num1 = num;
  let i = -1;
  let position = [0,0,0]
  arr.forEach((item,index) => (num1 +=(item*i),i=i*-1,num1 > 100 ? num1-=100 : false,num1 < 0 ? num1+=100 : false,position[index]=num1) )
  return position
}

console.log(safecracker(96, [54, 48, 77]))
console.log(safecracker(43, [51, 38, 46]))
console.log(safecracker(4, [69, 88, 55]))
console.log(safecracker(99, [87, 61, 91]))
console.log(safecracker(52, [6, 81, 49]))
console.log(safecracker(56, [70, 88, 70]))
console.log(safecracker(85, [25, 24, 73]))