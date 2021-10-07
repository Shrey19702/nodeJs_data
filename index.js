console.log("hello .... to all")
console.log(process.argv)

function fact(n){
    if(n==1){
        return 1;
    }
    else if(n==0){
        return 0;
    }
    return fact(n-1)+fact(n-2);
}
console.log(fact)

//use--> node <filename.js> to run the file 
