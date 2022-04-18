function textTool() {
  //set an icon and a name for the object
  this.icon = "assets/textTool.png";
  this.name = "textTool";

  var input;

  this.draw = function () {
    //when mouse is clicked draw the text from input
    if (mouseIsPressed) {
      text(input.value(), mouseX, mouseY);
    }
  };

  //input text when the option is selected
  this.populateOptions = function () {
    select("#options").html(
      "<div>Type the text, <div>then click on canvas:<id='textTool'>"
    );

    input = createInput("text");
    input.parent("#options");
  };

  //do not show tool options when the tool is not selected
  this.unselectTool = function () {
    select("#options").html("");
  };
}
