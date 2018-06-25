/*
 Writing to a json file.
 Example : Borrowed, adpated from https://gyandeeps.com/json-file-write/
 */
var fs = require("fs");

function strMapToObj(strMap) {
    let obj = Object.create(null);
    for (let [k,v] of strMap) {
        // We don’t escape the key '__proto__'
        // which can cause problems on older engines
        obj[k] = v;
    }
    return obj;
}

myMap = new Map().set("rr",1).set("prob",2).set("det",3);
sampleObject = strMapToObj(myMap);

fs.writeFile("object.json", JSON.stringify(sampleObject, null, 4), (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File has been created");
});
