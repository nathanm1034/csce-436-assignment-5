let button, img;

function preload() {
  img = loadImage('assets/egg.jpg');
}

function setup() {
  createCanvas(400, 800);
  button = createButton('click me');
  button.position(19, 19);
  button.mousePressed(loadCamera);
  search();
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

function loadCamera(){
  image(img, 100, 0);
}
