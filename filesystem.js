var http = require('http');
const fs = require('fs');




//read file and display content of the file
http.createServer(function(request,response){
   fs.readFile('./demo.txt',function(err,data){
       if(err) throw err;
       response.writeHead(200,{'Content-Type':'text/html'});
       response.write('Text file contains : ' + data);
       response.end();
   });
}).listen(3333);
