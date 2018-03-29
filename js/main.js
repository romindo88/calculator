"use strict";

/* Déplacement de la logique dans le sapui-core
var filepaths = ["js/lib/sapui-core-v-10.js","js/lib/calculator-core-v-02.js","js/lib/calculator-events-v-02.js"];

for (var i = 0; i < filepaths.length; i++) {
	var script = document.createElement("script");
	script.src = filepaths[i];
	document.write(script.outerHTML);
}
*/

//com.sapui.loadfiles(); Envoyé vers le sapui-core

var respJson;
function makeAjaxCall(url, methodType){
   var xhr = new XMLHttpRequest();
   xhr.open(methodType, url, true);
   xhr.send();
   xhr.onreadystatechange = function(){
     if (xhr.readyState === 4){
        if (xhr.status === 200){
           console.log("xhr done successfully");
           var resp = xhr.responseText;
           var respJson = JSON.parse(resp);
        } else {
          console.log("xhr failed");
        }
     } else {
        console.log("xhr processing going on");
     }
  }
  console.log("request sent succesfully");
}
// git hub url to get btford details
var URL = "https://api.github.com/users/btford";
makeAjaxCall(URL, "GET");
console.log(respJson);