import xpress from 'express'
import dotenv from 'dotenv'
import { connectDb } from './config/db';
import bodyParser from 'body-parser'
import validateToken from './lib/validateToken';
import moment from 'moment';

import users from './controller/usersCtrl'
import login from './controller/login'
import category from './controller/categoryCtrl'
import article from './controller/articleCtrl';

let app = xpress()
dotenv.config()

var server   = require('http').Server(app);
var io       = require('socket.io')(server);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req,res,next){
  req.io = io;
  next();
});

app.get('/', (req, res)=>{
  var message = 'Hello World. This is my articles.!!'
  res.send(message);
})

app.get('/tes', (req, res)=>{
  var message = moment()
  res.send(message);
})
// app.use('/names', (req,res,next)=>{
//     res.json()
// })

app.use('/api/login', login)

app.use('/api/v1/', validateToken)

app.use('/api/v1/users', users)
app.use('/api/v1/category', category)
app.use('/api/v1/article', article)

io.on('connection', function (socket) {
  socket.emit('tes')
});

connectDb().then(async () => {
  var server = app.listen(process.env.PORT || 6500, function () { 
    var host = server.address().address  
    var port = server.address().port  
    console.log("Example app listening at http://%s:%s", host, port)  
  })  
});