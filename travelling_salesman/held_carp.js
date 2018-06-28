/*
 * NodeJs implementation of Held-Carp Algorithm
 *
 */
let iter = require('iter-tools');

function getRandomInt(min, max){
	return Math.floor(Math.floor(min + (Math.random())*(max-min))) 
}

function areEqual(array1, array2) {
	// Checks if two arrays are equal in values.
	if (array1.length != array2.length){
		return false;
	}
	for (let i =0; i<array1.length; i++){
		if (array1[i] != array2[i]){
			return false;
		}
	}

	return true;
 }

 function getValue(map, array){
 	// Get value from a Map where key is an array.
	let ans;
 	map.forEach((value, key) => {
 		if (areEqual(array, key)){
 			ans = value;
 		}
 	});
 	if (ans) return ans;
 	else console.log("Key not found");
 }

function findPath(dists){
	let n = dists.size;
	arrayOfNodes = []
	for (let i=1;i<n;i++){
		arrayOfNodes.push(i);
	}
	console.log(arrayOfNodes);

	console.log(n);

	C = new Map();

	for (let k = 1; k < n; k++){
		C.set([1 << k, k],[distances.get(0).get(k),0]);
	}
	console.log(C);

	for (let subSize = 2; subSize < n; subSize++){
		for(let subset of Array.from(iter.permutations(arrayOfNodes,subSize))){
			let bits = 0;

			for (let bit of subset){
				bits |= 1 << bit;
			}

			for (let k of subset){
				prev = bits & ~(1 << k);

				res = []

				for (let m of subset){
					if (m ==0 || m ==k){
						continue;
					}
					console.log(prev,m);
					res.push([getValue(C,[prev,m])[0] + distances.get(m).get(k),m]);
				}
				C.set([bits, k],Math.min(...res));
			}

		}
	}
}



// start of the test
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




