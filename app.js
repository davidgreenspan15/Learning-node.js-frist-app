// import log function from logger.js
const log = require('./logger.js')

function sayHello(name){
  console.log("hello " + name)
}
sayHello('World')

log('message')

// learning to require modules
const path = require('path')
const pathObj = path.parse(__filename)
 console.log(pathObj);
 // learning to require os

const os = require('os')
const totalMemory = os.totalmem()
const freeMemory = os.freemem()

console.log(totalMemory);
console.log(freeMemory);

// learning to require filesystem
const fs = require('fs')

const files = fs.readdirSync('./')

console.log(files);
