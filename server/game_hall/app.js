var Service = require("./s_hall");
var configRedis = require("../configRedis");
var configMysql = require("../configMysql");
new Service(3000, configRedis, configMysql);

console.log("LET'S ROCK NOW!", "Listen Port:", 3000);
process.on('uncaughtException', function (err) {
    console.log('uncaughtException Start:');
    console.log(err);
    console.log('uncaughtException End!');
});

//http://192.168.238.128:3000/signup?account=z1&password=123456&name=zzz1
//http://192.168.238.128:3000/signin?account=z1&password=123456