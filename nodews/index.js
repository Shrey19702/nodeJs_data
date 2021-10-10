const http= require('http');
const port= 8000;
const fs= require('fs');

function requestHandler(req, res){
    console.log(req.url);
    res.writeHead(200, {'content-type': 'text/html'});

    let pageloc;
    switch(req.url){
        case "/" :
            pageloc= 'index.html';
            break;
        case "/profile":
            pageloc= 'profile.html';
            break;
        default:
            pageloc= 'error.html'
    }

    fs.readFile(pageloc, function(error, data){
        if(error){
            return res.end('<h1>no page location found</h1>');
        }
        else{
            return res.end(data);
        }
    });
}

const server= http.createServer(requestHandler);

server.listen(port, function(error){

    if(error){
        console.log(error);
    }
    else{
        console.log("server working on port : ", port);
    }
});