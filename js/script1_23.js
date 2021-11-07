//1
function marathonDistance(arr){
    let sum = 0;
    arr.forEach(item => item > 0 ? sum+=item : sum-=item )
    return sum === 25
}

console.log(marathonDistance([1, 2, 3, 4]))// ➞ false
console.log(marathonDistance([1, 9, 5, 8, 2]))// ➞ true
console.log(marathonDistance([-6, 15, 4]))// ➞ true





//2
function plantTrees(w,l,g){
    return (w*l-((w-2)*(l-2)))%(1+g) === 0 ? (w*l-((w-2)*(l-2)))/(1+g) : 0
}

console.log(plantTrees(3, 3, 1))// 4
console.log(plantTrees(3, 3, 3))// 2
console.log(plantTrees(3, 3, 2))// 0
console.log(plantTrees(7, 7, 3))// 6
console.log(plantTrees(3, 3, 0))// 8
console.log(plantTrees(3, 3, 10))// 0





//3
function sumCommon(arr1,arr2,arr3){
    let sum = 0;
    arr1.forEach(item => arr2.includes(item) && arr3.includes(item) ? (arr2.splice(arr2.indexOf(item),1),arr3.splice(arr3.indexOf(item),1),sum+=item) : false )
    return sum
}

console.log(sumCommon([1, 2, 3], [5, 3, 2], [7, 3, 2]))// ➞ 5
console.log(sumCommon([1, 2, 2, 3], [5, 3, 2, 2], [7, 3, 2, 2]))// ➞ 7
console.log(sumCommon([1], [1], [2]))// ➞ 0
console.log(sumCommon([1], [1], [1]))// 1
console.log(sumCommon([1, 2, 2, 3, 2], [5, 3, 2, 2, 1], [7, 3, 2, 2, 1]))// ➞ 8





//4
function products(obj){
    let obj1 = new Object;
    let arr = [];
    for (const [key, value] of Object.entries(obj)) {
        if(`${value}` >= 500){
            obj1[`${value}`] = `${key}`
            arr.push(Number(`${value}`))
        }
    }
    arr = arr.sort((a, b) => a - b);
    arr.forEach((item,index) => arr[index] = obj1[item.toString()])
    return arr.reverse(); 
}

console.log(products({"Computer" : 600, "TV" : 800, "Radio" : 50}))// ➞ ["TV","Computer"]
console.log(products({"Bike1" : 510, "Bike2" : 401, "Bike3" : 501}))// ➞ ["Bike1", "Bike3"]) 
console.log(products({"Loafers" : 50, "Vans" : 10, "Crocs" : 20}))// ➞ []
console.log(products({"Calvin Klein" : 500, "Armani" : 5000, "Dolce & Gabbana" : 2000}))//, ["Armani", "Dolce & Gabbana", "Calvin Klein"])
console.log(products({"Dell" : 400, "HP" : 300, "Apple" : 1200}))//, ['Apple'])





//5
