// all common functions to configure modules
"use strict"
// var com={}; changement de var par window
window.com = {};
//com["sapui"]={v:10}; remplacé dans $
// alias of com.sapui
var $= com.sapui={v:10};

$.initStructure=function (libPath){
var root = window
var structure = libPath.split(".")
for (var i = 0; i < structure.length; i++) {
    root[structure[i]]=root[structure[i]]||{};
    root= root[structure[i]];
    }
}


//$.loadfiles=function(){
//var filepaths = ["js/lib/calculator/calculator-core-v-02.js","js/lib/calculator/calculator-events-v-02.js"];
//
//for (var i = 0; i < filepaths.length; i++) {
//	var script = document.createElement("script");
//	script.src = filepaths[i];
//	document.write(script.outerHTML);
//}
//}

//$.loadfiles();
 com.sapui.initConf = function(configuration){
 		var filePath = {}
		for (var j = 0; j < configuration.modules.length; j++){
			 var mod = configuration.modules[j];
			 if (mod.active) {
			 	for( var k = 0; k < mod.src.length; k++) {
					filePath  = mod.rootpath + mod.src[k]
					var script = document.createElement('script')		
					script.src = filePath;
					document.write(script.outerHTML);
				}
			 }

		}
}
$.conf= function(config){
	console.log(config.application)
}
$.makeAjaxCall =function (url, methodType){
   var xhr = new XMLHttpRequest();
   xhr.open(methodType, url, true);
   xhr.send();
   xhr.onreadystatechange = function(){
     if (xhr.readyState === 4){
        if (xhr.status === 200){
           var resp = xhr.responseText;
           $.conf(JSON.parse(resp));
        }  
        
     }
  }
}

//var conf define in manifest.js
$.initConf(conf)