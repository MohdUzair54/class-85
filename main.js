canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
rower_width=100;
rower_height=90;
Background_image="mars.jpg";
rower_image="rover.png";
rower_x=10;
rower_y=10


function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    
    background_imgTag.src=Background_image;

    rower_imgTag=new Image();
    rower_imgTag.onload=uploadrower;
    rower_imgTag.src=rower_image;
                         
}

function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadrower(){
    ctx.drawImage(rower_imgTag,rower_x,rower_y,rower_width,rower_height);
}



window.addEventListener("keydown",my_keydown);

function my_keydown(e){
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
    if(rower_y>=0){
        rower_y -=10;
        console.log("when up arrow is pressed"+ rower_x+"-"+rower_y);
        uploadBackground();
        uploadrower();
        
    }
}


function down(){
    if(rower_y<=500){
        rower_y +=10;
        console.log("when down arrow is pressed"+ rower_x+"-"+rower_y);
        uploadBackground();
        uploadrower();
        
    }
}



function left(){
    if(rower_x>=0){
        rower_x -=10;
        console.log("when left arrow is pressed"+ rower_x+"-"+rower_y);
        uploadBackground();
        uploadrower();
        
    }
}



function right(){
    if(rower_x<=700){
        rower_x +=10;
        console.log("when right arrow is pressed"+ rower_x+"-"+rower_y);
        uploadBackground();
        uploadrower();
       
    }
}