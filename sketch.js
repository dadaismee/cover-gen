// Lesson 6

const palette = [[13, 58, 88], [234, 33, 36], [151, 28, 70], [37, 41, 95]];

const vowelList = ["E", "U", "I", "O", "A"];

const photos = [
  "https://cdn.glitch.com/88245d03-271c-4494-8a74-f4fb0c44776f%2Fdandelion.jpg?v=1626864222790",
  "https://cdn.glitch.com/da746107-2309-49df-8656-af77231c342c%2Fmountains.jpg?v=1626696356820",
  "https://cdn.glitch.com/88245d03-271c-4494-8a74-f4fb0c44776f%2Fsand.jpg?v=1626864232091",
  "https://cdn.glitch.com/88245d03-271c-4494-8a74-f4fb0c44776f%2Fwater.jpg?v=1626864237097"
];

//----------------------------------------------------------------
function setup() {
  createCanvas(500, 500); // make a canvas
  colorMode(HSB);
  fillColor = [13, 58, 88];
  imageMode(CENTER);

  img = loadImage(random(photos)); // load the image
  
  createUI();
}

function draw() {
  background(fillColor);
  fillColor[2] = brightnessSlider.value();

  drawImage();
  drawText();
}

// Helper functions
//----------------------------------------------------------------
function changeColorPic() {
  fillColor = random(palette);
  img = loadImage(random(photos)); // load the image
}

function createUI() {
  // buttons
  button = createButton("Generate");
  button.mousePressed(changeColorPic);
  
  saveButton = createButton("Save");
  saveButton.mousePressed(saveImage);
  
  // text inputs
  professionInput = createInput("CODER"); // add a profession title text input
  nameInput = createInput("ELISE B."); // add a name text input
  // slider
  brightnessSlider = createSlider(40, 100, 70).position(0, height + 50);
  p = createElement("p", "Brightness").position(150, height + 35);
}

function drawText() {
  //text
  const dimension = min(width, height);
  const margin = dimension * 0.068;
  professionText = professionInput.value();
  nameText = nameInput.value();

  if (brightnessSlider.value() < 85) {
    fill(255);
  } else {
    fill(0);
  }

  // Filter vowels to change article 
  vowelList.forEach(vowel => {
    if (professionText[0] == vowel) {
      upperText = "THE LIFE OF AN";
  } else {
    upperText = "THE LIFE OF A";
    }
  })
  
  // if (
  //   professionText[0] == "A" ||
  //   professionText[0] == "E" ||
  //   professionText[0] == "U" ||
  //   professionText[0] == "I" ||
  //   professionText[0] == "O"
  // ) {
  //   upperText = "THE LIFE OF AN";
  // } else {
  //   upperText = "THE LIFE OF A";
  // }

  textAlign(CENTER, CENTER);
  textStyle(ITALIC);
  textSize(dimension * 0.048);
  textFont("William");
  text(upperText, width / 2, margin * 1.5); //draw upperText to canvas

  textStyle(BOLD);
  textFont("Inter");
  textSize(dimension * 0.06);
  text(professionText, width / 2, margin * 2.5); // draw profession

  textSize(dimension * 0.03);
  textFont("William");
  textStyle(NORMAL);
  text("2021", width / 2, height - margin * 2.5); // draw a year
  text(nameText, width / 2, height - margin * 2); // draw a name
}

function drawImage() {
  // image
  image.width = 230; //dimension * 0.45;
  image.height = image.width;
  image(img, width / 2, height / 2 - 10, image.width, image.height); // draw an image
  //image.mousePressed()
}

function saveImage() {
  save();
}


