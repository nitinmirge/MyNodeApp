let fs = require('fs');
let os = require('os');
let opt = os.platform();
let core = (os.cpus()).length + "core";
let arch = os.arch();
// let out = "you are yousing"+ opt + "os of"+arch+"bit with"+core+"system";

let out = `you are yousing ${opt} os of ${arch} bit with ${core} system`

// fs.writeFile('mytext.txt','this is Node package',function(){
//     console.log('file is created');
// })

// fs.appendFile('mycode.txt','this is mycodefile for appended \n',function(){
//     console.log('File is appended');
// })

// fs.appendFile('mycode.txt',out,function(){
//     console.log('File is appended');
// })

// fs.readFile('mycode.txt','utf-8',function(err,data){  // it is use for read file and utf-8 for descripted file other wise it is encripted
//     if(err) throw err;
//     console.log(data);
// })

// fs.unlink('mytex.txt',function(err){   // for deleting file
//     if(err) throw err
//     console.log('File deleted')
// })

// fs.rename('mytext.txt','myfile.txt',function(err){
//     if(err) throw err;
//     console.log('File Rename')
// })

fs.readFile('db.json','utf-8',function(err,data){  // it is use for read file and utf-8 for descripted file other wise it is encripted
    if(err) throw err;
    console.log(data);
})
