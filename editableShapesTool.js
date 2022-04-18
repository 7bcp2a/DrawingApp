/*
	1. Plot out a shape as a series od vertices
		*add a abutton for switching between creating new vertices
		and editing
		*Click the canvas to add a vertex
		*Don't draw right away add vertex to 
		an array then draw but don't save to canvas
	2. Edit the vertices
		*if editing is on
		*hightlight the location of the vertices
		*when mouse pressed is near vertex (using the dist)
		update the vertex x and y with the mouseX and mouseY
	3. Confirm the final shape
*/

//editable Shapes constructor function
function editableShapesTool() {
  this.name = "editableShapesTool";
  this.icon = "assets/editableShapesTool.png";

  //set default edit mode to false
  var editMode = false;

  //empty array variable
  var currentShape = [];

  //draw editable shape
  this.draw = function () {
    //update pixels from where we stored it with the prevoius shaping
    updatePixels();
    //add the shape to array
    if (mousePressOnCanvas(canvas) && mouseIsPressed) {
      //if edit mode is off add the shape
      if (!editMode) {
        currentShape.push({
          x: mouseX,
          y: mouseY,
        });
      } else {
        //loop over every vertex shape in the array
        for (var i = 0; i < currentShape.length; i++) {
          //if our mouseX and mouseY is near the current shape x and y
          if (dist(currentShape[i].x, currentShape[i].y, mouseX, mouseY) < 15) {
            //update that point
            currentShape[i].x = mouseX;
            currentShape[i].y = mouseY;
          }
        }
      }
    }

    //call the shape-draw for each vertex
    beginShape();
    for (var i = 0; i < currentShape.length; i++) {
      vertex(currentShape[i].x, currentShape[i].y);
      //show where the vertex pixels are when editing
      if (editMode) {
        fill("yellow");
        ellipse(currentShape[i].x, currentShape[i].y, 10);
        noFill();
      }
    }
    endShape();
  };

  //when the tool is chosen, show buttons
  this.populateOptions = function () {
    noFill();
    loadPixels();

    select("#options").html(
      "<div id = 'switch'>\
            <div id = 'editButton'></div>\
            <div id = 'finishButton'></div></div>"
    );

    //create buttons
    editButton = createButton("Edit Shape");
    finishButton = createButton("Finish Shape");
    editButton.parent("#editButton");
    finishButton.parent("#finishButton");

    //add edit button functionality
    editButton.mousePressed(function () {
      //if edit mode on set it to off and update the buttons text
      if (editMode) {
        editMode = false;
        editButton.html("Edit Shape");
      }
      //and vice versa
      else {
        editMode = true;
        editButton.html("Add Vertices");
      }
    });

    //when mouse is pressed save the canvas in its current state
    finishButton.mousePressed(function () {
      //switch edit mode off when finish button pressed
      editMode = false;
      //manually call draw so the yellow edit spots wont be drawn at the next shape
      draw();
      //clear the shape
      loadPixels();
      currentShape = [];
    });
  };

  this.unselectTool = function () {
    //clear button options
    select("#options").html("");
  };
}
