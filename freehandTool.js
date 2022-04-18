function freehandTool() {
  //set an icon and a name for the object
  this.icon = "assets/freehand.jpg";
  this.name = "freehand";

  /*to smoothly draw we'll draw a line from the previous mouse location
  to the current mouse location. The following values store
  the locations from the last frame. They are -1 to start with because
  we haven't started drawing yet.*/
  var previousMouseX = -1;
  var previousMouseY = -1;

  strokeWidth = 2;

  this.draw = function () {
    //set stroke weight
    strokeWeight(strokeWidth);

    //if the mouse is pressed
    if (mouseIsPressed) {
      //check if they previousX and Y are -1. set them to the current mouse X and Y if they are
      if (previousMouseX == -1) {
        previousMouseX = mouseX;
        previousMouseY = mouseY;
      }
      //if we already have values for previousX and Y we can draw a line from there to the current mouse location
      else {
        line(previousMouseX, previousMouseY, mouseX, mouseY);
        previousMouseX = mouseX;
        previousMouseY = mouseY;
      }
    }
    //if the user has released the mouse we want to set the previousMouse values back to -1
    else {
      previousMouseX = -1;
      previousMouseY = -1;
    }
  };

  //stroke width with number input
  this.populateOptions = function () {
    select(".options").html(
      "<div>Pencil Width: <input type='text' id='pencilWidth'></div>"
    );
    select("#pencilWidth").value(strokeWidth);
    //click handler, dispaly the error message to the user
    select("#pencilWidth").input(function () {
      if (this.value() !== "") {
        let newWidth = parseInt(this.value());
        if (!isNaN(newWidth) && newWidth > 0 && newWidth < 51) {
          strokeWidth = newWidth;
        } else {
          alert(
            "Please input a positive number between 1 to 50 representing the stroke width"
          );
          this.value(strokeWidth);
        }
      }
    });
  };

  //when the tool is not selected, the option to choose stroke width is not visible
  this.unselectTool = function () {
    updatePixels();
    //clear options
    select(".options").html("");
    strokeWeight(1);
  };
}
