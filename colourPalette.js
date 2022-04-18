//displays and handles the colour palette
function ColourPalette() {
  //a list of hexadecimal clour values
  this.colours = [
    "#000000",
    "#C0C0C0",
    "#808080",
    "#003366",
    "#336699",
    "#3366cc",
    "#003399",
    "#000099",
    "#0000cc",
    "#000066",
    "#006666",
    "#006699",
    "#0099cc",
    "#0066cc",
    "#0033cc",
    "#0000ff",
    "#3333ff",
    "#333399",
    "#669999",
    "#009999",
    "#33cccc",
    "#00ccff",
    "#0099ff",
    "#0066ff",
    "#3366ff",
    "#3333cc",
    "#666699",
    "#339966",
    "#00cc99",
    "#00ffcc",
    "#00ffff",
    "#33ccff",
    "#3399ff",
    "#6699ff",
    "#6666ff",
    "#6600ff",
    "#6600cc",
    "#339933",
    "#00cc66",
    "#00ff99",
    "#66ffcc",
    "#66ffff",
    "#66ccff",
    "#99ccff",
    "#9999ff",
    "#9966ff",
    "#9933ff",
    "#9900ff",
    "#006600",
    "#00cc00",
    "#00ff00",
    "#66ff99",
    "#99ffcc",
    "#ccffff",
    "#ccccff",
    "#cc99ff",
    "#cc66ff",
    "#cc33ff",
    "#cc00ff",
    "#9900cc",
    "#003300",
    "#009933",
    "#33cc33",
    "#66ff66",
    "#99ff99",
    "#ccffcc",
    "#ffffff",
    "#ffccff",
    "#ff99ff",
    "#ff66ff",
    "#ff00ff",
    "#cc00cc",
    "#660066",
    "#336600",
    "#009900",
    "#66ff33",
    "#99ff66",
    "#ccff99",
    "#ffffcc",
    "#ffcccc",
    "#ff99cc",
    "#ff66cc",
    "#ff33cc",
    "#cc0099",
    "#993399",
    "#333300",
    "#669900",
    "#99ff33",
    "#ccff66",
    "#ffff99",
    "#ffcc99",
    "#ff9999",
    "#ff6699",
    "#ff3399",
    "#cc3399",
    "#990099",
    "#666633",
    "#99cc00",
    "#ccff33",
    "#ffff66",
    "#ffcc66",
    "#ff9966",
    "#ff6666",
    "#ff0066",
    "#cc6699",
    "#993366",
    "#999966",
    "#cccc00",
    "#ffff00",
    "#ffcc00",
    "#ff9933",
    "#ff6600",
    "#ff5050",
    "#cc0066",
    "#660033",
    "#996633",
    "#cc9900",
    "#ff9900",
    "#cc6600",
    "#ff3300",
    "#ff0000",
    "#cc0000",
    "#990033",
    "#663300",
    "#996600",
    "#cc3300",
    "#993300",
    "#990000",
    "#800000",
    "#993333",
    "#732626",
    "#4d1919",
  ];
  //make the start colour be black
  this.selectedColour = "#000000";

  var self = this;

  var colourClick = function () {
    //remove the old border
    var current = select("#" + self.selectedColour + "Swatch");
    current.style("border", "0");

    //get the new colour from the id of the clicked element
    var c = this.id().split("Swatch")[0];

    //set the selected colour and fill and stroke
    self.selectedColour = c;
    fill(c);
    stroke(c);

    //add a new border to the selected colour
    this.style("border", "2px solid blue");
  };

  //load in the colours
  this.loadColours = function () {
    //set the fill and stroke properties to be black at the start of the programme running
    fill(this.colours[0]);
    stroke(this.colours[0]);

    //for each colour create a new div in the html for the colourSwatches
    for (var i = 0; i < this.colours.length; i++) {
      var colourID = this.colours[i] + "Swatch";

      //using p5.dom add the swatch to the palette and set its background colour
      //to be the colour value.
      var colourSwatch = createDiv();
      colourSwatch.class("colourSwatches");
      colourSwatch.id(colourID);

      select(".colourPalette").child(colourSwatch);
      select("#" + colourID).style("background-color", this.colours[i]);
      colourSwatch.mouseClicked(colourClick);
    }

    select(".colourSwatches").style("border", "2px solid blue");
  };
  //call the loadColours function now it is declared
  this.loadColours();
}
