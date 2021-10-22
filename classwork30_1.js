//1
function rowSum(num){
    let start=0;
    let sum=0;
    for(let i=1;i<num;i++){
        start += i;
    }
    start+=1
    for(let i=0;i<num;i++){
        sum+=start
        start+=1
    }
    return sum
}

console.log(rowSum(1))// ➞ 1
console.log(rowSum(2))// ➞ 5
console.log(rowSum(4))// ➞ 34
console.log(rowSum(5))// ➞ 65






//2
function shiftToLeft(integer,recursivedegry){
    integer*=2
    recursivedegry-=1
    if(recursivedegry===0){return integer}
    integer = shiftToLeft(integer,recursivedegry);
    return integer
}


console.log(shiftToLeft(5, 2))// ➞ 20
console.log(shiftToLeft(10, 3))// ➞ 80
console.log(shiftToLeft(-32, 2))// ➞ -128
console.log(shiftToLeft(-6, 5))// ➞ -192
console.log(shiftToLeft(12, 4))// ➞ 192
console.log(shiftToLeft(46, 6))// ➞ 2944





//3
function deepCount(arr){
    let sum=arr.length;
    arr.forEach(item => Array.isArray(item) ? sum += deepCount(item):false)
    return sum
}

console.log(deepCount([1, 2, 3]))// ➞ 3
console.log(deepCount([[1], [2], [3]]))// ➞ 6
console.log(deepCount(["x", "y", ["z"]]))// ➞ 4
console.log(deepCount(["a", "b", ["c", "d", ["e"]]]))// ➞ 7





//4
let add_ly = (string_ly) => {return string_ly+'ly'}
let add_less = (string_ly) => {return string_ly+'less'}
let add_ing = (string_ly) => {return string_ly+'ing'}


console.log(add_ly("hopeless"))// "hopelessly"
console.log(add_ly("total"))// "totally"

console.log(add_less("fear"))// "fearless"
console.log(add_less("ruth"))// "ruthless"

console.log(add_ing("cheer"))// "cheering"
console.log(add_ing("book"))// "booking"





//5
function reverseImage(arr){
    return arr.map(item1 => item1.map(item2 => item2 === 0 ? item2 = 1 : item2 = 0) )
}

console.log(reverseImage([
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1]
]))

console.log(reverseImage([
  [1, 1, 1],
  [0, 0, 0]
]))

console.log(reverseImage([
  [1, 0, 0],
  [1, 0, 0]
]))





//6
let magic = {
    replace:(strintoreaplace,forfind,forreaplace) => {return strintoreaplace.replace(forfind,forreaplace)},
    length : (stringtogetlength) => {return stringtogetlength.length},
    trim : (stringtotrim) => {return stringtotrim.trim()},
    normalize : (stringtonormalize,fomr_type) => {return stringtonormalize.normalize(fomr_type)},
    slice : (arraytoslice,from,to) => {return arraytoslice.slice(from,to)},
}

console.log(magic.replace("azerty", "a", "A"))// ➞ "Azerty"
console.log(magic.length("hello word"))// ➞ 10
console.log(magic.trim("  javascript is awesome  "))// ➞ "javascript is awesome"
console.log(magic.normalize("éèê", "NFD"))// ➞ e ́  e ̀  e ̂
console.log(magic.slice([1, 2, 3, 4, 5], 2, 4))// ➞ [ 3, 4 ]