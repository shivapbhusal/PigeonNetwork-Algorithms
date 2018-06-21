/*
 Nodejs script to adjust the perfect randomness.
 Brute Force solution -- Run the loop until the condition is satisfied.

 Optimized solution: Keep the generate random floats between two close floats.This will make sure that distance from host host and the lamda remain almost similar for all the foreign hosts.
 Optimized solution is nothing but a careful bruteforce which heavily reduces the no of iterations needed to get to the required result.

*/
function calculateDistance(homeHost, foreignHost){
	let distance = Math.sqrt(Math.pow(homeHost.get("x")-foreignHost.get("x"),2)+ 
		Math.pow(homeHost.get("y") - foreignHost.get("y"),2));
	return distance;
}

function generateRandomFloat(min, max){
      return ((Math.random() * (max - min))+min).toFixed(4);
}

// Get the number of nodes. If there is no argument, exit the program.
if (!process.argv[2]){
	console.log("Enter the no of nodes");
	process.exit();
}

const N = process.argv[2]; // No of foreign host.
const S_MAX = 1.1;
let homeHost = new Map();
homeHost.set("x",0);
homeHost.set("y",0);

let foreignHosts;

let s = Infinity;
let minRatio;
let maxRatio;

let iterations = 0;
// Continue creating new cell until condition gets satisfied.
while (s>S_MAX){ 
foreignHosts = [];
// Create N number of foreign host
for (let i = 0; i<N; i+=1){
	let x = generateRandomFloat(0.25,0.3);
	let y = generateRandomFloat(0.25,0.3);
	let lambda = generateRandomFloat(0.85,0.9);
	const temp = new Map();
	temp.set("x", x);
	temp.set("y", y);
	temp.set("lambda", lambda);
	foreignHosts.push(temp);
}

maxRatio = 0;
minRatio = Infinity;

// Computing minRatio, maxRatio and s.
for (let foreignHost of foreignHosts){
	distance=calculateDistance(homeHost, foreignHost);
        lambda = foreignHost.get("lambda");
        ratio = lambda / distance;
	// console.log(ratio);
	if (ratio <minRatio){
		minRatio = ratio;
	}
	if (ratio >maxRatio){
		maxRatio = ratio;
	}
}

s = maxRatio / minRatio;
console.log(s);
iterations += 1;
}

console.log("Iterations:", iterations);
console.log("Solution Cell:");
console.log("Min Ratio:",minRatio);
console.log("Max Ratio",maxRatio);
console.log("s:",s);
console.log("ForeignHosts in the cell:");
console.log(foreignHosts);
