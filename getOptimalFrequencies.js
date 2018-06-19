
/* JavaScript code to check if condition is satisfied for  optimal frequency.
 * Suppose our frequencies are [ 1.9, 1.8, 1.5, 10.5, 11.6 ] 
 * We want to transform these frequencies in such a way that they are integers and their ratio is closest to the original.
 * The 'closeness" is defined by delta.
 * The function isConditionSatisfied is used to check that
 * Function toIntegers is originally written by Daniele Morris, University of Padua. 
*/


function toIntegers(frequencies, delta){
		const aux = new Map();

		frequencies.forEach((value, key) => {
			aux.set(key, value);
		});

		let k = 1;

		const setter = (value, key) => {
			// $FlowFixMe
			aux.set(key, frequencies.get(key) * k);
		};

		while (!isConditionSatisfied(aux, delta)) {
			aux.forEach(setter);

			k += 1;

			if (k > 9999999) {
				break;
			}
		}

		aux.forEach((value, key) => {
			aux.set(key, Math.round(aux.get(key)));
		});

	        console.log(k); //check the value of k.

		return aux;
	}


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
const frequency1 = new Map();
frequency1.set("A", 1.5);
frequency1.set("B", 2.6);
frequency1.set("C", 1.1);

const frequency2 = new Map();
frequency2.set("A", 1.1);
frequency2.set("B", 1.7);
frequency2.set("C", 12.4);
frequency2.set("D", 1.59);
frequency2.set("E", 100.1);
frequency2.set("F", 3.9);
frequency2.set("G", 10.2);
frequency2.set("H", 39.7);
frequency2.set("I", 89.59);
frequency2.set("J", 100.90);
frequency2.set("K", 1.91);
frequency2.set("L", 200.69);

console.log(toIntegers(frequency1,0.1));
console.log(toIntegers(frequency2,0.1));
