const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        fs.readFile("./index.html", (err, data) => {
            res.setHeader("Content-Type", "text/html");    
            res.end(data);
        });
    } else if (req.url === "/images/cat.jpg") {
        res.setHeader("Content-Type", "image/jpeg");  
        fs.readFile("./public/images/cat.jpg", (err, image) => {
          res.end(image);
        });
    } else if (req.url === "/styles/main.css") {
        res.setHeader("Content-Type", "text/css");  
        fs.readFile("./public/styles/main.css", (err, data) => {
          res.end(data);
        });
    } else {
    res.statusCode=404;
    res.end('Page not found!');}
});


server.listen(3000);
console.log('Server is run!')