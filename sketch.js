//global variables that will store the toolbox colour palette and the helper functions
var toolbox = null;
var colourP = null;
var helpers = null;
var canvas = null;

function setup() {
  //create a canvas to fill the content div from index.html
  canvasContainer = select("#content");
  var c = createCanvas(
    canvasContainer.size().width,
    canvasContainer.size().height
  );
  c.parent("content");
  //canvas for mousePressOnCanvas function in helper functions
  canvas = c;

  //create helper functions and the colour palette
  helpers = new HelperFunctions();
  colourP = new ColourPalette();

  //create a toolbox for storing the tools
  toolbox = new Toolbox();

  //add the tools to the toolbox.
  toolbox.addTool(new freehandTool());
  toolbox.addTool(new lineToTool());
  toolbox.addTool(new sprayCanTool());
  toolbox.addTool(new mirrorDrawTool());
  toolbox.addTool(new rectangleTool());
  toolbox.addTool(new ellipseTool());
  toolbox.addTool(new stampTool());
  toolbox.addTool(new editableShapesTool());
  toolbox.addTool(new scissorsTool());
  toolbox.addTool(new textTool());
  background(255);
}

function draw() {
  /*call the draw function from the selected tool.
  hasOwnProperty is a javascript function that tests
  if an object contains a particular method or property
  if there isn't a draw method the app will alert the user*/
  if (toolbox.selectedTool.hasOwnProperty("draw")) {
    toolbox.selectedTool.draw();
  } else {
    alert("it doesn't look like your tool has a draw method!");
  }
}
