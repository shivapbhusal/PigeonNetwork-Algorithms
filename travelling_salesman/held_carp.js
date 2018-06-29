/*
 * NodeJs implementation of Held-Carp Algorithm
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
	let arrayOfNodes = []
	for (let i=1;i<n;i++){
		arrayOfNodes.push(i);
	}
	//console.log(arrayOfNodes);

	//console.log(n);

	C = new Map();

	for (let k = 1; k < n; k++){
		C.set([1 << k, k],[distances.get(0).get(k),0]);
	}
	console.log(C);

	for (let subSize = 2; subSize < n; subSize++){
		for(let subset of Array.from(iter.combinations(arrayOfNodes,subSize))){
			//console.log(subset);
			let bits = 0;

			for (let bit of subset) {
                bits |= 1 << bit;
            }

            //console.log(subset);
			for (let z of subset){
				let prev = bits & ~(1 << z);
				//console.log(prev);

				let res = []

				for (let m of subset){
					if (m ==0 || m ==z){
						continue;
					}
					//console.log(prev,m);
					//console.log(getValue(C,[prev,m]));
                    //console.log(res);
					//console.log([getValue(C,[prev,m])[0] + distances.get(m).get(z),m]);
					res.push([getValue(C,[prev,m])[0] + distances.get(m).get(z),m]);
				}
				console.log(res);
				C.set([bits, z],Math.min(...res));
			}

		}
	}

	let bits = (2**n -1) -1;
	res = [];

	for (let x=1; x<=n; x++){
		res.append([getValue(C,[bits,x])[0] + distances.get(x).get(0),m])
	}
	let opt, parent = Math.min(...res);

	let path = [];

	for (let i=0; i<n-1;i++){
		path.append(parent);
		let newBits = bits & ~(1 << parent);
		_, parent = getValue(C, [bits,parent]);
		bits = newBits;
	}

	path.append(0);

	print(path);

}



// start of the test
distances = new Map();
const N_NODES = 4;
const MAX_DIST = 20;

/*
for (let i=0; i<N_NODES; i++){
	let temp = new Map();
	for (let j = 0; j<N_NODES; j++){
		if (i !=j){
			temp.set(j, getRandomInt(1,MAX_DIST));
		}
	distances.set(i, temp);
	}
}
*/

a = new Map();
a.set(1,5).set(2,10).set(3,1);
b = new Map();
b.set(0,5).set(2,30).set(3,20);
c = new Map();
c.set(0,10).set(1,30).set(3,30);
d = new Map();
d.set(0,30).set(1,10).set(2,40);

distances.set(0,a).set(1,b).set(2,c).set(3,d);

console.log(distances);
console.log(findPath(distances));




