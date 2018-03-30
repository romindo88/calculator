//all events declaration for calculator
// these events will link  the ui to the behaviors
"use strict"
//window["com"]= window["com"]||{};
//com["sapui"]=com["sapui"]||{};
//com.sapui.calculator=com.sapui.calculator||{};
//com.sapui.calculator.events={}

var lib = "com.sapui.calculator.events"
$.initStructure(lib)
var $events = com.sapui.calculator.events

$events.binding = function(config){
	var $screen = $.find("cal screen")[0];
	$screen.innerText = 0;
	$.find("cal digits dig[event]").forEach( function(currentElement){
		
		var property=config.pad.digits[currentElement.getAttribute("event")];
		currentElement.style.background = property.color
		
	}
		)

	$.find("cal operators op").forEach( function(currentElement){
		
		var property=config.pad.ops[currentElement.getAttribute("event")];
		currentElement.style.color = property.color
		currentElement.addEventListener(property.event,function(){
				$screen.innerText+= this.innerText;
			})
		
	}
		)

	$.find("cal digits dig").forEach( function(currentElement){
		var property=config.pad.default;
		if (currentElement.getAttribute("event")==undefined){
			currentElement.style.color = property.color
			currentElement.addEventListener(property.event,function(){
				if ($screen.innerText=="0") $screen.innerText = this.innerText;
				else $screen.innerText+= this.innerText;
			})
		}
				
	}
		)
	
}