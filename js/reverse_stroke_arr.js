let arr_1 = 
[
[1,0,0,0,0,0,1,0],
[1,0,1,0,1,0,0,0],
[0,0,0,0,0,0,1,0],
[0,1,0,1,0,0,0,1],
[0,0,0,1,0,1,1,0],
[0,1,1,0,0,0,1,1],
[1,0,0,0,0,0,0,0],
[0,0,1,0,0,1,0,1],
];

let arr_2 = [
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
];

for(let i=0;i<arr_1.length;i++){
	for(let j=0;j<arr_1.length;j++){
		arr_2[j][i]  = arr_1[i][j]
	}
}

console.log(arr_2);