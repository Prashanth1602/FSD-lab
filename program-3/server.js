const fs = require('fs');

fs.writeFile('sample.txt','Hello, this is Node.js File Handling!\n',(err)=>{
 if(err) throw err;

 console.log("File created and data written successfully.");

 fs.appendFile('sample.txt','This is appended text.\n',(err)=>{
  if(err) throw err;

  console.log("Data appended successfully.");

  fs.readFile('sample.txt','utf8',(err,data)=>{
   if(err) throw err;

   console.log("\nFile Content:\n" + data);

   fs.rename('sample.txt','newSample.txt',(err)=>{
    if(err) throw err;

    console.log("File renamed successfully.");

    fs.unlink('newSample.txt',(err)=>{
     if(err) throw err;

     console.log("File deleted successfully.");
    });

   });

  });

 });

});
