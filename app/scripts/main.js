function init() {
	var stage = new createjs.Stage("mainGame");

	var circle = new createjs.Shape();
	circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
	circle.x = 100;
	circle.y = 100;
	stage.addChild(circle);

	stage.update();

	var moon = new createjs.Shape()
	moon.graphics.beginFill("silver").drawCircle(0, 0, 50);
	moon.x = 400;
	moon.y = 150;
	stage.addChild(moon);

	stage.update();
	circle.x = circle.x + 3;
	while(circle.x<moon.x) {
		circle.x = circle.x + 20;
		stage.update();
	}
}

init();
