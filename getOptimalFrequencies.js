/* JavaScript code to get optimal frequency.
 * Suppose our frequencies are [ 0.9, 0.8, 0.5, 10.5, 11.6 ] 
 * We want to make their ratio in such a way that they are integers and their ratio is closest to perfect.
 */

function isConditionSatisfied ( frequency, delta )
{
	let flag = false;
	frequency.forEach(function(value){
		console.log(Math.abs(1-(Math.round(Number.parseFloat(value)) / value)));
		if (Math.abs(1-(Math.round(Number.parseFloat(value)) / value)) > delta)
		{
			flag = false;
			return flag;
		}
		else {
			flag = true;
		}

	});

	return flag;

}

frequency = [0.9,0.1,0.08,10.01, 11.91]

console.log(isConditionSatisfied(frequency,0.2));
