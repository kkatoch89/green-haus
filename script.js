// ANIMATION SHAPES
const width = 12;
const shapes = {
	pets: {
		shape: [
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
		],
	},
	leaf: {
		shape: [
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
		outline: [
			width * 2 + 4,
			width * 3 + 2,
			width * 3 + 4,
			width * 3 + 6,
			width * 4 + 3,
			width * 4 + 4,
			width * 4 + 5,
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
	lowMaint: {
		shape: [
			5,
			6,
			width + 1,
			width + 4,
			width + 5,
			width + 6,
			width + 7,
			width * 2,
			width * 2 + 1,
			width * 2 + 2,
			width * 2 + 4,
			width * 2 + 5,
			width * 2 + 6,
			width * 2 + 7,
			width * 3,
			width * 3 + 1,
			width * 3 + 2,
			width * 3 + 4,
			width * 3 + 5,
			width * 3 + 6,
			width * 3 + 7,
			width * 4,
			width * 4 + 1,
			width * 4 + 2,
			width * 4 + 4,
			width * 4 + 5,
			width * 4 + 6,
			width * 4 + 7,
			width * 5,
			width * 5 + 1,
			width * 5 + 2,
			width * 5 + 4,
			width * 5 + 5,
			width * 5 + 6,
			width * 5 + 7,
			width * 5 + 10,
			width * 6,
			width * 6 + 1,
			width * 6 + 2,
			width * 6 + 4,
			width * 6 + 5,
			width * 6 + 6,
			width * 6 + 7,
			width * 6 + 9,
			width * 6 + 10,
			width * 6 + 11,
			width * 7 + 1,
			width * 7 + 2,
			width * 7 + 3,
			width * 7 + 4,
			width * 7 + 5,
			width * 7 + 6,
			width * 7 + 7,
			width * 7 + 9,
			width * 7 + 10,
			width * 7 + 11,
			width * 8 + 2,
			width * 8 + 3,
			width * 8 + 4,
			width * 8 + 5,
			width * 8 + 6,
			width * 8 + 7,
			width * 8 + 9,
			width * 8 + 10,
			width * 8 + 11,
			width * 9 + 3,
			width * 9 + 4,
			width * 9 + 5,
			width * 9 + 6,
			width * 9 + 7,
			width * 9 + 9,
			width * 9 + 10,
			width * 9 + 11,
			width * 10 + 4,
			width * 10 + 5,
			width * 10 + 6,
			width * 10 + 7,
			width * 10 + 8,
			width * 10 + 9,
			width * 10 + 10,
			width * 10 + 11,
			width * 11 + 4,
			width * 11 + 5,
			width * 11 + 6,
			width * 11 + 7,
			width * 11 + 8,
			width * 11 + 9,
			width * 11 + 10,
			width * 12 + 4,
			width * 12 + 5,
			width * 12 + 6,
			width * 12 + 7,
			width * 12 + 8,
			width * 12 + 9,
			width * 13 + 4,
			width * 13 + 5,
			width * 13 + 6,
			width * 13 + 7,
			width * 13 + 8,
			width * 14 + 4,
			width * 14 + 5,
			width * 14 + 6,
			width * 14 + 7,
			width * 15 + 4,
			width * 15 + 5,
			width * 15 + 6,
			width * 15 + 7,
			width * 16 + 4,
			width * 16 + 5,
			width * 16 + 6,
			width * 16 + 7,
		],
		outline: [
			5,
			6,
			width + 1,
			width + 4,
			width + 7,
			width * 2,
			width * 2 + 2,
			width * 2 + 4,
			width * 2 + 7,
			width * 3,
			width * 3 + 2,
			width * 3 + 4,
			width * 3 + 7,
			width * 4,
			width * 4 + 2,
			width * 4 + 4,
			width * 4 + 7,
			width * 5,
			width * 5 + 2,
			width * 5 + 4,
			width * 5 + 7,
			width * 5 + 10,
			width * 6,
			width * 6 + 3,
			width * 6 + 4,
			width * 6 + 7,
			width * 6 + 9,
			width * 6 + 11,
			width * 7 + 1,
			width * 7 + 7,
			width * 7 + 9,
			width * 7 + 11,
			width * 8 + 2,
			width * 8 + 7,
			width * 8 + 9,
			width * 8 + 11,
			width * 9 + 3,
			width * 9 + 4,
			width * 9 + 7,
			width * 9 + 9,
			width * 9 + 11,
			width * 10 + 4,
			width * 10 + 7,
			width * 10 + 8,
			width * 10 + 11,
			width * 11 + 4,
			width * 11 + 10,
			width * 12 + 4,
			width * 12 + 9,
			width * 13 + 4,
			width * 13 + 7,
			width * 13 + 8,
			width * 14 + 4,
			width * 14 + 7,
			width * 15 + 4,
			width * 15 + 7,
			width * 16 + 4,
			width * 16 + 7,
		],
	},
	sun: {
		shape: [
			5,
			width + 1,
			width + 5,
			width + 9,
			width * 2 + 2,
			width * 2 + 8,
			width * 3 + 4,
			width * 3 + 5,
			width * 3 + 6,
			width * 4 + 3,
			width * 4 + 4,
			width * 4 + 5,
			width * 4 + 6,
			width * 4 + 7,
			width * 5,
			width * 5 + 1,
			width * 5 + 3,
			width * 5 + 4,
			width * 5 + 5,
			width * 5 + 6,
			width * 5 + 7,
			width * 5 + 9,
			width * 5 + 10,
			width * 6 + 3,
			width * 6 + 4,
			width * 6 + 5,
			width * 6 + 6,
			width * 6 + 7,
			width * 7 + 4,
			width * 7 + 5,
			width * 7 + 6,
			width * 8 + 2,
			width * 8 + 8,
			width * 9 + 1,
			width * 9 + 5,
			width * 9 + 9,
			width * 10 + 5,
		],
	},
};

const plantsArray = [
	{ name: 'Scarlet Star', pets: true, sun: true, lowMaint: false },
	{ name: 'Chinese Money Plant', pets: true, sun: true, lowMaint: false },
	{ name: 'Prickly Pear Cactus', pets: true, sun: true, lowMaint: true },
	{ name: 'Mini Rubber Plant', pets: true, sun: true, lowMaint: true },
	{ name: 'Hoya Vine', pets: true, sun: false, lowMaint: false },
	{ name: 'Ponytail Palm', pets: true, sun: true, lowMaint: true },
	{ name: 'Staghorn Fern', pets: true, sun: false, lowMaint: true },
	{ name: "Bird's Nest Fern", pets: true, sun: false, lowMaint: true },
	{ name: 'Chinese Evergreen', pets: false, sun: false, lowMaint: true },
	{ name: 'Zanzibar Gem', pets: false, sun: true, lowMaint: true },
	{ name: 'Moth Orchid', pets: true, sun: false, lowMaint: false },
	{ name: 'Snake Plant', pets: false, sun: true, lowMaint: true },
	{ name: 'Kaffir Lily Plant', pets: false, sun: true, lowMaint: true },
	{ name: 'Jade Plant', pets: false, sun: true, lowMaint: true },
	{ name: 'Philodendrons', pets: false, sun: true, lowMaint: true },
	{ name: 'Fiddle Leaf Fig', pets: false, sun: true, lowMaint: true },
	{ name: 'Aloe Vera', pets: false, sun: true, lowMaint: true },
	{ name: 'Bunny Ear Cactus', pets: false, sun: true, lowMaint: true },
	{ name: 'Christmas Cactus', pets: true, sun: true, lowMaint: false },
	{ name: 'Easter Cactus', pets: true, sun: false, lowMaint: false },
];

/********** 
PSEUDO-CODE

-Homepage with header, short description of what we do and 'start' button to take us to next part of same page

-Form (either radio buttons or dropdown) where user has to select one variable (pet friendly, low maintenance, etc)
-When user submits form, save user input to variable
-Create objects for each plant with properties indicating if 'pet friendly', 'low maintenance', etc.
-Save plant objects in array for ease of iteration

-Take user to results page with list of plants that satisfy user's criteria


*/

let blocksArray = $(`.animationGrid1 > div`)
	.toArray()
	.concat($('.animationGrid2 > div').toArray());
let blocks = $('.animationGrid > div');

// Create empty object to hold all code
const plantsApp = {};
plantsApp.animation = {};
plantsApp.animation = {};

// plantsApp.animation.shapeType;
let shapeType = 'leaf';
let selection = shapes[shapeType];
let shape = selection.shape;
let initialPosition = 2;
let currentPosition = initialPosition;

// Drawing the shapes
plantsApp.animation.draw = function () {
	// console.log(color);
	console.log(selection);
	if (selection.outline) {
		shape.forEach((index) => {
			selection.outline.forEach((outlineIndex) => {
				if (index === outlineIndex) {
					blocksArray[currentPosition + index].classList.add(
						'shapeBlockoutline'
					);
				} else {
					blocksArray[currentPosition + index].classList.add(
						`shapeBlock${shapeType}`
					);
				}
			});
			// blocksArray[currentPosition + index].classList.add(`shapeBlockcat`);
		});
	} else {
		shape.forEach((index) => {
			blocksArray[currentPosition + index].classList.add(
				`shapeBlock${shapeType}`
			);
		});
	}
};

// Undraw the shape
plantsApp.animation.undraw = function () {
	shape.forEach((index) => {
		if (selection.outline) {
			blocksArray[currentPosition + index].classList.remove(
				`shapeBlock${shapeType}`
			);
			blocksArray[currentPosition + index].classList.remove(
				'shapeBlockoutline'
			);
		}
		blocksArray[currentPosition + index].classList.remove(
			`shapeBlock${shapeType}`
		);
	});
};

// Shapes falling function
plantsApp.animation.fallingShapes = function () {
	plantsApp.animation.undraw();
	currentPosition += width;
	plantsApp.animation.draw();
	plantsApp.animation.landing();
};

// Draw another shape upon landing
plantsApp.animation.landing = function () {
	if (
		shape.some((index) =>
			blocksArray[currentPosition + index].classList.contains('landed')
		)
	) {
		currentPosition = initialPosition;
	}
	// New shape falling
	plantsApp.animation.draw();
};

// Speed of animation
plantsApp.animation.speed = function () {
	setInterval(plantsApp.animation.fallingShapes, 200);
};

// Filter database with user input
plantsApp.filter = function (criteria) {
	const filteredArray = plantsArray.filter((el) => {
		return el[criteria];
	});
	return filteredArray;
};

// Display results on individual cards
plantsApp.displayResults = function (arr) {
	arr.forEach((plant) => {
		const plantName = plant.name;
		const title = $('<h3>').text(plantName);
		const resultCard = $('<li>').addClass('card').append(title);
		$('.resultsGrid').append(resultCard);
	});
};

// Init function
plantsApp.init = function () {
	// Smooth scroll effect
	$('.btnScroll').on('click', function (e) {
		const hash = $(this).attr('dataTarget');
		const target = $('#' + hash);
		// Disable default clicking link behavior
		e.preventDefault();
		// Smooth scroll animation via jquery
		$('html, body').animate(
			{
				scrollTop: $(target).offset().top,
			},
			800,
			function () {
				window.location.hash = hash;
			}
		);
		plantsApp.animation.speed();
	});

	// Form submit event and storing input
	// Smooth scrolling for form submit event
	$('form').on('submit', function (e) {
		// Disable default clicking link behavior
		e.preventDefault();
		$('.resultsGrid').empty();
		const userInput = $('input:checked').val();
		const resultsArr = plantsApp.filter(userInput).slice(0, 6);
		console.log(resultsArr);
		plantsApp.displayResults(resultsArr);

		const hash = $(this).attr('dataTarget');
		const target = $('#' + hash);

		e.preventDefault();
		$('html, body').animate(
			{
				scrollTop: $(target).offset().top,
			},
			800,
			function () {
				window.location.hash = hash;
			}
		);
		// Stopping animation in section 2 (form) & starting animation in section 3 (results)
		$('.animationGrid1 > div').css('background-color', 'transparent');
		$('.animationGrid2 > div').css('background-color', 'transparent');
		initialPosition = 0;
		currentPosition = initialPosition;
		shapeType = userInput;
		selection = shapes[shapeType];
		shape = selection.shape;
		blocksArray = $('.animationGrid3 > div').toArray();
		console.log(shapeType);
		plantsApp.animation.speed();
	});
	// plantsApp.animation.start(1);
	// plantsApp.animation.start(2);
	// plantsApp.animation.arrayGenerator(2);
	// plantsApp.animation.formSection();
};

$(function () {
	plantsApp.init();
});
