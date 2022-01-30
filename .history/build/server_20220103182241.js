// 'use strict'

var http = require('http')
var https = require('https')
var fs = require('fs')

// var express = require('express')
// var serveIndex = require('serve-index')

// var app = express()
// app.use(serveIndex('./src'))
// app.use(express.static('./src'))

const express = require('express')
const app = express()
app.use(express.static(__dirname))
// app.listen(3000, function () {
//   console.log('服务器启动 port 3000 .....')
// })

//http server
var http_server = http.createServer(app)
http_server.listen(8000, '0.0.0.0')

var options = {
  key: fs.readFileSync('./config/www.bigstar.cloud.key'),
  cert: fs.readFileSync('./config/www.bigstar.cloud.crt')
}

//https_server
var https_server = https.createServer(options, app)
https_server.listen(444, '0.0.0.0')
