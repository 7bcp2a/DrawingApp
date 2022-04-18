function HelperFunctions() {
  /*There is no this. at the
  start we don't need to do that here because the event will
  be added to the button and doesn't 'belong' to the object*/

  //event handler for the clear button event. Clears the screen
  select("#clearButton").mouseClicked(function () {
    background(255);
    //call loadPixels to update the drawing state, this is needed for the mirror tool
    loadPixels();
  });

  //event handler for the save image button, saves the canvas to the local file system
  select("#saveImageButton").mouseClicked(function () {
    //save the current canvas to file as png
    saveCanvas("mycanvas", "png");
  });
}

//detect if mouse is pressed on canvas or not
function mousePressOnCanvas(canvas) {
  if (
    mouseX > canvas.elt.offsetLeft &&
    mouseX < canvas.elt.offsetLeft + canvas.width &&
    mouseY > canvas.elt.offsetTop &&
    mouseY < canvas.elt.offsetTop + canvas.height
  ) {
    return true;
  }
  return false;
}
