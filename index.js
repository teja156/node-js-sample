var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  var toDisp = "Name : P. Teja Swaroop\n Regno : 17MIS1003\n Course : M.Tech integrated software engineering\n Year of Graduating : 2022";
  response.send(toDisp+"\n"+"__");
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
