//1
function mirrorCipher(message,key){

    let alphabet = new Array(26).fill('').map((element,index) => String.fromCodePoint(97+index));

    key === undefined ? true : alphabet = key;
    
    return message.toLowerCase().split('').map((item,array,index) => 
        alphabet.indexOf(item) !== -1 ? 
        array[index]=alphabet[alphabet.length-1-alphabet.indexOf(item)] : item
    ).join('')

}

console.log(mirrorCipher("Mubashir Hassan", "edabitisamazing"))
console.log(mirrorCipher("Matt MacPherson"))
console.log(mirrorCipher("Airforce is best", "pilot"))
console.log(mirrorCipher("gsrh rh z hvxivg"))
console.log(mirrorCipher("hello", "abcdefgh"))
console.log(mirrorCipher("goodbye", ""))
console.log(mirrorCipher("this is a secret", " *"))





//2
function isCircular(arr){
    let arr1 = arr.toString();
    arr.forEach(item => {if(item[0] === Number(arr1[arr1.length-1])){arr1=true}})
    return arr1 === true ? arr1 : false
}

console.log(isCircular([[9, 8], [6, 9, 1], [8, 4, 2], [1, 9], [2, 1, 6]]))
console.log(isCircular([[1, 1], [1, 2]]))
console.log(isCircular([[2, 1], [1, 2]]))
console.log(isCircular([[2, 1], [1, 2], [2, 1], [1, 3, 1], [1, 4, 4]]))





//3
function freedPrisoners(arr){
    let arr_copy = arr;
    let sum = 0;
    let for_search = 1;
    arr[0] === 1 ? 
        arr_copy.forEach(item => 
            {if(item === for_search){sum++;for_search===1?for_search=0:for_search=1}}
        )
        :
        false
    return sum
}

console.log(freedPrisoners([1, 1, 0, 0, 0, 1, 0]))// ➞ 4
console.log(freedPrisoners([1, 1, 1]))// ➞ 1
console.log(freedPrisoners([0, 0, 0]))// ➞ 0
console.log(freedPrisoners([0, 1, 1, 1]))// ➞ 0
console.log(freedPrisoners([1, 0, 0, 0, 0, 0, 0]))// ➞ 2
console.log(freedPrisoners([1, 0, 1, 0, 1, 0]))// ➞ 6





//4
function ticTacToe(arr){
    let EXTENDEDreturn;

    arr.some((item,index,array) => 
        {
            if(array[index][0] === array[index][1] && array[index][1] === array[index][2])
            {array[index][0] === 'X' ? (EXTENDEDreturn = 'Player 1 wins') : EXTENDEDreturn = 'Player 2 wins'}
        }
    )
    
    if(EXTENDEDreturn !== undefined){return EXTENDEDreturn}

    arr.join(',').split(',').some((item,index,array) => 
    item === array[index+3] && array[index+3] === array[index+6] 
    ||
    item === array[index+4] && array[index+4] === array[index+8]
    ||
    index === 4 && item === array[index-2] && item === array[index+2]
    ?
    (item === 'X' ? EXTENDEDreturn = 'Player 1 wins' : EXTENDEDreturn = 'Player 2 wins') : EXTENDEDreturn = undefined )

    return EXTENDEDreturn !== undefined ? EXTENDEDreturn : 'It\'s a Tie'

}

console.log(ticTacToe(
 [["X", "O", "O"],
  ["X", "X", "O"],
  ["X", "O", "#"]]))// "Player 1 wins"

console.log(ticTacToe(
 [["X", "#", "O"],
  ["X", "X", "O"],
  ["#", "O", "#"]]))// "It's a Tie"

console.log(ticTacToe(
 [["X", "X", "X"],
  ["X", "O", "O"],
  ["O", "O", "X"]]))// "Player 1 wins"

console.log(ticTacToe(
 [["X", "O", "O"],
  ["X", "O", "O"],
  ["O", "X", "X"]]))// "Player 2 wins"

console.log(ticTacToe(
 [["X", "O", "O"],
  ["X", "O", "O"],
  ["#", "X", "X"]]))// "It's a Tie"

console.log(ticTacToe(
 [["X", "O", "O"],
  ["O", "O", "O"],
  ["#", "X", "X"]]))// "Player 2 wins"





//5
function windowMaxes(arr,windowLength){
    let arr_copy = arr;
    arr_copy.forEach((item,index,array) => 
        {for(let i=1;i<windowLength;i++)
            {if(Math.max(array[index],array[index+i]) !== NaN){
                array[index] = Math.max(array[index],array[index+i])
            }}
        }
        )
    return arr_copy.filter(item => !Number.isNaN(item))
}

console.log(windowMaxes([1, 2, 3, 4, 3, 2, 1, 2, 5], 3))// ➞ [3, 4, 4, 4, 3, 2, 5]
console.log(windowMaxes([4, 5, 6, 7, 8, 9], 2))// [5, 6, 7, 8, 9])
console.log(windowMaxes([1, 2, 3, 4, 3, 2, 1, 2, 5], 4))// [4, 4, 4, 4, 3, 5])
console.log(windowMaxes([1, 2, 3, 4, 3, 2, 1, 2, 5], 3))// [3, 4, 4, 4, 3, 2, 5])
console.log(windowMaxes([1, 2, 3, 4, 3, 2, 1, 2, 5], 5))// [4, 4, 4, 4, 5])
console.log(windowMaxes([1, 4, -2, -9, 5, 32, -89, 23, 43, 2, 75, 3, 12, -3], 6))// [32,32,32,43,43,75,75,75,75,])





//classwork 21_4
function findOccurrences(sentence,character){
    return sentence.split(' ').map(item => item +  ' ' + item.toLowerCase().split('').filter(char => char === character.toLowerCase()).length )
}

console.log(findOccurrences("Hello World", "o"))
/* ➞ {
  "hello" : 1,
  "world" : 1
}*/

console.log(findOccurrences("Create a nice JUICY function", "c"))
/* ➞  {
  "create" : 1,
  "a" : 0,
  "nice" : 1,
  "juicy" : 1,
  "function" : 1
}*/

console.log(findOccurrences("An APPLE a day keeps an Archeologist AWAY...", "A"))
/*➞ {
  "an" : 1,
  "apple" : 1,
  "a" : 1,
  "day" : 1,
  "keeps" : 0,
  "archeologist" : 1,
  "away..." : 2
}*/