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
let first_node = new Map();
const S_FOR_FIRST_NODE = parseFloat(Math.random().toFixed(4));
let x = Math.random();
let y = Math.random();
let distance = Math.sqrt((-homeHost.get("x"),2)+
		       Math.pow(y - homeHost.get("y"),2));
let lambda = S_FOR_FIRST_NODE * distance;
first_node.set("x", x);
first_node.set("y", y);
first_node.set("lambda", lambda);

foreignHosts.push(first_node);

for (let i=0; i<N-1; i+= 1){
	const temp = new Map();
	let x = Math.random();
	let y = Math.random();
	let s = generateRandomFloat(S_FOR_FIRST_NODE, S_FOR_FIRST_NODE*S_MAX);
	let distance = Math.sqrt((x-homeHost.get("x"),2)+
		       Math.pow(y - homeHost.get("y"),2));
	let lambda = s * distance;
	temp.set("x", x);
	temp.set("y", y);
	temp.set("lambda", lambda);
	foreignHosts.push(temp);
}

console.log(foreignHosts);


