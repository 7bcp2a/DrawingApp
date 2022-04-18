function lineToTool() {
  //set an icon and a name for the object
  this.icon = "assets/lineTo.jpg";
  this.name = "LineTo";

  /*to smoothly draw we'll draw a line from the start mouse location
  to the current mouse location. The following values store
  the locations from the last frame. They are -1 to start with because
  we haven't started drawing yet.*/
  var startMouseX = -1;
  var startMouseY = -1;
  var drawing = false;

  //draws the line to the screen
  this.draw = function () {
    //only draw if the mouse is pressed
    if (mouseIsPressed) {
      //set how thick is the line
      strokeWeight(this.lineThicknessSlider.value());

      //check if startMouseX and Y are -1. set them to the current mouse X and Y if they are
      if (startMouseX == -1) {
        startMouseX = mouseX;
        startMouseY = mouseY;
        drawing = true;
        //save the current pixel array
        loadPixels();
      } else {
        //update the screen with the saved pixel array - hides the line between mouse pressed and released
        updatePixels();
        //draw the line
        line(startMouseX, startMouseY, mouseX, mouseY);
      }
    }
    //if the user has released the mouse we want to set the startMouse values back to -1
    else if (drawing) {
      drawing = false;
      startMouseX = -1;
      startMouseY = -1;
    }
  };

  //add option to change the line thickness
  this.populateOptions = function () {
    select(".options").html("<div id = 'lineThickness'>Line Thickness: </div>");

    //create slider
    this.lineThicknessSlider = createSlider(1, 50, 1);
    this.lineThicknessSlider.parent("#lineThickness");
  };

  //when the tool is not selected, the option to choose line thickness is not visible
  this.unselectTool = function () {
    updatePixels();
    //clear options
    select(".options").html("");
    strokeWeight(1);
  };
}
