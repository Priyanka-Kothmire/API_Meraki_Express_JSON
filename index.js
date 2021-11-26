const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.js');

// create express app
const app = express();
const PORT = 6000;
app.use(bodyParser.json());
app.get("/",(req,res) => res.send("hello"))
app.use('/courses',userRoutes);
app.listen ( PORT,() => {console.log(`Server Running on port:http://localhost:${PORT} `)})
