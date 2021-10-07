const http= require('http'); // module http 
const port= 8000;

const server = http.createServer(); //server created on machine

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
