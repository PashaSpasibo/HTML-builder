 const fs = require('fs');
 const path = require("node:path");
 const myPath = path.normalize(__dirname + "/text.txt");
 const stream = new fs.ReadStream(myPath, {encoding: "utf8"});
 
 stream.on('readable', () => {
    const data = stream.read();
    if (data !== null) console.log(data);
 });
