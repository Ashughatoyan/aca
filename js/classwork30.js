const perrin = (num) => {
    if(num === 0){return 3}
    else if(num === 1){return 0}
    else if(num === 2){return 2}
    return perrin(num-2) + perrin(num-3)
}

console.log(perrin(1))// ➞ 0
console.log(perrin(8))// ➞ 10
console.log(perrin(26))// ➞ 1497