function astroObject(stage, name, color, anchor, distance, size, turnsPerYear) {
	// Whats it a satillate of

	// color

	this.astro = new createjs.Shape();
	this.distance = distance;
	this.anchor = anchor;
	this.astro.graphics.beginFill(color).drawCircle(0,0,size);
	if(anchor==null){
		this.astro.x=stage.canvas.width/2;
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

function init() {
	var stage = new createjs.Stage("mainGame");

	var sun = new astroObject(stage, 'sun',"Yellow",null,null, 50);
	var earth = new astroObject(stage, 'earth',"DeepSkyBlue", sun, 200, 25);

	stage.addChild(sun.getCanvasDrawing());
	stage.addChild(earth.getCanvasDrawing());
	stage.update();

	createjs.Ticker.addEventListener("tick", tick);
	function tick() {
		earth.updatePosition();
		stage.update();
	}

}

init();
