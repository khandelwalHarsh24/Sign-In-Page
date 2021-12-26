const express=require('express');
const app=express();
const data=require('./route/route');
const connectdb=require('./Db/data')
require('dotenv').config();
const port=process.env.PORT || 2000;
app.use(express.static('./public'));
app.use(express.urlencoded({extended: false}));

app.use(express.json())

app.use('/api/data',data);

const start=async ()=>{
    try {
        await connectdb(process.env.MONGO_URI);
        app.listen(2000,console.log(`Server Listening To The Port 2000`));
    } catch (error) {
        console.log(error);
    }
}

start();