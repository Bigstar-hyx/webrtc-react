// 'use strict'

var http = require('http')
var https = require('https')
var fs = require('fs')

const express = require('express')
const app = express()
app.use(express.static(__dirname))
app.listen(3000, function () {
  console.log('本地服务器启动 .....')
})

//http server
var http_server = http.createServer(app)
http_server.listen(80, '0.0.0.0')

var options = {
  key: fs.readFileSync('./config/www.bigstar.cloud.key'),
  cert: fs.readFileSync('./config/www.bigstar.cloud.crt')
}

//https_server
var https_server = https.createServer(options, app)
https_server.listen(444, '0.0.0.0')
