const fs = require('fs');
const process = require('process')
const output = fs.createWriteStream(__dirname+"/text.txt");
const {stdin, stdout} = process;

process.on("exit", ()=>console.log("\nBye-bye\n"))
process.on("SIGINT", ()=>process.exit(0))

console.log("Hello, what should i write in text.txt?")

stdin.on("data", data => {
  if (data.toString().trim() === "exit"){
    process.exit()
  }
  console.log("-----------------------")
  output.write(data);
  console.log("Something else?")
  console.log("-----------------------")

})