const fs= require("fs");

//Write a file

fs.writeFile("bkr.txt" , "Ye meeeee hun yr" , function(err){
    if(err) console.log(err);
    console.log("Done");
})

//Read a file
fs.readFile("abu.txt", function(err, data){
        if(err) console.log(err);
        console.log(`File is${data}`);
})


//Append a file

fs.appendFile("bkr.txt", "add more details" , function(err){
    if(err) console.log(err);
    console.log("Done hai");
})


// //Rename file
fs.rename("bkr.txt","abu.txt", function(err){
    if(err) console.log(err);
    console.log("Ho gyi rename");
})

//Copyfile

fs.copyFile("abu.txt" ,"CopyItems.txt" , function(err){
    if(err) console.log(err);
    console.log("Done");

} )


//Unlink (delete) file

fs.unlink("CopyItems.txt" , function(err){
    if(err) console.log(err);
    console.log("Ho gyi del");
})
