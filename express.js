const express= require('express')
const app= express()

app.set("view engine","ejs")    //using of ejs to render a html file over the sever 
  
app.use((req,res,next)=>{
    console.log("this is a middle ware")  //basically this function would run everytime we hit a route or request to the server
    return next()       //basically middle ware has three times of parameters 
})

app.get('/',(req,res)=>{
    res.render("index")         //rendering the index file
    res.send("welcome to homepage")
})

app.get('/about',(req,res)=>{
    res.render("index2")         //rendering the index2 file the response will be the same as the index file
    res.send("welcome to about page")
})

app.listen(6969)


//middleware- middleware is a function that runs when we change a route or request the server for something then the 
              // middle ware function runs and what ever inside the function runs 