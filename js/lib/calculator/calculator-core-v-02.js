// all core behaviors of calculator
"use strict";

//com.sapui.initStructure("com.sapui.calculator") remplacer avec $
$.initStructure("com.sapui.calculator")

//var com={};
//com["sapui"]={};
//window["com"]= window["com"]||{}; changement pour initStructure
//com["sapui"]=com["sapui"]||{};    changement pour initStructure
//com.sapui.calculator={};          changement pour initStructure

var calc = com.sapui.calculator;
calc.screen = 0;
var mem = calc.mem={};
mem.history={pv2:0,pv1:0,v:0};
mem.mplus = function(valueToSave){
	this.pv2=this.pv1;
	this.pv=this.v;
	this.v+=valueToSave; }
mem.mminus = function(valueToTakeOff){
	this.pv2=this.pv1; //se refere à l'apply
	this.pv=this.v;
	this.v-=valueToTakeOff ;
};
mem.memshow = function(){
	calc.screen=this.v;  //se refere à l'objet
};
calc.clear = function(){
	this.screen=0;
};

var ops = calc.ops={};
calc.op = {};
calc.op.n1 = 1;
calc.op.n2 = 2;
calc.op.operator = "add";
calc.op.generic = function(){
	ops[this.operator](this.n1,this.n2);
	ops.generic.apply(calc.op);
}
ops.multi = function(v1,v2){
	return v1*v2
}

ops.divide = function(v1,v2){
	return v1/v2
}

ops.add = function(v1,v2){
	return v1+v2
}

ops.sub = function(v1,v2){
	return v1-v2
}

