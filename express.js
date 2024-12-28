const express= require('express')
const morgan=require("morgan")
const app= express()

app.use((req,res,next)=>{
    console.log("this is a middle ware")  //basically this function would run everytime we hit a route or request to the server
    return next()                            //basically middle ware has three times of parameters 
    
})
app.use(morgan("dev"))                                     //using of a third party middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))               //using built in middleware functions
app.use(express.static("public"))

app.set("view engine","ejs")                    //using of ejs to render a html file over the sever 
  


app.get('/',(req,res)=>{
    res.render("index")                            //rendering the index file

})

app.get('/about',(req,res)=>{
   res.send("this is about page")                 //rendering the index2 file the response will be the same as the index file
     
})
app.post("/formdata",(req,res)=>{
   console.log(req.body)
    res.send("data recieved")
})

app.listen(6969)

//middleware- middleware is a function that runs when we change a route or request the server for something then the 
              // middle ware function runs and what ever inside the function runs 