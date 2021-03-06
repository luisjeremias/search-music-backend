const express = require('express');
const app = express();
const Deezer = require('./api/helpers/deezer');
const deezer = new Deezer();
const port = 3333;
app.use(express.json());
app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  next();
})
app.get('/deezer/api',(req,res)=>{
  const query = req.query.q;
  const count = req.query.count;
  deezer.get(query,count).then((response)=>{
    res.status(200).send(response.data)
  }).catch((error)=>{
    res.status(400).send(error);
  })
})
app.listen(port,()=>{
  console.log('started ¯\_(ツ)_/¯')
})