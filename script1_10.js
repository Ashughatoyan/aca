//1 Minesweeper https://edabit.com/challenge/Hs9MayvcfE7gHzuLT
function minesweeperNumbers(arr_start){


for(let i=0;i<arr_start[0].length;i++){
	for(let j=0;j<arr_start[0].length;j++){
		(arr_start[i][j] === 1 ? arr_start[i][j] = 9 : false)
	}
}

for(let i=0;i<arr_start[0].length;i++){
	for(let j=0;j<arr_start[0].length;j++){
		(arr_start[i][j] === 9 ? geti_jround(i,j) : false)
	}
}

function geti_jround(i1,j1){
	for(let i=i1-1;i<=i1+1;i++){
		for(let j=j1-1;j<=j1+1;j++){
			((i>=0 && i<=3 && j>=0 && j<=3 && (i.toString()+j.toString() !== i1.toString()+j1.toString())) ? (arr_start[i][j] !== 9 ? arr_start[i][j]=arr_start[i][j]+1 : false) : false);
		}
	}
}

arr_start.forEach(array => console.log(array));

return arr_start

}


console.log(minesweeperNumbers([
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 0],
]))





//2 https://edabit.com/challenge/tmnCStcrkdWbreKP5
function getBudgets(arr){
	let sum=0;
	arr.forEach(element => sum+=element.budget);
	return sum
}

console.log(getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
]))

console.log(getBudgets([
  { name: "John",  age: 21, budget: 29000 },
  { name: "Steve",  age: 32, budget: 32000 },
  { name: "Martin",  age: 16, budget: 1600 }
]))





//3 https://edabit.com/challenge/humnHvXGXnBnStg5F
function trace(arr){
	let sum = 0;
	for(let i=0;i<arr.length;i++){
		sum+= arr[i][i];
	}
	return sum
}

console.log(trace([
  [1, 4],
  [4, 1]
]))

console.log(trace([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]))

console.log(trace([
  [1, 0, 1, 0],
  [0, 2, 0, 2],
  [3, 0, 3, 0],
  [0, 4, 0, 4]
]))





//4 https://edabit.com/challenge/aZiwEFEdFvWoBvDWS
const obj = { name: "John", notes: [3, 5, 4]};

console.log(obj.notes.reduce((a, b) => a + b, 0) / (obj.notes.length!==0 ? obj.notes.length : 1))





//5 https://edabit.com/challenge/aBMEMcMoWbbSRjFWS

function verticalText(string){
	string = string.split(' ');
	let the_greater;
	for(let i=0;i<string.length-1;i++){
		the_greater = Math.max(string[i].length,string[i+1].length);
	}
	let arri = [];
	for(let i=0;i<the_greater;i++){
		for(j=0;j<string.length;j++){
			(arri.length === string.length ? ( arri = new Array) : false);
			arri.push(string[j][i] === undefined ? ' ' : string[j][i]); 
			(arri.length === string.length ? console.log(arri) : false);
		}
	}
}


verticalText('Hello fellas');
console.log('\n___________\n');
verticalText('All Bananas');
console.log('\n___________\n');
verticalText('I hope you have a great day than him');
