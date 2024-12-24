const http= require("http");  // the work of the require statement is to import the http module from the node.js library (node modules)

const server= http.createServer((req, res)=>{     //here we create the server using the create server method
    if(req.url=="/"){
          res.end("welcome to homepage")
    }
    if(req.url=="/about"){
        res.end("welcome to about page")
    }
})
server.listen(3000)
