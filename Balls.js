
function setup() {
	scene = new Scene()
	ballList = generateBalls(5)

	scene.start()

	// We'll write the output to these labels.
	labelDiv = document.createElement("div")
	document.body.appendChild(labelDiv)
	// Need a little space below the canvas.
	labelDiv.appendChild(document.createElement("br"))

	for (var index = 0; index < 5; index++) {
		var tempLabel = document.createElement("label")
		tempLabel.setAttribute("id", "label" + index)
		labelDiv.appendChild(tempLabel)
	}

}

function update() {
	scene.clear()

	for (var index in ballList) {
		ballList[index].update()
	}

	updateUi()
}

/**
 * Takes in an integer and returns an array with that many sprite objects.
 *
 * @param {integer} num		The total number of balls to generate.
 */
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

/**
 * Returns a "vector" witht a random angle and speed (within defined parameters)
 */
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


function updateUi() {
	for (var index in ballList) {
		var tempLabel = document.getElementById("label" + index)
		// Convert the radians back to degrees and adjust for the 90 degree rotation built into simplegame.js (for some odd reason)
		tempLabel.innerHTML = "Ball " + index + " - Speed: " + ballList[index].speed + " Direction: " + Math.ceil(ballList[index].moveAngle * (180 / Math.PI) + 90) + " degrees"
	}
}