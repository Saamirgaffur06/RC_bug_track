const express = require("express");
const mongoose = require('mongoose');
const app = express();
const userRoute = require('./routes/user.js')
const cors=require("cors");
const connectDB = async () =>{
    try{
        const conn = await mongoose.connect("mongodb://127.0.0.1:27017/bug");
        console.log(`connected to db `);
    }
    catch (err){
        console.log(err);
    }
}
connectDB();
app.use(express.json());

app.use(cors())
app.use('/api/v1/auth',userRoute);
app.get("/",(req,res)=>{
    res.send('<h1>welcome</h1>');
});
const PORT = 3000;

app.listen(PORT,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(`Port Connected ${PORT}`);
    }
})