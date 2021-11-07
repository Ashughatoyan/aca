//1_15 լրացում 3
function getFrame(width,height,character){
  let arr;
  if(width>2 && height>2){
  arr = new Array(height-2).fill(new Array(width).fill('').map((currentValue,index,array) => (index > 0 && index < width-1 ? currentValue = ' ' : currentValue=character)));
  arr.unshift(new Array(width).fill(character))
  arr.push(new Array(width).fill(character))
  arr.forEach((element,index) => arr[index] = arr[index].join(' '))
  arr = arr.map((currentValue,index) => currentValue = new Array(1).fill(currentValue))
  }

  else(arr = 'invalid');
  return arr
}

console.log(getFrame(4, 5, "#"));
console.log(getFrame(10, 3, "*"));
console.log(getFrame(2, 5, "0"));
console.log(getFrame(1, 6, "["))
console.log(getFrame(5, 4, "z"))
console.log(getFrame(3, 4, "A"))
console.log(getFrame(10, 2, "`"))






//1






//2
function countLayers(rug_arr){
  let sum = 0;
  let str = rug_arr[Math.round(rug_arr.length/2)-1];
  str = str.substring(0,Math.round(str.length/2))
  str.split('').forEach((index,array) => array[index] !== array[index+1] ? sum++ : false)
  return sum
}

console.log(countLayers([
"AAA"]))

console.log(countLayers([
"AAAA", 
"AAAA", 
"AAAA"]))

console.log(countLayers([
  "AAAA",
  "ABBA",
  "AAAA"
]))

console.log(countLayers([
  "AAAAAAAAAAA",
  "AABBBBBBBAA",
  "AABCCCCCBAA",
  "AABCAAACBAA",
  "AABCADACBAA",
  "AABCAAACBAA",
  "AABCCCCCBAA",
  "AABBBBBBBAA",
  "AAAAAAAAAAA"
]))

console.log(countLayers([
"FFFFFFFFFFFFFFFFFFFFFFFFF",
"FFFFFFFFFFFFFFFFFFFFFFFFF",
"FFFFGGGGGGGGGGGGGGGGGFFFF",
"FFFFGGGAAAAAAAAAAAGGGFFFF", 
"FFFFGGGAABBBBBBBAAGGGFFFF",
"FFFFGGGAABCCCCCBAAGGGFFFF",
"FFFFGGGAABCDDDCBAAGGGFFFF",
"FFFFGGGAABCDDDCBAAGGGFFFF", 
"FFFFGGGAABCDDDCBAAGGGFFFF",
"FFFFGGGAABCCCCCBAAGGGFFFF",
"FFFFGGGAABBBBBBBAAGGGFFFF",
"FFFFGGGAAAAAAAAAAAGGGFFFF", 
"FFFFGGGGGGGGGGGGGGGGGFFFF", 
"FFFFFFFFFFFFFFFFFFFFFFFFF", 
"FFFFFFFFFFFFFFFFFFFFFFFFF"]))






//3
function leftRotations(str_f_rotat_l){
  let arr = [str_f_rotat_l]
  while(true){
    if(arr[arr.length-1].substr(1,str_f_rotat_l.length-1) + arr[arr.length-1].substr(0,1) === arr[0]){break}
    else{arr.push(arr[arr.length-1].substr(1,str_f_rotat_l.length-1) + arr[arr.length-1].substr(0,1))} 
  }
  return arr
}

function rightRotations(str_f_rotat_r){
  let arr = [str_f_rotat_r]
  while(true){
    if(arr[arr.length-1].substr(str_f_rotat_r.length-1,1) + arr[arr.length-1].substr(0,str_f_rotat_r.length-1) === arr[0] ){break;}
    else{arr.push(arr[arr.length-1].substr(str_f_rotat_r.length-1,1) + arr[arr.length-1].substr(0,str_f_rotat_r.length-1))}
  }
  return arr
}

console.log(leftRotations("abc"))
console.log(rightRotations("abc"))
console.log(leftRotations("abcdef")) 
console.log(rightRotations("abcdef"))
console.log(leftRotations("himalaya"))
console.log(rightRotations("himalaya"))






