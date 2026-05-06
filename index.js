const express=require('express');

const app=express();

const PORT=3000;
app.length('/',(req,res)=>{
    res.send('Hello sakshi')
})


app.listen(PORT,()=>{
    console.log('serverbis running on http://localhost:${PORT}');
})