var fs = require('fs')
var xml = require('xml')

module.exports = function(app) {
    app.get('/', rootRequest)
    app.get('/\\$metadata', metadata)

    function rootRequest(req, res){
        fs.readFile('./rootresponse.xml', 'utf8', function(err, data){
            var response = data.replace('{base_url}', req.protocol + '://' + req.get('host') + req.originalUrl)
            res.send(xml(response))
        })
    }
    function metadata(req, res){
        fs.readFile('./metadata.xml', 'utf8', function(err, data){
            res.send(xml(data))
        })
    }
}