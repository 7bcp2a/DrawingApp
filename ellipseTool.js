function ellipseTool() {
  //set an icon and a name for the object
  this.icon = "assets/ellipseTool.jpg";
  this.name = "EllipseTool";

  /*to smoothly draw we'll draw an ellipse from the start mouse location
  to the current mouse location. The following values store
  the locations from the last frame. They are -1 to start with because
  we haven't started drawing yet.*/
  var startMouseX = -1;
  var startMouseY = -1;
  var previousMouseX = -1;
  var previousMouseY = -1;

  //draws the ellipse to the screen
  this.draw = function () {
    //only draw if the mouse is pressed
    if (mouseIsPressed) {
      //draww filled or unfilled ellipse
      if (dropbox.value() == "Filled") {
        fill(colourP.selectedColour);
      } else {
        noFill();
      }
      //check if previousMouseX and previousMouseY are -1
      //set them and startMouseX and Y to the current mouse X and Y if they are
      if (previousMouseX == -1 && previousMouseY == -1) {
        previousMouseX = mouseX;
        previousMouseY = mouseY;
        startMouseX = mouseX;
        startMouseY = mouseY;
      } else {
        //update the screen with the saved pixel array - hides the line between mouse pressed and released
        updatePixels();
        //draw the ellipse
        ellipse(
          startMouseX,
          startMouseY,
          (mouseX - startMouseX) * 2,
          (mouseY - startMouseY) * 2
        );
      }
    }
    //if the user has released the mouse we want to set the previousMouse values back to -1
    else {
      //after the drawing is done save the pixel state
      loadPixels();
      previousMouseX = -1;
      previousMouseY = -1;
    }
  };

  //add the dropbox with options to fill or not fill the ellipse
  this.populateOptions = function () {
    dropbox = createSelect();
    dropbox.option("Filled");
    dropbox.option("Not Filled");
    dropbox.parent("#options");
  };

  //when the tool is not selected, the options are not visible
  this.unselectTool = function () {
    select("#options").html("");
  };
}
