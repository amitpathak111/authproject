var cluster = require('cluster');
var numCPUs = (require('os').cpus().length)/2 ;

if (cluster.isMaster) {

    console.log('Master cluster setting up ' + numCPUs + ' workers...');

    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('online', function(worker) {

        console.log('Worker ' + worker.process.pid + ' is online');
    });

    cluster.on('exit', function (worker, code, signal) {

        console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);

        console.log('Starting a new worker');

        cluster.fork();
    });
} 
else {    

    require("./server.js");       
}