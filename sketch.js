let button, button_loadPerson, img, img2, img3, fileInput, capture;

function preload() {
    img = loadImage("assets/egg.jpg"); // Image of Eggs in Assets dir
    img2 = loadImage("assets/ai_person.png");
}

function setup() {
  	createCanvas(1600, 1600);

	button = createButton("click me");
	button.position(0, 0);
	button.mousePressed(loadCamera);

	button_loadPerson = createButton(
		"Click to load a person of a AI Generated Person.",
	);

	button_loadPerson.position(0, 20);
	button_loadPerson.mousePressed(loadPic);
	search();
	
	fileInput = createFileInput(handleFile);
	fileInput.position(50, 950);

	capture = createCapture(VIDEO);
	capture.size(400, 400);
	capture.hide();
	fill('white');
	text("Press 'c' to take and display a picture from webcam.", 1000, 950);
  	text("Press and hold 'c' to show video.", 1000, 1000);
}

function draw() {
	if (mouseIsPressed === true) {
		cursor(ARROW);
	} else {
		cursor(HAND);
	}
	if (keyIsPressed && key == 'c') {
		let snapshot = capture.get();
		image(snapshot, 1000, 1000, 400, 400);
	}
	loadUpload();
}

function search() {
	var searchInput = document.createElement('input');
	searchInput.setAttribute('type', 'text');
	searchInput.setAttribute('placeholder', 'Search...');
	searchInput.id = 'searchInput'; 

	var searchButton = document.createElement('button');
	searchButton.textContent = 'Search'; 
	searchButton.id = 'searchButton'; 

	var container = document.getElementById('search-container') || document.body;

	container.appendChild(searchInput);
	container.appendChild(searchButton);

	searchButton.addEventListener('click', function() {
		var searchTerm = searchInput.value;
		console.log('Searching for:', searchTerm);
	});
}

function loadCamera() {
  	image(img, 100, 0);
}

function loadPic() {
  	image(img2, 20, 0);
}

function loadUpload() {
	if (img3) {
		image(img3, 50, 1000, 400, 400);
	}
}

function handleFile(file) {
	if (file.type === 'image') {
		img3 = createImg(file.data, '');
		img3.hide();
	} else {
		img3 = null;
	}
}