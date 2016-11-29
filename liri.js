var reqHandler = require("./userRequestHandler");
var userInput1 = process.argv[2];
var userInput2 = process.argv[3];
// calls API's' depends on user input
reqHandler.userInputHandler(userInput1, process.argv, 'liri');