let express = require("express")
let app = express()
app.listen("8080")

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("node_modules"))
app.use(express.static("public"))

app.get("/dogs",function(req, res){
    res.send([{name:"Rex",age:3}, {name:"Darcy", age:5}])
})