const express = require("express");
const app = express();
const path = require('path');
const server = require('http').createServer(app);

app.use(express.static(path.resolve(__dirname, 'app/dist')));
app.get('/ccg-project', (req, res, next) => res.sendFile(path.join(__dirname, 'app/dist', 'index.html')));

server.listen(80, "0.0.0.0", () => {});