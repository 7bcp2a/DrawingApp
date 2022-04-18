//stamp tool constructor function
function stampTool() {
  this.name = "stampTool";
  this.icon = "assets/stampTool.png";

  //load stamp
  this.star = loadImage("./assets/stampTool.png");

  //draw stamps with slider controlled size and number of stars
  this.draw = function () {
    //if the mouse is pressed paint on the canvas
    if (mouseIsPressed) {
      for (var i = 0; i < this.nStarSlider.value(); i++) {
        var starSize = this.starSizeSlider.value();
        var starX = random(
          mouseX - starSize / 2 - 10,
          mouseX - starSize / 2 + 10
        );
        var starY = random(
          mouseY - starSize / 2 - 10,
          mouseY - starSize / 2 + 10
        );
        image(this.star, starX, starY, starSize, starSize);
      }
    }
  };

  //show options when thew tool is selected
  this.populateOptions = function () {
    select("#options").html(
      "<div id = 'controls'>\
            <div id = 'numberOfStarsControl'>Number of Stars: </div>\
            <div id = 'sizeOfStarsControl'> Size of Star: </div></div>"
    );
    //create sliders
    this.starSizeSlider = createSlider(5, 50, 20);
    this.nStarSlider = createSlider(1, 10, 5);
    this.starSizeSlider.parent("#sizeOfStarsControl");
    this.nStarSlider.parent("#numberOfStarsControl");
  };

  //do not show tool options when the tool is not selected
  this.unselectTool = function () {
    select("#options").html("");
  };
}
