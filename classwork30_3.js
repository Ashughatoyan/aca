let arr = [3,0,2];
const perrin = (num) => {
    if(num <3){return arr[num]}
    return perrin(num-2) + perrin(num-3)
}

console.log(perrin(1))// ➞ 0
console.log(perrin(8))// ➞ 10
console.log(perrin(26))// ➞ 1497