let fs = require('fs');

function writeToFile(filename, content){
	fs.appendFile(filename, content, (err) => {  
		       // throws an error, you could also catch it here
		   if (err) throw err;
		               // success case, the file was saved
		   //console.log('Content saved.');
	});
}


for (let i = 0; i<=10; i++){
	writeToFile('result.csv', i);
	writeToFile('result.csv', ",");
}

writeToFile('result.csv','/n');

for (let i = 0; i<=10; i++){
	writeToFile('result.csv', i);
	writeToFile('result.csv', ",");
}
