var conf={ 
	application:"calculator",
	version:"12",
	modules: [{
		name:"calculatrice",
		rootpath:"js/lib/calculator/",
		version:"v-02",
		src:["calculator-core-v-02.js","calculator-events-v-02.js"],
		active:true
	},
	{
		name:"scientifique",
		rootpath:"js/lib/v01/",
		version:"v-02",
		src:["calculator-core-v-01.js","calculator-events-v-01.js"],
		active:false
	}

],
}

