const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors');
const axios = require('axios')
 const path = require('path')




const app = express();
app.use(cors());
app.use(express.json());

const uri = require('./config/index').MONGO_URI

mongoose.connect(uri, { useNewUrlParser:true, useCreateIndex: true, useUnifiedTopology:true }
);

const port = process.env.PORT || 5000;


mongoose.connect(uri)
.then(()=> console.log('mongoDb connected'))
.catch(err => console.log(err));




 const excerciseRouter = require('./routes/excercises');
 const FoodRouter = require('./routes/food')
 app.use('/excercises',excerciseRouter);
 app.use('/food',FoodRouter)


// app.get('/api',(req,res) =>{
//   const g = [{"message": "Hello json"},{"message": "Hello json"},{"message": "Hello json"},{"message": "Hello json"}]
// res.send(g)
// })

app.use(express.static(path.join(__dirname, 'jagtari/build')));


if(process.env.NODE_ENV === 'production'){
  app.use(express.static('jagtari/build'));
  
  app.get('*',(req,res) =>{      
        res.sendFile(path.join(__dirname,'/jagtari/build/index.html'))
  })
  }






app.listen(port , () => console.log(`server started on ${port}`))