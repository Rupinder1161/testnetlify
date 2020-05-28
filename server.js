const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors');
const axios = require('axios')
 const path = require('path')

// const items = require('./routes/api/items');


const app = express();
app.use(cors());
app.use(bodyParser.json());

// const ul = process.env.MONGO
// console.log(typeof(ul))
const uri = 'mongodb+srv://Gurpreet:Singh@cluster0-e7gcr.gcp.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);

const port = process.env.PORT || 5000;


mongoose.connect(uri)
.then(()=> console.log('mongoDb connected'))
.catch(err => console.log(err));

 const excerciseRouter = require('./routes/excercises');
 const FoodRouter = require('./routes/food')
 app.use('/excercises',excerciseRouter);
app.use('/food',FoodRouter)


app.get('/api',(req,res) =>{
  const g = [{"message": "Hello json"},{"message": "Hello json"},{"message": "Hello json"},{"message": "Hello json"}]
res.send(g)
})


if(process.env.NODE_ENV === 'production'){
app.use(express.static('jagtari/build'));

app.get('*',(req,res) =>{
      res.sendFile(path.resolve(__dirname,'jagtari','build','index.html'))
})
}





app.listen(port , () => console.log(`server started on ${port}`))