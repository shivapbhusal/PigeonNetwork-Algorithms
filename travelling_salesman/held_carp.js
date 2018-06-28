/*
 * NodeJs implementation of Held-Carp Algorithm
 *
 */
let iter = require('iter-tools');

function getRandomInt(min, max){
	return Math.floor(Math.floor(min + (Math.random())*(max-min))) 
}

function findPath(dists){
	let n = dists.size;
	arrayOfNodes = []
	for (let i=0;i<n;i++){
		arrayOfNodes.push(i);
	}

	console.log(n);

	C = new Map();

	for (let k = 1; k < n; k++){
		C[{k},k] = distances.get(0).get(k)
	}
	console.log(C);

	for (let subSize = 2; subSize < n; subSize++){
		for(let subset of Array.from(iter.permutations(arrayOfNodes,subSize))){
			console.log(subset);
		}

		let comb = iter.permutations([1,2,3],2);
		//console.log(Array.from(comb));
		
	}
}


distances = new Map();
const N_NODES = 4;
const MAX_DIST = 20;

for (let i=0; i<N_NODES; i++){
	temp = new Map();
	for (let j = 0; j<N_NODES; j++){
		if (i !=j){
			temp.set(j, getRandomInt(1,MAX_DIST));
		}
	distances.set(i, temp);
	}
}

console.log(distances);

console.log(findPath(distances));




