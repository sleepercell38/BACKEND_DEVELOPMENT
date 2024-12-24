const express= require('express')
const app= express()

app.get('/',(req,res)=>{
    res.send("welcome to homepage")
})

app.get('/about',(req,res)=>{
    res.send("welcome to about page")
})

app.listen(5000)