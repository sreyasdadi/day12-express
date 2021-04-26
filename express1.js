const { response } = require('express');
const express= require('express');
const fs = require("fs");
const app = express();
const port =6400;



app.get('/',(req,res)=>{
    res.send('hello');
})
app.get('/movies',(req,res)=>{
    fs.readFile("./db.json",(err,result)=>{
        if(err) throw err;
        res.send(JSON.parse(result));
    })
})
app.listen(port, (err)=>{
    if(err) throw err;
    console.log('server is running on port')
})