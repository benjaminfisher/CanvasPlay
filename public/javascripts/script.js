//script.js

Circles = function(x, y, ctx){
	this.radius = {
		val: 0,
		increment: 2,
		increase: true
	},
	this.shade = {
		val: 0,
		increment: 1,
		increase: true
	},
	this.ctx = ctx;
};
Circles.prototype = {
	draw: function(){
		//console.log(this.ctx);

		(this.radius.increase) ? this.radius.increment +=1 : this.radius.increment -=1;
		if(this.radius.increment >= 200) this.radius.increase = false;
		if(this.radius.increment <= 1) this.radius.increase = true;

		while(this.radius.val <= this.ctx.canvas.height / 2){
			this.radius.val += this.radius.increment;

			(this.shade.increase) ? this.shade.val += this.shade.increment : this.shade.val -= this.shade.increment;
			if(this.shade.val >= 255) this.shade.increase = false;
			if(this.shade.val <= 0) this.shade.increase = true;

			this.ctx.beginPath();
			// this.ctx.strokeStyle = "rgb(" + this.shade.val + "," + this.shade.val + "," + this.shade.val +")";

			// ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
			this.ctx.arc(this.x, this.y, this.radius.val, 0, Math.PI * 2, false);
			this.ctx.moveTo(this.x + this.radius.val, this.y + this.radius.val);

			this.ctx.stroke();
		};
	}
}

window.onload = function(){
	var gr = 1.61803398875,
		canvas = document.getElementById("canvas"),
		ctx = canvas.getContext("2d"),
		FPS = 24,
		FRAME_MSEC = 1000 / FPS >> 0;

	var c1 = new Circles(canvas.height/2, canvas.width/2, ctx);

	setInterval(intervalHandler, FRAME_MSEC);

	function intervalHandler(){
		ctx.clearRect(0, 0, canvas.height, canvas.width);
		c1.draw();
	};
};