const express= require('express')
const morgan=require("morgan")
const app= express()

app.use((req,res,next)=>{
    console.log("this is a middle ware")  //basically this function would run everytime we hit a route or request to the server
    return next()       //basically middle ware has three times of parameters 
    
})
app.use(morgan("dev"))  //using of a third party middleware

app.set("view engine","ejs")    //using of ejs to render a html file over the sever 
  


app.get('/',(req,res)=>{
    res.render("index")         //rendering the index file
    // res.send("welcome to homepage")
})

app.get('/about',(req,res)=>{
   res.send("this is aabout page")        //rendering the index2 file the response will be the same as the index file
    // res.send("welcome to about page")
})
app.get("/get-form-data",(req,res)=>{
   console.log(req.query)
    res.send("data recieved")
})

app.listen(6969)

//middleware- middleware is a function that runs when we change a route or request the server for something then the 
              // middle ware function runs and what ever inside the function runs 