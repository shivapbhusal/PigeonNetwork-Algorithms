/*
 Nodejs script to adjust the perfect randomness.
 */
function calculateDistance(homeHost, foreignHost){
let distance = Math.sqrt(Math.pow(homeHost.get("x")-foreignHost.get("x"),2)+ 
		Math.pow(homeHost.get("y") - foreignHost.get("y"),2));
return distance;
}

const homeHost = {"x":0,"y":0};
foreignHosts = [];

for (let i = 0; i<=5; i+=1){
	let x = Math.random();
	let y = Math.random();
	let lambda = Math.random();

	let temp = {"x":x,"y":y,"lambda":lambda};
	foreignHosts.push(temp);
}

for (let foreignHost of foreignHosts){
	console.log(calculateDistance(homeHost, foreignHost));
}

console.log(foreignHost);
