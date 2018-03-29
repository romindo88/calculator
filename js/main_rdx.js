"use strict";

var jslist = ["js/lib/sapui-core-v-10.js","js/lib/calculator-core-v-02.js","js/lib/calculator-events-v-02.js"];

function loadScripts(src){
        var script = document.createElement("script");
        script.src = src;
        
        document.write(script.outerHTML);
    };

for (var i = 0; i < jslist.length; i++) {
	loadScripts(jslist[i]);
}