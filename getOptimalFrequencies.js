/* JavaScript code to get optimal frequency.
 * Suppose our frequencies are [ 0.9, 0.8, 0.5, 10.5, 11.6 ] 
 * We want to make their ratio in such a way that they are integers and their ratio is closest to perfect.
 * Special case : 0.1, 0.2 etc.. In the special case, New frequencys is 0 and it becomes 0 / 0.1. So it becomes [1-0 ] == 1 which is greater than delta.So,It should have been taken care of.
*/

function isConditionSatisfied ( frequency, delta )
{
	let flag = true;
	frequency.forEach(function(value){
		// console.log(Math.abs(1-(Math.round(Number.parseFloat(value)) / value)));
		// Special case.
		if (Math.round(Number.parseFloat(value))==0){
			if (value> delta)
			{
				flag = false;
				return flag;
			}
		}
		else {
		if (Math.abs(1-(Math.round(Number.parseFloat(value)) / value)) > delta)
		{
			flag = false;
			return flag;
		}
	}

	});

	return flag;

}

frequency = [1.9,1.1,1.08,10.01, 11.91]; // This should be true
console.log(isConditionSatisfied(frequency,0.2));

frequency = [1.7,1.1,1.08,10.01, 11.91]; // This should be true
console.log(isConditionSatisfied(frequency,0.2));

frequency = [0.1,1.3,1.1,1.08,10.01, 11.91]; // This should be false
console.log(isConditionSatisfied(frequency,0.2));
