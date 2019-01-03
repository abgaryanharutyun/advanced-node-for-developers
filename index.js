const cluster = require('cluster');
process.env.UV_THREADPOOL_SIZE = 1;
if (cluster.isMaster){
    cluster.fork();
    cluster.fork();
}else{
    const express = require('express');
    const crypto = require('crypto');
    const app = express();
    function doWork(duration) {
        const start = Date.now();
        while(Date.now()-start < duration) {}
    }
    
    app.get('/', (req, res) => {
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', ()=> {
        res.send('Hi there')
        });
    });


    app.get('/fast', (req, res) => {
        res.send('This was fast')
    })
    
    
    app.listen(3000);

}
