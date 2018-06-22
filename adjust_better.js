/*
 Nodejs script to adjust the perfect randomness.
 Optimized solution: First get s, then get random x and y. 
 Finally adjust lambda according to s.
*/

function calculateDistance(homeHost, foreignHost){
	let distance = Math.sqrt(Math.pow(homeHost.get("x")-foreignHost.get("x"),2)+ 
		Math.pow(homeHost.get("y") - foreignHost.get("y"),2));
	return distance;
}

function generateRandomFloat(min, max){
      return parseFloat((min+Math.random()*(max - min)).toFixed(4));
}

// Function to compute s in a set of foreignHosts
function calculateS(foreignHosts)
{
	let minRatio = Infinity;
	let maxRatio = 0;
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
return s;
}

// Get the number of nodes. If there is no argument, exit the program.
if (!process.argv[2]){
	console.log("Enter the no of nodes");
	process.exit();
}


const N = process.argv[2]; // No of foreign host.
const S_INDEX = 1.1;

// Create a Home Host.
let homeHost = new Map();
homeHost.set("x",0);
homeHost.set("y",0);

let foreignHosts = [];

// Get the first Node.
let first_node = new Map();
const S_FOR_FIRST_NODE = parseFloat(Math.random().toFixed(4));
let x = Math.random();
let y = Math.random();
let distance = Math.sqrt(Math.pow(x-homeHost.get("x"),2)+Math.pow(y - homeHost.get("y"),2));
let lambda = S_FOR_FIRST_NODE * distance;
first_node.set("x", x);
first_node.set("y", y);
first_node.set("lambda", lambda);
foreignHosts.push(first_node);

// Get rest of the Nodes 
for (let i=0; i<N-1; i+= 1){
	const temp = new Map();
	let x = Math.random();
	let y = Math.random();
	let s = generateRandomFloat(S_FOR_FIRST_NODE, S_FOR_FIRST_NODE*S_INDEX);
	let distance = Math.sqrt(Math.pow(x-homeHost.get("x"),2)+
		       Math.pow(y - homeHost.get("y"),2));
	let lambda = s * distance;
	temp.set("x", x);
	temp.set("y", y);
	temp.set("lambda", lambda);
	foreignHosts.push(temp);
}

console.log(foreignHosts);

// Test the s value for generated set of ForeignHosts. 

console.log("S:",calculateS(foreignHosts));

