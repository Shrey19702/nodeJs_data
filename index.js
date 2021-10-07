// run the code from terminal in js folder by ==> node <filename>.js

console.log("hello .... to all") //outputs in terminal for console
console.log(process.argv) // object containing data on file and its running factors

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
