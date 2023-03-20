const mongoose = require("mongoose");

// Mongodb's Pattern on cloud :   Project(Name) --> Cluster(s) --> Database(s) --> Collection(s) --> Document(s)
const connectDB = (url) =>{
    return mongoose.connect(url); // return a Promise
}



module.exports = connectDB;