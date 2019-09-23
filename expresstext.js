const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;



app.get('/',function(request,response){
    fs.readFile('./demo.txt','Utf-8',function(err,data){
        if(err) throw err;
       var data1 = data
       response.send(data)
    });


})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))