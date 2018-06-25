/*
 Writing to a json file.
 Example : Borrowed, adpated from https://gyandeeps.com/json-file-write/
 */
var fs = require("fs");

function strMapToObj(strMap) {
    let obj = Object.create(null);
    for (let [k,v] of strMap) {
        // Start the inner key value pair.
	let temp = Object.create(null);
	for (let [innerK, innerV] of v){
		temp[innerK] = innerV;
	}
        obj[k] = temp;
    }
    return obj;
}

tempMap = new Map().set("rr",1).set("prob",2).set("det",3);
myMap = new Map().set("1",tempMap).set("2",tempMap).set("3",tempMap);
sampleObject = strMapToObj(myMap);

console.log(sampleObject);

fs.writeFile("object.json", JSON.stringify(sampleObject, null, 4), (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File has been created");
});
