//script.js

window.onload = function(){
	var canvas = document.getElementById("canvas"),
		ctx = canvas.getContext("2d"),
		width = canvas.width,
		height = canvas.height,
		radius = height / 2,
		startAngle = 0,
		endAngle = 360,
		i = 0;

	ctx.translate(width/2, height/2);

	ctx.arc(0, 0, radius, startAngle, endAngle, true);

	ctx.moveTo(0, 0);

	while(i<(Math.PI*2)){
		i += 0.1;
		console.log(i);
		ctx.lineTo(0, radius);
		ctx.moveTo(0, 0);
		ctx.rotate(Math.PI*2/i);
	};

	ctx.stroke();
};