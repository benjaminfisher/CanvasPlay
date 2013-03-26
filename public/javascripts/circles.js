//circles.js

Circles = function(x, y, ctx){
	this.radius = {
		val: 0,
		increment: 1,
		increase: true
	},
	this.shade = {
		val: 0,
		increment: 1,
		increase: true
	},
	distance = function(x1, y1, x2, y2){
		return Math.sqrt((x2 - x1)*(x2 - x1) + (y2 - y1)*(y2 - y1));
	},
	this.x = x;
	this.y = y;
	this.ctx = ctx;
	this.maxRadius = Math.floor(Math.max(
		distance(x, y, 0, 0),
		distance(x, y, this.ctx.canvas.width, 0),
		distance(x, y, 0, this.ctx.canvas.height),
		distance(x, y, this.ctx.canvas.width, this.ctx.canvas.height)
	));
};
Circles.prototype = {
	draw: function(){
		this.radius.val = 0;

		(this.radius.increase) ? this.radius.increment += 2 : this.radius.increment -= 2;
		if(this.radius.increment >= 200) this.radius.increase = false;
		if(this.radius.increment <= 1) this.radius.increase = true;

		while(this.radius.val <= this.maxRadius){
			this.radius.val += this.radius.increment;

			(this.shade.increase) ? this.shade.val += this.shade.increment : this.shade.val -= this.shade.increment;
			if(this.shade.val >= 255) this.shade.increase = false;
			if(this.shade.val <= 0) this.shade.increase = true;

			this.ctx.beginPath();
			//this.ctx.strokeStyle = "rgb(" + this.shade.val + "," + this.shade.val + "," + this.shade.val +")";

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

	var c1 = new Circles(canvas.height/2, canvas.width/2, ctx)
		, c2 = new Circles(0, 0, ctx)
		, c3 = new Circles(canvas.height, canvas.width, ctx)
		, c4 = new Circles(canvas.width, 0, ctx)
		, c5 = new Circles(0, canvas.height, ctx)
	; setInterval(intervalHandler, FRAME_MSEC);

	function intervalHandler(){
		ctx.clearRect(0, 0, canvas.height, canvas.width);
		c1.draw.call(c1);
		c2.draw.call(c2);
		c3.draw.call(c3);
		c4.draw.call(c4);
		c5.draw.call(c5);
	};
};