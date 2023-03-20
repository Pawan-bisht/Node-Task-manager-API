const express = require("express");
const path = require("path");
const app = express();
const taskRoutes = require('./routes/tasks');
const publicPath = path.resolve(__dirname);
const connectDB = require('./db/connect');
require('dotenv').config();

//middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('./public'));

//routes routes
app.use('/api/v1/tasks', taskRoutes);


// app.get('/about', (req, res) => {
//     // res.status(200).send('Home Page')
//     res.sendFile(path.resolve(__dirname, './public/About.html'))
// })

// app.all('*', (req, res) => {
//     return res.status(400).send('We dont find any resource you are looking for');
// })

const PORT = 3000;

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URL);
        app.listen(PORT, (req, res) => {
            console.log("Server is running at 5000...");
        })
    } catch (err) {
        console.log('Error',err);
    }
} 

start();
