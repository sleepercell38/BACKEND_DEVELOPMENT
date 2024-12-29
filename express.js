const express= require('express')
const morgan=require("morgan")
const app= express()
const databaseconnections = require("./config/db")
const User= require("./models/user")

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

app.get("/register",(req,res)=>{
    res.render('form')
})
app.post("/register",async(req,res)=>{              //CRUD OPERATIONS - Creating the userdata in the database by bringing the data from the frontend to the server
     const {name , email , password} = req.body
    const data=  User.create({
         username :name,
            email:email,
            password:password,
      })
        res.send("data recieved")
})

app.get("/readdata",(req,res)=>{
       User.find({                              //CRUD OPERATIONS - Reading the data from the datatbase
        username:"vishal"                      // basically to read the database data we gave two types of rading technique
       }).then((user)=>{                      //1- find() gets you as many data as the condition fullfills or all the datav if there is no condition
        res.send(user)                       // 2- findOne() gets you only one data 
       })
})



app.get("/update", async(req,res)=>{
    await  User.findOneAndUpdate({               // updating a data in the database 
        username:"vishal"
    },{
        email :"vishalpillai04@gmail.com"
    }).then((user)=>{                           //remember the update method is an async function so we have to use the then method to get the data
        res.send(user)
    })
    }
  
)

app.get("/delete",async(req,res)=>{
     await User.findOneAndDelete({
        username : "vishal"                      //deleting a data from the database
     }).then((user)=>{
        res.send(user)
     })
})
 app.get("/updation",(req,res)=>{
    res.render("updation")
 })

app.post("/updation",(req,res)=>{
    const {name , email , password} =req.body
    User.findOneAndUpdate({
        username:name
    },{
        email:email,
        password:password
    }).then(res.send("userdata has been updated"))
})


app.listen(6969)

//middleware- middleware is a function that runs when we change a route or request the server for something then the 
              // middle ware function runs and what ever inside the function runs 