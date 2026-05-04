const express=require('express');

const app=express();

const PORT=3000;
app.length('/',(req,res)=>{
    res.send('Helo World')
})

app.listen(PORT,()=>{
    console.log('serverbis running on http://localhost:${PORT}');
})