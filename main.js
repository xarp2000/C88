

var canvas = new fabric.Canvas('myCanvas')

ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;
block_image_width = 5;
block_image_height = 5;

function loadImg(){
	fabric.Image.fromURL("golf-h.png", function(Img) {
	     hole_obj = Img;
	     hole_obj.scaleToWidth(50);
	     hole_obj.scaleToHeight(50);
	     hole_obj.set({
         top:ball_y
         left:ball_x
		 });
	       canvas.add(ball_obj);
		 });
	newImage();
}

function newImage()
{
	if((ball_x==hole_y)&&(ball_y==ball_x)){
      canvas.remove(ball_obj);
	}
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
document.getElementById("hd3").innerHTML="Você atingiu o objetivo!!!";
document.getElementById("myCanvas").style.borderColor="red";
	else{
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
	
	function up()
	{
		if(player_y >=0)
	{
		player_y = player_y - block_image_height;
		console.log("altura da imagem do bloco = " + block_image_height);
		console.log("Quando a seta para cima é pressionada, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
	}

	function down()
	{
		if(player_y <=450)
		{
		player_y = player_y - block_image_height;
		console.log("altura da imagem do bloco t = " + block_image_height);
		console.log("Quando a seta para baixo é pressionada, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

	function left()
	{
		if(ball_X >5)
		{
			player_x = player_x - block_image_width;
		console.log("largura da imagem do bloco = " + block_image_width);
		console.log("Quando a seta esquerda é pressionada, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
		}
	}

	function right()
	{
		if(ball_X <=1050)
		{
			player_x = player_x + block_image_width;
		console.log("largura da imagem do bloco = " + block_image_width);
		console.log("Quando a seta direita é pressionada, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
		}
	}
	
}

