const express = require('express')
const cors = require('cors');
const { db } = require('./db/db');
const {readdirSync} = require('fs')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT || 5000

//middlewares
app.use(express.json())
app.use(cors())

//routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

const server = () => {
     db()
     app.listen(PORT, () => {
         console.log('listening to port:', PORT)
     })
}

// // server()
// const {readdirSync} = require('fs')
// const express = require('express');

// const app = express();
// readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))
// app.get('/', (req, res) => res.send('Hello world!'));

// const port = process.env.PORT || 5000;
// db()
// app.listen(port, () => console.log(`Server running on port ${port}`));

// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");

// // Setup express app
// const app = express();

// app.use(
//     bodyParser.urlencoded({
//         extended: false
//     })
// );

// app.use(bodyParser.json());

// // Configure Mongo
// const db = "mongodb://localhost/313-demo-mern-db";

// // Connect to Mongo with Mongoose
// mongoose
//     .connect(
//         db,
//         { useNewUrlParser: true }
//     )
//     .then(() => console.log("Mongo connected"))
//     .catch(err => console.log(err));

// // Specify the Port where the backend server can be accessed and start listening on that port
// const port = process.env.PORT || 5000;
// app.listen(port, () => console.log(`Server up and running on port ${port}.`));