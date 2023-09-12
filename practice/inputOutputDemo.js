"use strict";  //do good javascript code
var readlineSync = require("readline-sync");
function main()
{
    //print one line
   console.log("Meatloag and Peanut are so cute!\thello piggies");
   console.log("hello piggy");

   //input section
   var name = readlineSync.question("What is your name?");

   //output section
   console.log("Hello, " + name + "!");
}

//not modify code below; use to trigger code above
if (require.main === module)
{
    main();
}