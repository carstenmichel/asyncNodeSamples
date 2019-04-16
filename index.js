 var rpn = require("request-promise-native")
 var async = require('async');
 var debug = require('debug')
 
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

 waitForPromisedTimestamp = async () => {
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

async function waitForTimestamp() {
   let retVal = await waitForPromisedTimestamp()
   console.log ("Finished waiting")
   console.log (retVal)
   console.log ("leaving Promise handling")
}

async function waitForXKCD() {
    res = await getXKCD();
    console.log("Result is " + res.safe_title);
}


async function waitCombined() {
   console.log ("starting combined wait now")
   let retVal = await waitForPromisedTimestamp()
   console.log ("received the timestamp %o", retVal)
   let res = await getXKCD()
   console.log ("received data %s " , res.safe_title)
}
 console.log ("Starting Samples");

 console.log ("Test 1");
 console.log (conc("stringa", "stringb"));

 console.log ("Test 2");
 waitForTimestamp();

 console.log("Test 3 remote");
 waitForXKCD();

 setTimeout(() => {
   console.log('wait a bit');
    }, 3000);
 waitCombined()