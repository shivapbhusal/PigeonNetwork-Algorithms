/* Suppose a key, value pair {"A":1, "B":2, "C": 3} is given. The idea of this script is to distribute all the keys as per the required no of occurance. 
 May be one potential answer could be CACBCB.
 The keys have to be as diversely distributed as possible.
 In the above example, may be CBCACB could be even a better answer.
 ABBCCC will not work as A, B are concentrated in the same region.

 Language : JavaScript ( ES6 ) 
 */
 
 function insertInPosition (resultArray, key, position){
  console.log(key);
  let j = 1;
  while (resultArray[position] != "X"){
    if (position == 0){
      position = position + 1;
    }

    else if (position == (resultArray.length-1)){
      position = position - 1;
    }

    else {
      if (j%2 == 1){
        position = position + j;
      }
      else {
        position = position - j;
      }

      j = j + 1;
      
    }
  }

  resultArray[position] = key; 

  console.log(resultArray);
}
	

function arrangeKeys(finalResult, value, key){
	if (value == 1){
		let position = Math.floor((finalResult.length)/2);
		insertInPosition(finalResult, key, position);
	}
	else {
		let position = 0;
		counter = 0;
		while (counter<value) {
			insertInPosition(finalResult, key, position); 
			position = position + Math.floor((finalResult.length)/value);
			counter = counter + 1;
		}	
	}
}

// Use

const myMap = new Map();
myMap.set("a",5); 
myMap.set("b", 4);
myMap.set("c", 1);
//myMap.set("d", 2);
//myMap.set("e", 1);

result = [];
finalResult = [];

let sum = 0;
myMap.forEach((value, key)=> {
  sum = sum + value;
});


// Push an arbitary value X to the finalResult array.
i = 0; 
while (i<sum){
  finalResult.push("X"); 
  i = i+1;
}

console.log(finalResult);

myMap.forEach((value, key)=>{ 
  arrangeKeys(finalResult, value, key);
});

console.log("Result:");
console.log(finalResult);
