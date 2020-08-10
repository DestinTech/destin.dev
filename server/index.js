const express = require('express');
var http = require('http');
const path = require('path');
const fs = require('fs');

let portNo = 3001;

const app = express();

// Allow dotfiles - this is required for verification by Lets Encrypt's certbot
app.use(express.static(path.join(__dirname, 'build'), {dotfiles: 'allow'}));

// include the public directory, use __dirname to prevent cross system conpatability issues


app.use(express.static(path.join(__dirname ,"/public")));

app.use(function(req,res,next){
	res.status(404).sendFile(path.join(__dirname + "/public/404.html"));
});
console.log(`server created at port number: ${portNo}`)
app.listen(portNo);