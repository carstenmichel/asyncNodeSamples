 var rpn = require("request-promise-native")
 var async = require('async');
 
 function conc(string_a, string_b) {
     return string_a + " " + string_b;
 }

 function getPromisedTimestamp() {
     return new Promise(function(resolve,reject){
        setTimeout(function() {
            console.log('delayed timestamp');
            var myDate = new Date();
            resolve(myDate);
          }, 3000);
        
     })
 }

 async function waitForPromisedTimestamp() {
    returned = await getPromisedTimestamp();
    return returned;
 }



 getXKCD = async () => {
    let result = await rpn.get({
       url: `https://xkcd.com/614/info.0.json`,
       json: true
    })
    return result;
 }


async function waitForXKCD() {
    res = await getXKCD();
    console.log("Result is " + res.safe_title);
}
 console.log ("Starting Samples");

 console.log ("Test 1");
 console.log (conc("stringa", "stringb"));

 console.log ("Test 2");
 waitForPromisedTimestamp().then((retVal) => {
    console.log ("Finished waiting")
    console.log (retVal)
    console.log ("leaving Promise handling")
 })

 console.log("Test 3 remote");
 waitForXKCD();
 