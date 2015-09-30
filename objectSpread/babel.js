require("babel/register")({
	stage: 0
});

require("./" + process.argv[2]);