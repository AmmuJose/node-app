var reqHandler = require("./userRequestHandler");

exports.readFile = function(){
    var fs = require("fs"); 
    fs.readFile("random.txt", "utf8", readFileResult); //read random.tex
};

function readFileResult(err, data){
    if(err){
        console.log(err);
        return;
    }
    var dataArr = data.split(', '); //command
    var command = dataArr[0];
    argument = dataArr[1].replace(/"/g, "").split(' '); //argument
    reqHandler.userInputHandler(command, argument, 'random');
}