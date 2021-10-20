var me = "" ;
var lpx,lpy ;
canvas =document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color = "blue";
widthline = 2;

canvas.addEventListener("mousedown", my_mousedown );
function my_mousedown(e)
{
    me = "mousedown";
}

canvas.addEventListener("mouseup", my_mouseup );
function my_mouseup(e)
{
    me = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave );
function my_mouseleave(e)
{
    me = "mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove );
function my_mousemove(e)
{
    cpmx = e.clientX-canvas.offsetLeft;
    cpmy = e.clientY-canvas.offsetTop;
    if(me=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle = color ;
    ctx.lineWidth=widthline;
     console.log("last position of x and y");
     console.log ("x = "+lpx+"y ="+lpy);
     ctx.moveTo(lpx,lpy);
     console.log("current position of x and y");
     console.log ("x = "+cpmx+"y ="+cpmy);
     ctx.lineTo(cpmx,cpmy);
     ctx.stroke();
    }
   lpx=cpmx;
   lpy=cpmy;
}
