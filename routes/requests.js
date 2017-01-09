var express = require('express');
var router = express.Router();

function populateData(req) {
    var data = {};
    data.method = req.method;
    data.server = req.hostname;
    data.port = req.port;
    data.baseUrl = req.baseUrl;
    data.path = req.path;
    data.params = req.params;
    data.query = req.query;
    data.body = req.body;
    data.headers = req.headers;
    data.cookies = req.cookies;
    return data;
}

router.get('/', function (req, res, next) {
    //curl -X GET -H "Accept: application/json" -H "Cache-Control: no-cache" -H "Postman-Token: 83dc91f0-c080-7847-36ae-b298d34c693d" "http://localhost:3000/requests?a=b"
    var data = populateData(req);
    console.log(JSON.stringify(data));
    res.status(200).json(data);
});

router.post('/', function (req, res, next) {
    //curl -X POST -H "Accept: application/json" -H "Content-Type: application/json" -H "Cache-Control: no-cache" -H "Postman-Token: e65bc5ac-987d-3915-026f-55564f54f5cc" -d '{"foo":"bar"}' "http://localhost:3000/requests?a=b"
    var data = populateData(req);
    console.log(JSON.stringify(data));
    res.status(200).json(data);
});

module.exports = router;