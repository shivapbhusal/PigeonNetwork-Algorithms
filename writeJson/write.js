/*
 Writing to a json file.
 Example : Borrowed, adpated from https://gyandeeps.com/json-file-write/
 */
var fs = require("fs");
var sampleObject = {
    a: 1,
    b: 2,
    c: {
        x: 11,
        y: 22
    }
};

fs.writeFile("object.json", JSON.stringify(sampleObject, null, 4), (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File has been created");
});
