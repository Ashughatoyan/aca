//1
function twentyFiveOnOne(arr){
  let great = [0,0,0];
  arr.forEach((item,index) => (great[0] < item.price ? (great[0]=item.price,great[1]=index): false))
  arr[great[1]].quantity -= 1;
  arr.forEach(item => great[2]+=item.quantity*item.price)
  return (great[0] - great[0]/4 + great[2]).toFixed(2)
} 

console.log(twentyFiveOnOne([
  { name: "Iphone 20x", quantity: 1, price: 1350 },
  { name: "Samsung x30", quantity: 1, price: 1225 },
  { name: "Nokia 9250", quantity: 1, price: 800 },
  { name: "Tesla Model Y", quantity: 1, price: 72999 }
]))

console.log(twentyFiveOnOne([
  { name: "jogging pants", quantity: 1, price: 29.99 },
  { name: "tennis socks", quantity: 2, price: 5.99 },
  { name: "sweat shirt", quantity: 1, price: 59.99 }
]))





//2
function itemsPurchased(obj,wallet){
  let arr = [];
  for (const [key, value] of Object.entries(obj)) {
      Number(`${value}`.slice(1).replace(',', '')) <= Number(wallet.slice(1)) ? arr.push(`${key}`) : false
  }
  return arr[0]!==undefined ? arr.sort() : 'Nothing'
}

console.log(itemsPurchased({
  Water: "$1",
  Bread: "$3",
  TV: "$1,000",
  Fertilizer: "$20"
}, "$300"))

console.log(itemsPurchased({
  Apple: "$4",
  Honey: "$3",
  Fan: "$14",
  Bananas: "$4",
  Pan: "$100",
  Spoon: "$2"
  }, "$100"))

console.log(itemsPurchased({
  Phone: "$999",
  Speakers: "$300",
  Laptop: "$5,000",
  PC: "$1200"},
"$1"))




//3
function whoPassed(obj){
  let who_passed =[];

  for (const [key] of Object.entries(obj)){
    who_passed.push(`${key}`,true);
    for(let i=0;i<obj[`${key}`].length;i++){
      (obj[`${key}`][i].slice(0 ,obj[`${key}`][i].indexOf('/')) === 
        obj[`${key}`][i].slice(obj[`${key}`][i].indexOf('/')+1) && true ? true : who_passed[who_passed.length-1]=false);
      (who_passed[who_passed.length-1] === false ? (i=obj[`${key}`].length-1,who_passed.length = who_passed.length-2) : false);
      (who_passed[who_passed.length-1] === true && i === obj[`${key}`].length-1 ? who_passed.pop() : false);
    }
  }
  return who_passed.sort();
}

console.log(whoPassed({
  "John" : ["5/5", "50/50", "10/10", "10/10"],
  "Sarah" : ["4/8", "50/57", "7/10", "10/18"],
  "Adam" : ["8/10", "22/25", "3/5", "5/5"],
  "Barry" : ["3/3", "20/20"]
}))

console.log(whoPassed({
  "Zara" : ["10/10"],
  "Kris" : ["30/30"],
  "Charlie" : ["100/100"],
  "Alex" : ["1/1"]
}))

console.log(whoPassed({
  "Zach" : ["10/10", "2/4"],
  "Fred" : ["7/9", "2/3"]
}))





//4
function pizzaPoints(obj,N,Y){
  let quantity;
  let who_can = [];
  for(const [key] of Object.entries(customersObj)){
    quantity = 0;
    for(let i=0;i<obj[`${key}`].length;i++){
      (obj[`${key}`][i] >= Y ? quantity+=1 : false);
      (quantity === N ? (who_can.push([`${key}`]),i=obj[`${key}`].length-1) : false)
    }
  }
  return who_can
}

 let customersObj = {
    "Batman": [22, 30, 11, 17, 15, 52, 27, 12],
    "Spider-Man": [5, 17, 30, 33, 40, 22, 26, 10, 11, 45]
  }

console.log(pizzaPoints(customersObj, 5, 20))

console.log(pizzaPoints(customersObj, 3, 10))

console.log(pizzaPoints(customersObj, 5, 100))





//5
function champions(arr){
    let arrinfo = [];
    for(let i=0;i<arr.length;i++){
      let Total_Points = 3 * arr[i].wins + 0 * arr[i].loss + 1 * arr[i].draws;
      let Goal_Difference = arr[i].scored - arr[i].conceded;
      arrinfo.push([Total_Points,Goal_Difference,arr[i].name])
    }
    let who_won = [0,0,0];
    for(let i=0;i<arrinfo.length;i++){
      (who_won[0]<arrinfo[i][0] ? who_won = arrinfo[i] : false);
      (who_won[0]===arrinfo[i][0] ? (who_won[1]>arrinfo[i][1] ? who_won = arrinfo[i] : false) : false)   
}
    return who_won[2]
}


console.log(champions([
  {
    name: "Manchester United",
    wins: 30,
    loss: 3,
    draws: 5,
    scored: 88,
    conceded: 20,
  },
  {
    name: "Arsenal",
    wins: 24,
    loss: 6,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
  {
    name: "Chelsea",
    wins: 22,
    loss: 8,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
  ]))





  //6
function sum(arr){
  let arr1 = arr.unshift(0);
  arr1 = arr.toString();
  let arrnegative =[0];
  while(arr1.indexOf('-') !== -1){
    arrnegative.push(arr1.slice(arr1.indexOf('-')+1, arr1.length))
    arr1 = arr1.replace(('-'), 'j');
  };
  arr1 = arr1.split( /\D+/g);
  arr1.forEach((item,index) => arr1[index]=parseInt(arr1[index]));
  arr1 = arr1.reduce((accumulator, currentValue) => accumulator += currentValue);
  arrnegative.forEach((item,index) => arrnegative[index] = parseInt(item));
  arrnegative = arrnegative.reduce((accumulator, currentValue) => accumulator += currentValue);
  return arr1-arrnegative*2;
}

console.log(sum(["1", "five", "2wenty", "thr33"]))

console.log(sum([["1X2", "t3n"],["1024", "5", "64"]]))

console.log(sum([[["1"], "10v3"], ["738h"], [["s0"], ["1mu4ch3"],"-1s0"]]))

console.log(sum([[["-1"], "-10v-3"], ["738h"], ["1a2v-93jkj"], [["s0"], ["1mu-4ch3"],"-1s0"]]))





//7
function sumsUp(arr){
  let sum_up = [];
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
      if(i === j){continue;}
      else if(arr[i]+arr[j] === 8){sum_up.push(arr[i]),sum_up.push(arr[j])}
    }
  }
  sum_up.length /=2; 
  return sum_up;
}

console.log(sumsUp([1, 2, 3, 4, 5]))

console.log(sumsUp([1, 2, 3, 7, 9]))

console.log(sumsUp([10, 9, 7, 2, 8]))

