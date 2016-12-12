var fs  = require('fs')
var xml = require('xml')

module.exports = function(app) {
    app.get('/', rootRequest)
    app.get('/\\$metadata', metadata)
    app.get('/api/v2/package/:name/:version', downloadPackage)
    /*app.put('', createPackage)
    app.put('api/v2/package', createPackage)*/

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
    function downloadPackage(req, res) {
        // Get Url for package
        // redirect response to cloudfront url
        console.log(req.params.name)
        console.log(req.params.version)
    }
    function createPackage(req, res) {
        res.send("test")
    }

}