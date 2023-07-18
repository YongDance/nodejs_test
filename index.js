const express = require('express')
const app = express()
const cors =require('cors')
const port =3000

app.use(cors())
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get( '/sound/:name',(req,res) =>{
   // const  q= req.params 
   // console.log(q.id) 

   const {name}= req.params
   if(name == "dog") {
     res.json({'sound': 'bowwow'})
   }
  else if(name == "cat") {
    res.json({'sound': 'mewmew'})
  }
  else if(name == "pig") {
    res.json({'sound': 'oink oink'})
  }
  else{
    res.json({'sound': 'unknown'})
  }


    console.log(name);
   
   res.json({'sound': '야옹'})  
})

app.get( '/cat',(req,res) =>{
  res.json({'sound': '멍멍'} )  
})





app.listen(port,() => {
   console.log('example app listening  on port 3000 ')
})