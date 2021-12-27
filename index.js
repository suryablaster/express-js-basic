const express = require('express');


const port = 9000;

 const app = express();

 app.set('view engine','ejs' );

app.get('/',(req,res)=>{
    res.send("booyah!!");
})

app.listen(port,(err) =>{
    if(err) {console.log("error",err)}
    console.log("server is running on port",port);
})

