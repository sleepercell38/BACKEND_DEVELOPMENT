const mongoose = require('mongoose');

mongoose.connect("mongodb://0.0.0.0:27017/BACKEND", )
.then(() => {
  console.log("Database connected");
})


module.exports = mongoose.connection;
