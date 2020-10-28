// 시작점
const express = require('express') // express 모듈을 가져온다.
const app = express()   // function을 이용해서 app을 만들고
const port = 5000 // 포트 설정
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jaeho:mongoDBQWE@cluster0.8dnaj.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser : true, useUnifiedTopology : true, useCreateIndex : true, useFindAndModify : false
}).then(()=> console.log('mongoose connect')) 
  .catch(err=>console.log(err))

const userSchema = mongoose.Schema({
    name : {
      type : String,
      maxlength : 50
    },
    email : {
      type : String,
      trim : true,
      unique : 1
    },
    password : {
      type : String,
      minlength : 5
    },
    lastname : {
      type : String,
      maxlength : 50
    },
    role : {
      type : Number,
      defalut : 0
    },
    image : String,
    token : {
      type : String
    },
    tokenExp : {
      type : Number
    }
})

const User = mongoose.model('User', userSchema);

module.exports = {User};

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})