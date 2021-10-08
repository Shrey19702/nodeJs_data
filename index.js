const http= require('http'); // module http 
const port= 8000;

function requestHandler(req, res){    // function handles request givin to server
    console.log(req.url);  // req.url gives the url requested by  client
    res.writeHead(200, {'content-type':'text/html'}); // 200 is number tag for sucesssful, 404 for errors.... object contains data for output  
    res.end("<h1>hello this server is running on "+String(port)+" </h1>"); // res.end responds with the output(html)
}

const server = http.createServer(requestHandler); //server created on machine

server.listen(port, function(error){   //listen to the server created 
    if(error){
        console.log(error);
    }
    else{
        console.log('server running on port :',port);
    }
});
//localhost == 127.0.0.1
// all local servers run on ==> localhost:portnumber
// no output given so page doesn't load
// in this case it runs on 127.0.0.1:8000
// run the file using node command
// use ctrl+C to end the program 
