// 'use strict'
/*引入https与fs模块*/
var https = require('https');
var fs = require('fs');/*读取证书*/

var options = {
  key  : fs.readFileSync('./config/www.bigstar.cloud.key'),
  cert : fs.readFileSync('./config/www.bigstar.cloud.crt')
}
/*创建https服务：传入options-证书*/
var app = https.createServer(options,function(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello World!\n');

}).listen(443, '0.0.0.0');
