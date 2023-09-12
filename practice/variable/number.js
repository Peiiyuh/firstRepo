"use strict";  //do good javascript code
var readlineSync = require("readline-sync");
function main()
{
   var total = (36 - 12) / 4;
   console.log(total);

   //input and variable section
   var salary = parseFloat(readlineSync.question("What is your weekly salary?"));
   var bonus = parseFloat(readlineSync.question("What is your bonus?"));

//processing section
   var weeklyPay= salary + bonus;


   //output section
   console.log("Your weekly pay is : $ " + weeklyPay );
}

//not modify code below; use to trigger code above
if (require.main === module)
{
    main();
}