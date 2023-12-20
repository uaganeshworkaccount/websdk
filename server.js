// Variables
var path = require('path');
var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var jwtlib = require('jsonwebtoken');
//Configure port
var port=8080;

//App directories
var PROJECT_DIR = path.normalize(__dirname);

app.use('/',express.static(path.join(PROJECT_DIR, '')));

http.listen(port, function(){
    console.log('Sample Application runnning at http://localhost:'+port+'/UI');
});

app.get('/sts', (req, res) => 
{ 
res.set( {  
    'Content-Type': 'application/json', 
    "Access-Control-Allow-Origin":"*", 
    "Access-Control-Allow-Headers":"*",  
    "Access-Control-Allow-methods":"*"
});  
const jwt = generateJWTForOTTBot(); 
data = {jwt:jwt}; 
res.send(JSON.stringify(data));
})


  function generateJWTForOTTBot(){ 
    const payload = {
        "iat": (new Date().getTime())/1000,
        "exp": (new Date().getTime())/1000+86400,
        "aud": "https://idproxy.kore.ai/authorize",
        "iss": "cs-7e0ea58c-c4c5-5687-b94a-eee0399677d9",
        "sub": "example@gmail.com"
        } 
    const secret = "FzSYWsTqi09TJI99ZxaxpcCun5+FelNQHPvlhdcKB44=";  
    var token = jwtlib.sign(payload, secret); 
    return token;	}