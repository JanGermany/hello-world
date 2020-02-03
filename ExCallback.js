var fs=require("fs");
fs.readFile('input.js',function(err,data1){
    if(err) return console.error(err);
    console.log(data1.toString());
})
console.log("Program ends!");