let button, button_loadPerson, img, img2;

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
}

function draw() {
  if (mouseIsPressed === true) {
    cursor(ARROW);
  } else {
    cursor(HAND);
  }
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
