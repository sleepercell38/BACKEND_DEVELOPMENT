const mongoose= require("mongoose")            //here we require the mooongose which we installed
         
const userSchema= new mongoose.Schema({       // here we create the schema of the user data basicallly schema means that what would be the properties of our data being stored 
    username:String,                           
    email:String,
    password:String,
})

const User= mongoose.model("User",userSchema)  //here we create a model of the schema we created above

module.exports=User                             //here we export the model so that we can use it in other files