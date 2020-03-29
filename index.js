path = require('path')
const express = require('express')
const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.resolve()))
app.get('/',function(req,res){
    res.sendFile('index.html')
})
const port = process.env.port || 3000;
 
app.listen(3000,function(){
    console.log('Running')
})