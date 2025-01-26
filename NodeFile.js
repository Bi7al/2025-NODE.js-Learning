var http = require('http');
var fileSystem = require('fs');
http.createServer(function (req, res) {
    fileSystem.readFile("./index.html", function (error, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        if (error)
            console.log(error);
        else
            res.write(data);


    })

    res.end();
}).listen(8080);

/*
The File system Module :
Import module using require.
1. ReadFile : arguments : filename, callback function
    The call back function returns data and error (if any)
2. AppendFile: arguments : filename, data to be written ,function error (if any)
    The function appends the data to the specified file. If the file does not exist then it creates the file and appends the data.
3. Open : arguments : filename , flag ,function ( error ) (if any)
    The open file takes a flag e.g 'w' for writing. If no file is present it  creates the file.
4. writeFile : argument : filename , data to be written , function (error ) if any
    The writeFile open files and replaces the content. If the file is not present it creates the file with specified content.
5. rename : arguments : filename , newname , funtion error 
6. unlink : arguments : filename , function error

*/