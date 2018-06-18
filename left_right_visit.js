/*
Given lower_Limit : 0, Upper limit : 20
Say we are in position 5. We want to move to right and left simultaneously. 
Solution will be something like 6, 4, 7, 3.... 

If lower_limit is already visited, move to the right only. 
If upper_limit is already reached, move to the left only.
If both limits are reached, stop.

*/

const visitedSet = new Set();

  let i = 3; // i is where we start. 
  let j = 1;
  let start = 0; 
  let end = 20;
  while (!(visitedSet.has(start) && (visitedSet.has(end)))){
    
    // If starting point is already reached, start moving to right.
    if (visitedSet.has(0)){
      i = i+j;
      j = 1;
      console.log(i);
      visitedSet.add(i);
    }
    
    // If End point is reached, start moving to left.
    else if (visitedSet.has(20)){
      i = i  -j;
      j = 1;
      console.log(i);
      visitedSet.add(i);
    }
    
    // Else, start moving left and right simultaneously. 
    else {
      if (j %2 ==0){
      i = i +j;
    }
    else {
      i = i - j;
    }
    j = j +1;
    console.log(i);
    visitedSet.add(i);
    }
   
    
  }

console.log(visitedSet);
  
