var blockSize=30;
var rows=25;
var columns=25;
var board;
var context;
var moveX=0;
var moveY=0;
var headX=blockSize*5;
var headY=blockSize*5;
var appleX=blockSize*10;
var appleY=blockSize*10;
var snakeBody=[]; 
var gameOver=false;
var count=0;

window.onload =function(){
 
  board=document.getElementById("board");
  board.height=rows*blockSize;
  board.width=columns*blockSize;
  context=board.getContext("2d");
  placeFood();
  document.addEventListener("keydown",changeDirection)
  setInterval(loop,120);
}

function loop(){
  if(gameOver){
    return;
  }
 
  context.fillStyle="green";
  context.fillRect(0,0,board.width,board.height);
  context.fillStyle="red";
  context.fillRect(appleX,appleY,blockSize,blockSize);
  if(headX==appleX&&headY==appleY){
    snakeBody.push([appleX,appleY])
        placeFood();
        count++;
        document.getElementsByClassName("points")[0].innerHTML=count;
  }
  for(var i=snakeBody.length-1;i>0;i--){
    snakeBody[i]=snakeBody[i-1];
  }
  if(snakeBody.length){
    snakeBody[0]=[headX,headY];
  }
  context.fillStyle="blue";
  headX=headX+moveX*blockSize;
  headY=headY+moveY*blockSize;
  context.fillRect(headX,headY,blockSize,blockSize);
  for(var i=0;i<snakeBody.length;i++){
    context.fillRect(snakeBody[i][0],snakeBody[i][1],blockSize,blockSize);
  }
   
  if(headX<0 || headY<0 || headX>columns*blockSize || headY>rows*blockSize ){
    gameOver=true;
    alert("Game Over")
  }
   for(var k=0;k<snakeBody.length;k++){
    if(headX==snakeBody[i][0] && headY==snakeBody[i][1]){
              gameOver=true;
              alert("Game Over");
    }
   }


}
function placeFood(){
  appleX=Math.floor(Math.random()*columns)*blockSize;
  appleY=Math.floor(Math.random()*rows)*blockSize;
}

function changeDirection(event){
   if(event.key=="ArrowUp" && moveY!=1){
    moveX=0;
    moveY=-1;
   }else if(event.key=="ArrowDown" && moveY!=-1){
    moveX=0;
    moveY=1;
   }else if(event.key=="ArrowLeft" && moveX!=1){
    moveX=-1;
    moveY=0;
   }else if(event.key="ArrowRight"  &&moveX!=-1){
    moveX=1;
    moveY=0;
   }
}
var value;
document.getElementsByClassName("button")[0].addEventListener("click",function(){
  value=document.getElementsByClassName("button")[0].value;
  turn(value);
  
});
document.getElementsByClassName("button")[1].addEventListener("click",function(){
  value=document.getElementsByClassName("button")[1].value;
  turn(value);
  
});
document.getElementsByClassName("button")[2].addEventListener("click",function(){
   value=document.getElementsByClassName("button")[2].value;
   turn(value);
   
});
document.getElementsByClassName("button")[3].addEventListener("click",function(){
  value=document.getElementsByClassName("button")[3].value;
  turn(value);
  
});

function turn(value){
  if(value=="one" && moveY!=1){
    moveX=0;
    moveY=-1;
   }else if(value=="two" && moveY!=-1){
    moveX=0;
    moveY=1;
   }else if(value=="three" && moveX!=1){
    moveX=1;
    moveY=0;
   }else if(value=="four" &&moveX!=-1){
    moveX=-1;
    moveY=0;
   }
}