/*
 Nodejs script to adjust the perfect randomness.
 Brute Force solution -- Run the loop until the condition is satisfied.
 */
function calculateDistance(homeHost, foreignHost){
	let distance = Math.sqrt(Math.pow(homeHost.get("x")-foreignHost.get("x"),2)+ 
		Math.pow(homeHost.get("y") - foreignHost.get("y"),2));
	return distance;
}

function generateRandomFloat(min, max){
return ((Math.random() * (max - min))+min).toFixed(4);
}

const N = 5; // No of foreign host.
const S_MAX = 2;
let homeHost = new Map();
homeHost.set("x",0);
homeHost.set("y",0);

let foreignHosts;

let s = Infinity;
let minRatio;
let maxRatio;

let iterations = 0;
while (s>S_MAX){ 
foreignHosts = [];
// Create N number of foreign host
for (let i = 0; i<N; i+=1){
	let x = Math.random();
	let y = Math.random();
	let lambda = Math.random();
	const temp = new Map();
	temp.set("x", x);
	temp.set("y", y);
	temp.set("lambda", lambda);
	foreignHosts.push(temp);
}

maxRatio = 0;
minRatio = Infinity;
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
// console.log(s);
iterations += 1;
}

console.log("Iterations:", iterations);
console.log("Solution Cell:");
console.log("Min Ratio:",minRatio);
console.log("Max Ratio",maxRatio);
console.log("s:",s);
console.log("ForeignHost",foreignHosts);
