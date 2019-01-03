const http = require('http');

const start = Date.now();

function doRequest() {
    http
        .request('https://www.google.com', res => {
            res.on('end', () => {
                console.log(Date.now() - start);
            })
        })
        .end()
}

doRequest();
doRequest();
doRequest();
doRequest();
doRequest();