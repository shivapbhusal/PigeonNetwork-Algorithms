/* Suppose a key, value pair {"A":1, "B":2, "C": 3} is given. The idea of this script is to distribute all the keys as per the required no of occurance. 
 May be one potential answer could be CACBCB.
 The keys have to be as diversely distributed as possible.
 In the above example, may be CBCACB could be even a better answer.
 ABBCCC will not work as A, B are concentrated in the same region.

 Language : JavaScript ( ES6 ) 
 */

function insertKeys(finalResult, value, key){
	if (value == 1){
		let position = Math.floor(finalResult.length/2);
		finalResult[position] = key;
	}
	else {
		let position = 0;
		while (position <= finalResult.length -1) {
			//console.log(key);
			if (finalResult[position] == "X"){
				finalResult[position] = key;
			}
			else {
				let left = position;
				let right = position;
				while (finalResult[i] !="X")
				{
					
					i = i -1;
				}
				finalResult[i] = key;
			}
			position = position + Math.floor(finalResult.length/(value));
		}
		
	}
}

const myMap = new Map();
myMap.set("a",4); 
myMap.set("b", 2);
myMap.set("c", 1);
myMap.set("d", 2);

result = []
finalResult = []

myMap.forEach((value, key)=> {
  result.push({key:key,  val:value});
});

console.log("Input");
console.log(result);

// Colculating sum of all values, Key with Max value etc.
let sum = 0;
let i = 0;
maxValue = 0;
maxKey = "X"; // One arbitrary value./ This can be improved.
while (i<result.length){
  sum = sum + result[i].val;
  if (result[i].val>maxValue){
    maxValue = result[i].val;
    maxKey = result[i].key;
  } 
  i=i+1;
}

// Push an arbitary value X to the finalResult array.
i = 0; 
while (i<sum){
  finalResult.push("X"); 
  i = i+1;
}

myMap.forEach((value, key)=>{ 
  insertKeys(finalResult, value, key);
});

console.log("Result:");
console.log(finalResult);
