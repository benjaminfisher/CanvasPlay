/**
 * Colorful Lines
 * 
 * @author clockmaker
 * @see http://clockmaker.jp/blog/
 * 
 * forked from wonderfl
 * http://wonderfl.net/c/qlFz
 */

// Declare variables
var canvas = document.getElementById("canvas"), 
		context = canvas.getContext("2d"),
		n = 0; // Counter

// Declare constants
var FPS = 24, // Frame rate
	FRAME_MSEC = 1000 / FPS >> 0, // Interval time
	CENTER_X = canvas.width / 2,
	CENTER_Y = canvas.height / 2,
	MAX = canvas.height / 2; // Loop count

// Registration of event handlers
setInterval(intervalHandler, FRAME_MSEC);

//context.lineWidth = 15;
context.lineCap = "round";

function intervalHandler(){
	var oldX = CENTER_X, oldY = CENTER_Y, i;
	
  context.clearRect(0, 0, canvas.width, canvas.height);
  
  // Drawing the pattern
  for (i = 0; i <= MAX; i++) {
    context.beginPath();
		
    //context.strokeStyle = "ivory";
    context.strokeStyle = getColorHSV(i / MAX*360 + n*4000);
		
    context.moveTo(oldX, oldY);
    context.lineTo(
      oldX = CENTER_X + (i * Math.cos(i + (i * n))), 
      oldY = CENTER_Y + (i * Math.sin(i + (i * n))));
    context.stroke();
  }
  
  // counter update
  n += .00025;
}

// -----------------------------------------
// Utility functions
// -----------------------------------------

/**
 * HSV
 * @param {Number} h
 * @return {String} "rgb(r, b, g)"
 */
function getColorHSV(h){
  var ht = (((h %= 360) < 0) ? h + 360 : h) / 60,
		hi = Math.floor(ht),
		r, g, b,
		f = Math.round;
	
  switch (hi) {
    case 0: r = 0xff; g = f(0xff *(ht-hi));     b = 0; break;
    case 1: g = 0xff; r = f(0xff *(1-(ht-hi))); b = 0; break;
    case 2: g = 0xff; b = f(0xff *(ht-hi));     r = 0; break;
    case 3: b = 0xff; g = f(0xff *(1-(ht-hi))); r = 0; break;
    case 4: b = 0xff; r = f(0xff *(ht-hi));     g = 0; break;
    case 5: r = 0xff; b = f(0xff *(1-(ht-hi))); g = 0; break;
  }
  return "rgb(" + r + ", " + g + ", " + b + ")";
}