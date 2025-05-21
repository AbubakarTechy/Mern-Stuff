const http=require("http");

const server=http.createServer(function(req,res){
    res.end("Hellllllllo from server");
})

const port=3000;
console.log(`Server is on: ${port}`);