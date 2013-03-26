window.onload = function(){
	var canvas = document.getElementById("canvas"),
		ctx = canvas.getContext("2d"),
		FPS = 24,
		FRAME_MSEC = 1000 / FPS >> 0,
		oldX, oldY, x, y,
		count = 0,
		max = 500,
		shade = 0;

	ctx.moveTo(0, 0);
	ctx.strokeStyle = 'white';

	setInterval(intervalHandler, FRAME_MSEC);

	function intervalHandler(){
		//ctx.clearRect(0, 0, canvas.height, canvas.width);

		count++;
		console.log(count, shade);

		if(count%max === 0){
			shade = random(255);

			ctx.strokeStyle = "rgb("+shade+","+shade+","+shade+")";
			ctx.beginPath();
		};

		ctx.lineTo(canvas.width, random(canvas.height));
		ctx.lineTo(random(canvas.width), canvas.height);
		ctx.lineTo(0, random(canvas.height));
		ctx.lineTo(random(canvas.width), 0);
		
		ctx.stroke();
	};

	function random(n){
		return Math.floor(Math.random() * n);
	};
};