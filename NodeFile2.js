var fileSystem = require('fs');


fileSystem.open("./mytxt.txt", 'w', function (error, file) {
    if (error) {
        throw error;
    }
})
fileSystem.writeFile("mytxt.txt", "hello world", function (error) {
    if (error) {
        console.log(error)
    }
})
fileSystem.appendFile("mytxt.txt", "\nMy text file created using node jsS", function (error) {
    if (error) {
        throw error;
    }

})
console.log("Completed till Appendfile")
fileSystem.rename("mytxt.txt", "txt1", function (error) {
    if (error) {
        console.log(error);
    }
})


console.log("Completed till Renamer")

setTimeout(() => {
    fileSystem.unlink("txt1", function (error) {
        if (error) {
            console.log(error)
        }
    })

}, 5000);