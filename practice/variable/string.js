"use strict";  //do good javascript code
var readlineSync = require("readline-sync");
function main()
{
   //string and number
   var name = "Pei";

   console.log(name);

   var firstName = readlineSync.question("What is your first name?");
   var lastName = readlineSync.question("What is your last name?");
   console.log("Hello " + firstName.toLowerCase() + " " + lastName);

   firstName ="Bob";
   lastName ="huu"; 
   console.log("Hello " + firstName.toUpperCase() + " " + lastName);

}

//not modify code below; use to trigger code above
if (require.main === module)
{
    main();
}