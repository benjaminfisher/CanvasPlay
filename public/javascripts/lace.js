//script.js

window.onload = function(){
	var canvas = document.getElementById("canvas"),
		ctx = canvas.getContext("2d"),
		width = canvas.width,
		height = canvas.height,
		radius = height / 2,
		startAngle = 0,
		endAngle = 360,
		//i = 1.5 * endAngle + 1,
		i = 2000,
		colorNumber, angle, cx, cy;

	ctx.translate(radius, radius);

	ctx.beginPath();
	ctx.arc(0, 0, radius, startAngle, endAngle, true);

	// while(i--){
	// 	angle = (i/360) * Math.PI * 2;
	// 	cx = Math.cos(angle)*radius;
	// 	cy = Math.sin(angle)*radius
	// 	ctx.moveTo(x, y);
	// 	ctx.lineTo(cx + x, cy + y);
	// };

	while(i--){
		angle = Math.random() * Math.PI * 2;
		cx = Math.cos(angle)*radius;
		cy = Math.sin(angle)*radius;

		ctx.lineTo(cx, cy);
	};
	ctx.strokeStyle = "oldlace";
	ctx.stroke();
};