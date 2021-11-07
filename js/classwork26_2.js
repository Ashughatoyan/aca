function palindromicDate(date){
    let dateget = new Date(date)
    let polindrom = new Date(date).getYear()+1900;
    return dateget.getMonth()+1 === dateget.getDate() && polindrom.toString().substr(0,2) === polindrom.toString().substr(2,2)
}

console.log(palindromicDate("02/02/2020"))// ➞ true
console.log(palindromicDate("11/12/2019"))// ➞ false
console.log(palindromicDate("11/02/2011"))// ➞ false
console.log(palindromicDate("06/05/3133"))// false
console.log(palindromicDate("12/12/2121"))// true
console.log(palindromicDate("09/09/9090"))// true