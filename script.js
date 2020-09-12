/********** 
PSEUDO-CODE

-Homepage with header, short description of what we do and 'start' button to take us to next part of same page

-Form (either radio buttons or dropdown) where user has to select one variable (pet friendly, low maintenance, etc)
-When user submits form, save user input to variable
-Create objects for each plant with properties indicating if 'pet friendly', 'low maintenance', etc.
-Save plant objects in array for ease of iteration

-Take user to results page with list of plants that satisfy user's criteria


*/

let blocksArray = $('.tileGrid > div').toArray();
let copyBlocksArray = Array.from(document.querySelectorAll('.tileGrid div'));
let blocks = $('.tileGrid > div');
const width = 10;

// ANIMATION SHAPES
const shapes = {
	cat: {
		outline: [
			1,
			4,
			width + 1,
			width + 2,
			width + 3,
			width + 4,
			width * 2 + 1,
			width * 2 + 2,
			width * 2 + 3,
			width * 2 + 4,
			width * 3 + 1,
			width * 3 + 2,
			width * 3 + 3,
			width * 3 + 4,
			width * 4 + 2,
			width * 4 + 3,
			width * 4 + 7,
			width * 4 + 8,
			width * 5,
			width * 5 + 1,
			width * 5 + 2,
			width * 5 + 3,
			width * 5 + 4,
			width * 5 + 5,
			width * 5 + 8,
			width * 6,
			width * 6 + 1,
			width * 6 + 2,
			width * 6 + 3,
			width * 6 + 4,
			width * 6 + 5,
			width * 6 + 8,
			width * 7,
			width * 7 + 1,
			width * 7 + 2,
			width * 7 + 3,
			width * 7 + 4,
			width * 7 + 5,
			width * 7 + 8,
			width * 8,
			width * 8 + 1,
			width * 8 + 2,
			width * 8 + 3,
			width * 8 + 4,
			width * 8 + 5,
			width * 8 + 8,
			width * 9,
			width * 9 + 1,
			width * 9 + 2,
			width * 9 + 3,
			width * 9 + 4,
			width * 9 + 5,
			width * 9 + 7,
			width * 9 + 8,
			width * 10 + 1,
			width * 10 + 2,
			width * 10 + 3,
			width * 10 + 4,
			width * 10 + 5,
			width * 10 + 6,
			width * 10 + 7,
			width * 10 + 8,
		],
		color: '#333333',
	},
	leaf: {
		outline: [
			4,
			width + 3,
			width + 4,
			width + 5,
			width * 2 + 2,
			width * 2 + 3,
			width * 2 + 4,
			width * 2 + 5,
			width * 2 + 6,
			width * 3 + 1,
			width * 3 + 2,
			width * 3 + 3,
			width * 3 + 4,
			width * 3 + 5,
			width * 3 + 6,
			width * 3 + 7,
			width * 4 + 0,
			width * 4 + 1,
			width * 4 + 2,
			width * 4 + 3,
			width * 4 + 4,
			width * 4 + 5,
			width * 4 + 6,
			width * 4 + 7,
			width * 4 + 8,
			width * 5 + 0,
			width * 5 + 1,
			width * 5 + 2,
			width * 5 + 3,
			width * 5 + 4,
			width * 5 + 5,
			width * 5 + 6,
			width * 5 + 7,
			width * 5 + 8,
			width * 6 + 0,
			width * 6 + 1,
			width * 6 + 2,
			width * 6 + 3,
			width * 6 + 4,
			width * 6 + 5,
			width * 6 + 6,
			width * 6 + 7,
			width * 6 + 8,
			width * 7 + 0,
			width * 7 + 1,
			width * 7 + 2,
			width * 7 + 3,
			width * 7 + 4,
			width * 7 + 5,
			width * 7 + 6,
			width * 7 + 7,
			width * 7 + 8,
			width * 8 + 1,
			width * 8 + 2,
			width * 8 + 3,
			width * 8 + 4,
			width * 8 + 5,
			width * 8 + 6,
			width * 8 + 7,
			width * 9 + 2,
			width * 9 + 3,
			width * 9 + 4,
			width * 9 + 5,
			width * 9 + 6,
			width * 10 + 4,
		],
		stemOutline: [
			width * 2 + 4,
			width * 2 + 2,
			width * 2 + 4,
			width * 2 + 6,
			width * 3 + 3,
			width * 3 + 4,
			width * 3 + 5,
			width * 4 + 4,
			width * 5 + 1,
			width * 5 + 4,
			width * 5 + 7,
			width * 6 + 2,
			width * 6 + 6,
			width * 6 + 4,
			width * 7 + 3,
			width * 7 + 4,
			width * 7 + 5,
			width * 8 + 4,
			width * 9 + 4,
			width * 10 + 4,
		],
	},
};

let shape = shapes.leaf.outline;
let color = shapes.leaf.color;
let currentPosition = 0;

// Drawing the shapes
function draw() {
	// console.log(color);
	shape.forEach((index) => {
		shapes.leaf.stemOutline.forEach((stemIndex) => {
			if (index === stemIndex) {
				blocksArray[currentPosition + index].classList.add('shapeBlockstem');
			} else {
				blocksArray[currentPosition + index].classList.add('shapeBlockleaf');
			}
		});
		// blocksArray[currentPosition + index].classList.add(`shapeBlockcat`);
	});
}

// Starting 1st shape
draw();

// Undraw the shape
function undraw() {
	shape.forEach((index) => {
		blocksArray[currentPosition + index].classList.remove(`shapeBlockleaf`);
		blocksArray[currentPosition + index].classList.remove(`shapeBlockstem`);
	});
}

// Make shapes move down at set interval (1s)
timerId = setInterval(fallingShapes, 1000);

// Shapes falling function
function fallingShapes() {
	console.log('This was started');
	undraw();
	currentPosition += width;
	draw();
	landing();
}

// Draw another shape upon landing
function landing() {
	if (
		shape.some((index) =>
			blocksArray[currentPosition + index + width].classList.contains('landed')
		)
	) {
		shape.forEach((index) =>
			blocksArray[currentPosition + index].classList.add('landed')
		);
		// New shape falling
		currentPosition = 4;
		draw();
	}
}
