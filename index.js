const http= require('http'); // module http 
const port= 8000;
const fs= require('fs'); //for readiing and writting in /from files

function requestHandler(req, res){    // function handles request givin to server
    console.log(req.url);  // req.url gives the url requested by  client
    res.writeHead(200, {'content-type':'text/html'}); // 200 is number tag for sucesssful, 404 for errors.... object contains data for output  
    
    fs.readFile('./index.html', function(error, data){        // reading the file index.html (error for an error in reading)
        if(error){
            console.log("error in loading html :", error);
            return res.end('<h1> Error </h1>')
        }
        else{
            return res.end(data);
        }
    });
    
    
    //res.end("<h1 style='red'>hello this server is running on "+String(port)+" </h1>"); // res.end responds with the output(html)
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
