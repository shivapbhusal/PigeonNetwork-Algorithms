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
      return parseFloat((min+Math.random()*(max - min)).toFixed(4));
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

let foreignHosts = [];
const FIRST_NODE = parseFloat(Math.random().toFixed(4));
foreignHosts.push(FIRST_NODE);
for (let i=0; i<N-1; i+= 1){
	let s = generateRandomFloat(FIRST_NODE, FIRST_NODE*S_MAX);
	foreignHosts.push(s);
}

console.log(foreignHosts);


