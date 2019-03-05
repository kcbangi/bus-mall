'use strict';

var imgZero = document.createElement('img');
var imgOne = document.createElement('img');
var imgTwo = document.createElement('img');

var sectionElement = document.getElementById('clickerBox');
var listResult = document.getElementById('voteResult');

var images = [];
var clicker = 0;
var previousImage = [];


new Images('./img/bag.jpg', 'Bag');
new Images('./img/banana.jpg', 'Banana');
new Images('./img/bathroom.jpg', 'Bathroom');
new Images('./img/boots.jpg', 'Boots');
new Images('./img/breakfast.jpg', 'Breakfast');
new Images('./img/bubblegum.jpg', 'Bubblegum');
new Images('./img/chair.jpg', 'Chair');
new Images('./img/cthulhu.jpg', 'Cthulhu');
new Images('./img/dog-duck.jpg', 'Dog');
new Images('./img/dragon.jpg', 'Dragon');
new Images('./img/pen.jpg', 'Pen');
new Images('./img/pet-sweep.jpg', 'Pet-sweep');
new Images('./img/scissors.jpg', 'Scissors');
new Images('./img/shark.jpg', 'Shark');
new Images('./img/sweep.png', 'Sweep');
new Images('./img/tauntaun.jpg', 'Tauntaun');
new Images('./img/unicorn.jpg', 'Unicorn');
new Images('./img/usb.gif', 'USB');
new Images('./img/water-can.jpg', 'Water can');
new Images('./img/wine-glass.jpg', 'Wine glass');

function Images(url, name) {
  this.name = name;
  this.url = url;
  this.numberOfClicks = 0;
  images.push(this);
}

function randomImage() {
  return Math.floor(Math.random() * images.length);
}

function newImage() {
  var index0 = randomImage();
  var index1 = randomImage();
  var index2 = randomImage();

  while (index0 === index1 || index0 === index2 || index1 === index2 || previousImage.includes(index0) || previousImage.includes(index1) || previousImage.includes(index2)) {
    var index0 = randomImage();
    var index1 = randomImage();
    var index2 = randomImage();
  }
  imgZero.src = images[index0].url;
  imgZero.alt = images[index0].name;

  imgOne.src = images[index1].url;
  imgOne.alt = images[index1].name;

  imgTwo.src = images[index2].url;
  imgTwo.alt = images[index2].name;

  sectionElement.appendChild(imgZero);
  sectionElement.appendChild(imgOne);
  sectionElement.appendChild(imgTwo);

  previousImage = [];
  previousImage.push(index0);
  previousImage.push(index1);
  previousImage.push(index2);
}

function onClick(event) {
  console.log('here');
  console.log(event);
  clicker++;

  for (var i in images) {
    if (event.target.alt === images[i].name) {
      images[i].numberOfClicks++;
    }
  }

  if (clicker === 25) {
    console.log('maxVotes');
    sectionElement.removeEventListener('click', onClick);
    render();
  }
  newImage();
}

function render() {
  for (var i in images) {
    var newLi = document.createElement('li');
    newLi.textContent = images[i].name + ' recieved ' + images[i].numberOfClicks + ' votes';
    listResult.appendChild(newLi);
  }
}

sectionElement.addEventListener('click', onClick);

newImage();
