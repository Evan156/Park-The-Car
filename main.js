canvas = document.getElementById('Turbo');
ctrx = canvas.getContext('2d')

car2.png_width = 75;
car2.png_hight = 100; 
background_image = "parkingLot.jpg";
greencar_image = "car2.png";



function add() {
	background_imageTag = new Image();
	background_imageTag.onload = uploadBackground;  
	background_imageTag.scr = background_image;

	car2.png_imageTag = new Image();
	car2.png_imageTag.onload = uploadcar2.png;
	car2.png_imageTag.scr = car2.png_image;

}

function uploadBackground() {
	ctrx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.hight)

}

function uploadgreencar() {
	ctrx.drawImage(car2.png_imageTag, 0, 0, car2.png.width, car2.png.hight)
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up(){
	if ( car2.png >= 0) {
        car2.png_y = car2.png_y - car2.png_height;
        console.log("When up arrow is pressed,  x = "+car2.png_x +" y = +car2.png_y ");
        canvas.remove(player_object);
        player_update();
    }}
	
function down()
{if ( car2.png <= 300) {
	car2.png_y = car2.png_y + car2.png_height;
	console.log("When down arrow is pressed,  x = "+car2.png_x +" y = +car2.png_y ");
	canvas.remove(player_object);
	player_update();
	
}}

function left()
{ if ( car2.png >= 0) {
	car2.png_x = car2.png_x - car2.png_height;
	console.log("When left arrow is pressed,  x = "+car2.png_x +" y = +car2.png_y ");
	canvas.remove(player_object);
	player_update();
	
}}

function right()
{if ( car2.png <= 700) {
	car2.png_x = car2.png_x + car2.png_height;
	console.log("When up arrow is pressed,  x = "+car2.png_x +" y = +car2.png_y ");
	canvas.remove(player_object);
	player_update();
	
}}
