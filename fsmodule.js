// const fs =require('fs');
// const files =fs.readdirSync('./');
// console.log(files);
// const fs =require('fs');
// fs.readdir('./',function(err,files){
//      if(err)console.log('error',err);
//      else console.log('result',files);
// });
// var fs=require('fs');
// fs.readFile('logger.js','utf8',function(err,data){
//     if (err) throw err;
//     console.log(data);
// });
var fs=require('fs');
var data=fs.readFileSync('Textfile.txt','utf');
console.log(data);