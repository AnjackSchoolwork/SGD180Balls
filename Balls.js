
function setup() {
	scene = new Scene()
	ballList = generateBalls(5)

	scene.start()
}

function update() {
	scene.clear()

	for (var index in ballList) {
		ballList[index].update()
	}
}

function generateBalls(num) {
	var tempArray = []
	for (var interval = 0; interval < num; interval++) {
		var tempVector = getRandomVector2d()
		var tempDimension = getRandomInt(10, 100)
		var tempSprite = new Sprite(scene, "img/redBall.png", tempDimension, tempDimension)
		tempSprite.setPosition(getRandomInt(1, 800), getRandomInt(1, 600))
		tempSprite.setMoveAngle(tempVector.angle)
		tempSprite.setSpeed(tempVector.magnitude)
		tempArray.push(tempSprite)
	}
	return tempArray
}

function getRandomVector2d() {
	var angle = getRandomInt(0, 360)
	var magnitude = getRandomInt(1, 10)
	return {
		"angle": angle,
		"magnitude": magnitude
	}
}

function getRandomInt(min, max) {
	min = Math.floor(min)
	max = Math.ceil(max)

	return Math.floor(Math.random() * (max - min)) + min
}