function days(month,year){
    return new Date(year,month,0).getDate();
}

console.log(days(2, 2018))// ➞ 28
console.log(days(4, 654))// ➞ 30
console.log(days(2, 200))// ➞ 28
console.log(days(2, 1000))// ➞ 28