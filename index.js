// 시작점
const express = require('express') // express 모듈을 가져온다.
const app = express()   // function을 이용해서 app을 만들고
const port = 5000 // 포트 설정

const {User} = require('./models/User');
const bodyParser = require('body-parser');

//bodyPaser가 클라이언트에서 오는 정보를 서버에서 분석해서 가져올 수 있게 해주는건데

// 이부분은 aplication/x-www-form-urlencoded 타입
app.use(bodyParser.urlencoded({extended : true}));

//aplicaiton/json 타입 
app.use(bodyParser.json());


const config = require('./config/key');
 

const mongoose = require('mongoose')

mongoose.connect(config.mongoURI, {
  useNewUrlParser : true, useUnifiedTopology : true, useCreateIndex : true, useFindAndModify : false
}).then(()=> console.log('mongoose connect')) 
  .catch(err=>console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요오오 안녕하세요')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


app.post('/register', (req, res)=>{

  // 회원가입시 필요한 정보들을 클라이언트에서 가져오면 그것들을 데이터베이스에 넣어준다.


  {

  }
  const user = new User(req.body) // bodyParser가 있어서 받을 수 있음

  user.save((err, doc)=>{
    if(err) return res.json({success : false, err})
    return res.status(200).json({
      success : true
    })
  })

})
// npm install body-parser --save

// postman 다운

// register router 생성

