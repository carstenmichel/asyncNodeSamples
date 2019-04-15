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





 console.log ("Starting Samples");

 console.log ("Test 1");
 console.log (conc("stringa", "stringb"));

 console.log ("Test 2");
 waitForPromisedTimestamp().then((retVal) => {
    console.log ("Finished waiting")
    console.log (retVal)
    console.log ("leaving Promise handling")
 })