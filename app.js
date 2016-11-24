var express = require('express')
var app = express()
var port = 3000
require('./routes')(app);
app.listen(port, function() {
    console.log('Example app listening on port ' + port)
})