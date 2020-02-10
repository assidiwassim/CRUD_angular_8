var express =require("express")
var cors =require("cors")
var path = require('path')
var bodyParser =require("body-parser")
var app =express()
var mongoose =require("mongoose")

var cookieParser = require('cookie-parser'); 

var Users =require('./routes/users')
var Concours =require('./routes/concours')


mongoose.Promise = global.Promise;
var port = process.env.PORT || 3001
app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

const URL ="'mongodb://localhost:27017/db"

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(URL)
.then(() => console.log("MongoDB is connected"))
.catch(err =>console.log(err))

mongoose.set('useCreateIndex', true);


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/users', Users);
app.use('/concours', Concours);

app.listen(port, () => {
    console.log("server is running" +port)
})
module.exports = app;


