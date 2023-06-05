const http = require('http');
const app = require('./app');
const port = 3000;

const server = http.createServer(app);

module.exports = server.listen(port, () => {   ///exporting for api.spec.js (for chai.request)
    console.log(`App is listening at http://localhost:${port}`);
})
