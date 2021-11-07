function strMatchBy2char(a,b){
  let i = 0;
  let sum = 0;
  while(i < Math.min(a.length-2,b.length-2)){
    a[i] === b[i] && a[i+1] === a[i+1] ? sum++ : false;
    i++
  }
  return sum
}

console.log(strMatchBy2char("yytaazz", "yyjaaz"))
console.log(strMatchBy2char("edabit", "ed"))
console.log(strMatchBy2char("", ""))