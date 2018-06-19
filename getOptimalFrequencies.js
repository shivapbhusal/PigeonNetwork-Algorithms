
/* JavaScript code to check if condition is satisfied for  optimal frequency.
 * Suppose our frequencies are [ 1.9, 1.8, 1.5, 10.5, 11.6 ] 
 * We want to transform these frequencies in such a way that they are integers and their ratio is closest to the original.
 * The 'closeness" is defined by delta.
 * The function isConditionSatisfied is used to check that 
*/

function isConditionSatisfied ( frequency, delta )
{
	let flag = true;
	frequency.forEach(function(value){

		if (Math.abs(1-(Math.round(Number.parseFloat(value)) / value)) > delta)
		{
			flag = false;
			return flag;
		}
	});

	return flag;

}

// Tests 

frequency = [1,1.1,1.08,10.01, 11.91]; // This should be true
console.log(isConditionSatisfied(frequency,0.2));

frequency = [1.7,1.1,1.08,10.01, 11.91]; // This should be true. Note: 2 /1.7 = 1.18
console.log(isConditionSatisfied(frequency,0.2));

frequency = [1.6,1.1,1.08,10.01, 11.91]; // This should be false, because 2 / 1.6 = 1.25 ]
console.log(isConditionSatisfied(frequency,0.2));

frequency = [1.1,1.3,1.1,1.08,10.01, 11.91]; // This should be false. 1/ 1.3 = 0.76
console.log(isConditionSatisfied(frequency,0.2));

frequency = [1,2, 3, 4, 5, 1.4]; // This should be false.
console.log(isConditionSatisfied(frequency, 0.2));
