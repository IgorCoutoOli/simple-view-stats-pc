const http = require('http');
const viewStats = require('./viewStats');

http.createServer((req, res) => {
    let url = req.url;
    
    switch(url) {
        case '/stats':
            res.end(JSON.stringify(viewStats, null, 2));
        default:
            res.end('not found');
    }

}).listen(4001, () => console.log(`Server is running`));