//4
function messageGlitch(str){
  let str1 = str.split('');
  let sum = '';
  
  
  str1.forEach((element,index,array) => {
    if(!isNaN(Number(element)) && element!==' '){
      
      if(isNaN(array[index+1]))
        {(sum+=element,array[index]=String.fromCodePoint(Number(sum)+96),sum='')}

      else if(!isNaN(array[index+1]) && array[index+1]!==' ')
        {sum+=element+array[index+1],array[index+1]='/',array[index]=String.fromCodePoint(Number(sum)+96),sum='' }

      else if(!isNaN(array[index+1]) && array[index+1]===' ')
        {(sum+=element,array[index]=String.fromCodePoint(Number(sum)+96),sum='')}

    }})


  return str1.map(currentValue => currentValue==='/'? '' : currentValue).join('') + '\n'
}

console.log(messageGlitch("T21e19d1y's m1r11e20i14g m5e20i14g w9l12 14o23 2e i14 20h5 3o14f5r5n3e r15o13."))
console.log(messageGlitch("A s9l22e18 Pr9u19 9s d15u2l5-16a18k5d o21t19i4e. Wi12l t8e o23n5r p12e1s5 13o22e i20."))
console.log(messageGlitch("P12e1s5 4o14'20 13i3r15w1v5 6i19h i14 20h5 20h9r4 6l15o18 11i20c8e14!"))
console.log(messageGlitch("T8r5e n5w c1r p1r11i14g p1s19e19 1r5 1v1i12a2l5. S16e1k t15 19e3u18i20y i6 9n20e18e19t5d."))
console.log(messageGlitch("V15l21n20e5r19 18e17u9r5d t15 15r7a14i19e t8e C8r9s20m1s p1r20y."))
console.log(messageGlitch("A b12a3k w1l12e20 8a19 2e5n f15u14d o21t19i4e. Pl5a19e c15n20a3t HR 20o r5c12a9m."))
console.log(messageGlitch("C12i5n20s w9l12 2e v9s9t9n7 20h5 6i6t8 6l15o18 20h9s a6t5r14o15n. Re13o22e a14y c15n6i4e14t9a12 4o3u13e14t19 6r15m v9e23."))





//5
function histogram(arr,char){
  let sum = [];
  arr.forEach((item,index) => index === 0 ? sum.push(new Array(item).fill(char).join('')) : sum.push('\n' + new Array(item).fill(char).join('')) )
  return sum.join('')
}

console.log(histogram([1, 3, 4], "#"))
console.log(histogram([6, 2, 15, 3], "="))
console.log(histogram([1, 10], "+"))
console.log(histogram([2,4,5,6], "o"))
console.log(histogram([4,2], "*"))
console.log(histogram([20,1,12], "H"))
console.log(histogram([2,1,2,4,5,2,3], "#"))





//6
function longest7SegmentWord(arr){
  let forreturnstr = '';
  arr.forEach(element => 
    element.indexOf('k') === -1 &&
    element.indexOf('m') === -1 &&
    element.indexOf('v') === -1 &&
    element.indexOf('w') === -1 &&
    element.indexOf('x') === -1 &&
    forreturnstr.length < element.length ? forreturnstr=element : false )
  return forreturnstr
}

console.log(longest7SegmentWord(["knighthood", "parental", "fridge", "clingfilm"]))
console.log(longest7SegmentWord(["coding", "crackers", "edabit", "celebration"]))
console.log(longest7SegmentWord(["velocity", "mackerel", "woven", "kingsmen"]))
console.log(longest7SegmentWord(["embarrassment", "perceive", "front"]))
console.log(longest7SegmentWord(["truck", "accessible", "undermine", "unique", "tear", "cat", "avenue", "labour", "goat", "dance", "rise", "scale"]))
console.log(longest7SegmentWord(["act", "adjust", "proud", "battery", "tear", "beautiful", "avenue", "thoughtful", "victory", "mobile", "straight"]))
console.log(longest7SegmentWord(["fair", "tear", "truck"]))