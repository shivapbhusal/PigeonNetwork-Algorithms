/*
 * A program to value from a Map when key is an array.
 *
 */

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
	let ans;
 	map.forEach((value, key) => {
 		if (areEqual(array, key)){
 			ans = value;
 		}
 	});
 	if (ans) return ans;
 	else console.log("Key not found");
 }

 myMap = new Map(); 

 myMap.set([1,2,3],5);
 myMap.set([1,2,3],10);

console.log(myMap);

console.log(getValue(myMap,[1,2,3]));
console.log(getValue(myMap,[1,2]));  
