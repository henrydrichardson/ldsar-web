function astroObject(stage, name, color, anchor, distance, size, turnsPerYear) {
	// Whats it a satillate of

	// color

	this.astro = new createjs.Shape();
	this.distance = distance;
	this.anchor = anchor;
	this.astro.graphics.beginFill(color).drawCircle(0,0,size);
	if(anchor==null){
		this.astro.x= (stage.canvas.width)/2;
		this.astro.y=stage.canvas.height/2;
	} else {
		//Find Anchor Position
		console.log(this.anchor.getCanvasDrawing().x);
		this.theta = Math.floor(Math.random() * 360);
		var y = Math.sin(this.theta)*this.distance;
		var x = Math.cos(this.theta)*this.distance;
		this.astro.x = this.anchor.getCanvasDrawing().x + x;
		this.astro.y = this.anchor.getCanvasDrawing().y + y;

		//Use Distance to calculate start position

	}

	return this;

}

astroObject.prototype.getCanvasDrawing = function() {
	return this.astro;
}

astroObject.prototype.updatePosition = function() {
	this.theta  += 1;
	var y = Math.sin(this.theta)*this.distance;
	var x = Math.cos(this.theta)*this.distance;
	this.astro.x = this.anchor.getCanvasDrawing().x + x;
	this.astro.y = this.anchor.getCanvasDrawing().y + y;
}

function resizeCanvas(canvas) {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

function init() {
	var canvas = document.getElementById('mainGame'),
		context = canvas.getContext('2d');

	window.addEventListener('resize',resizeCanvas(canvas),false);
	var stage = new createjs.Stage("mainGame");

	var sun = new astroObject(stage,'sun','yellow',null,null,50,null);

	stage.addChild(sun.getCanvasDrawing());

	var astroObjectConstructor = [
		['earth','DeepSkyBlue', sun, 200, 15],
		['mars','red', sun, 300, 20],
		['Jupiter','orange', sun, 350, 20],
		['Saturn','pink', sun, 370, 20],
		['Uranus','darkblue', sun, 380, 20]

	];

	var astroObjectArray = [ [1,1] ];

	astroObjectConstructor.forEach(function(element, index) {
		var newAstroObject = new astroObject(stage, element[0],element[1],element[2],element[3],element[4]);
		astroObjectArray[index] = [ element[0], newAstroObject];
		console.log(astroObjectArray[index][1].getCanvasDrawing());
		stage.addChild(astroObjectArray[index][1].getCanvasDrawing());
	});

	stage.update();

	createjs.Ticker.addEventListener("tick", tick);
	function tick() {
	}

}

init();
