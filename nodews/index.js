const http= require('http'); // module http 
const port= 8000;
const fs= require('fs'); //for readiing and writting in / from files

function requestHandler(req, res){    // function handles request givin to server
    
    console.log(req.url);  // req.url gives the url requested by  client  ex.->  /profile
    res.writeHead(200, {'content-type':'text/html'}); // 200 is number tag for sucesssful, 404 for errors.... object contains data for output  

    let pageloc;  //we will location of the required page here
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

    fs.readFile(pageloc, function(error, data){      // reading the file index.html (error for an error in reading)
        if(error){
            return res.end('<h1>no page location found</h1>');  //return this html to it if wrong file 
        }
        else{
            return res.end(data);  // return data containing html from the location 
        }
    });
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
