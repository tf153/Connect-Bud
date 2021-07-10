const canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");
 
// ctx.fillStyle="#ff0000";
// ctx.fillRect(20,30,150,100);

// ctx.lineWidth=5;
// ctx.strokeStyle="red";
// ctx.strokeRect(20,30,150,100);
ctx.arc(75,75,50,0,2*Math.PI,false);
ctx.lineWidth=5;
ctx.strokeStyle="red";
ctx.stroke();
// ctx.moveTo(200,75);
// ctx.arc(75,75,50,0,2*Math.PI,false);
// ctx.arc(75,75,35,0,2*Math.PI,false);
ctx.lineWidth=2;
ctx.strokeStyle="black";
ctx.stroke();

$(document).ready(function(){
  $("button").click(function(){
    $("p").toggle();
  });
});