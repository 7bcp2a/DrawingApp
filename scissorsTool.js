function scissorsTool() {
  //set an icon and a name for the object
  this.icon = "assets/scissorsTool.png";
  this.name = "ScissorsTool";

  var selectButton;

  this.draw = function () {
    //the freehand drawing code
    if (mouseIsPressed) {
      if (selectMode == 0) {
        //check if they previousX and Y are -1. set them to the current mouse X and Y if they are
        if (previousMouseX == -1) {
          previousMouseX = mouseX;
          previousMouseY = mouseY;
        }
        //if we already have values for previousX and Y we can draw a line from there to the current mouse location
        else {
          //reset stroke and fill, so the drawing is possible
          stroke(0);
          noFill();
          line(previousMouseX, previousMouseY, mouseX, mouseY);
          previousMouseX = mouseX;
          previousMouseY = mouseY;
        }
      } else if (selectMode == 1) {
        //refresh the scren with screen buffer
        updatePixels();

        noStroke();
        fill(255, 0, 0, 100);
        rect(selectedArea.x, selectedArea.y, selectedArea.w, selectedArea.h);
      }
    } else {
      //if the user has released the mouse we want to set the previousMouse values back to -1
      previousMouseX = -1;
      previousMouseY = -1;
    }
  };

  //show options when thew tool is selected
  this.populateOptions = function () {
    select("#options").html(
      "<div id = 'scissors'>\
            <div id = 'selectButton'></div>\
            <div id = 'cut'>\
			<div id = 'end paste'></div></div>"
    );

    //create one button to controll the actions
    selectButton = createButton("select area");
    selectButton.parent("#selectButton");

    selectButton.mousePressed(function () {
      //event code
      console.log("button pressed");

      if (selectMode == 0) {
        //update selectMode
        selectMode += 1;
        //rename select area button to cut after the mouse is pressed
        selectButton.html("cut");

        loadPixels(); //store current frame
      } else if (selectMode == 1) {
        //update selectMode
        selectMode += 1;
        //rename cut button to cut after the mouse is pressed
        selectButton.html("end paste");

        //clear the red rectangle
        updatePixels();

        //store the cut image of the selectedArea pixels
        selectedPixels = get(
          selectedArea.x,
          selectedArea.y,
          selectedArea.w,
          selectedArea.h
        );

        //get rid of pixels under the cut area by drawing the white rectangle over it
        fill(255);
        noStroke();
        rect(selectedArea.x, selectedArea.y, selectedArea.w, selectedArea.h);
      } else if (selectMode == 2) {
        selectMode = 0;
        //store the newly created picture
        loadPixels();
        //reset the selected area
        selectedArea = { x: 0, y: 0, w: 100, h: 100 };
        //update the html for a button
        selectButton.html("select area");
      }
    });
  };

  //do not show tool options when the tool is not selected
  this.unselectTool = function () {
    select("#options").html("");
  };
}

//functions for Scissors tool
var selectMode = 0;
var selectedPixels;
var selectedArea = { x: 0, y: 0, w: 100, h: 100 };

function mousePressed() {
  if (selectMode == 1) {
    //set the top left corner of selectedArea
    selectedArea.x = mouseX;
    selectedArea.y = mouseY;
  } else if (selectMode == 2) {
    //place the selectedPixels image to the location where mouse is pressed
    image(selectedPixels, mouseX, mouseY);
  }
}

function mouseDragged() {
  if (selectMode == 1) {
    //set the dimensions of selectedArea rectangle
    var w = mouseX - selectedArea.x;
    var h = mouseY - selectedArea.y;

    selectedArea.w = w;
    selectedArea.h = h;

    console.log(selectedArea);
  }
}
