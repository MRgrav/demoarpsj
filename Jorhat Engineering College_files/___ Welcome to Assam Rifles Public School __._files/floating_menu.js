<!-- Start

// NOTE: If you use a ' add a slash before it like this \'

// FLOATING MENU AREA - SEE NOTE BELOW FOR MOVING THE MENU UP ON THE PAGE






// COPYRIGHT 2006 © Allwebco Design Corporation




// NOTE: If you add links you will need to alter the "placeY" 275 number below


if (!document.layers)
document.write('</div>')

function FloatMenu()
{

posY = getScreenCenterY();
posX = getScreenCenterX();
 
dv = document.createElement('div');
dv.setAttribute('id',"css_dialog");
dv.style.cssText = "position:absolute;top:"+posY+"px;left:"+posX+"px;";






	var Xloc = posX-548,
	Yloc =500 /* posY+100;*/
	var ns = (navigator.appName.indexOf("Netscape") != -1);
	function SetMenu(id)
	{
		var GetElements=document.getElementById?document.getElementById(id):document.all?document.all[id]:document.layers[id];
		if(document.layers)GetElements.style=GetElements;
		GetElements.sP=function(x,y){this.style.left=x;this.style.top=y;};
		GetElements.x = Xloc;
		GetElements.y = ns ? pageYOffset + innerHeight : document.body.scrollTop + document.body.clientHeight;
		GetElements.y -= Yloc;
		return GetElements;
	}
	window.LoCate_XY=function()
	{
		var pY = ns ? pageYOffset + innerHeight : document.body.scrollTop + document.body.clientHeight;
		ftlObj.y += (pY - Yloc - ftlObj.y)/15;
		ftlObj.sP(ftlObj.x, ftlObj.y);
		setTimeout("LoCate_XY()", 10);
	}
	ftlObj = SetMenu("Floater");
	LoCate_XY();
}
FloatMenu();





function getScreenCenterY() {
var y = 0;
 
y = getScrollOffset()+(getInnerHeight()/2);
 
return(y);
}
 
function getScreenCenterX() {
return(document.body.clientWidth/2);
}
 
function getInnerHeight() {
var y;
if (self.innerHeight) // all except Explorer
{
y = self.innerHeight;
}
else if (document.documentElement>document.documentElement.clientHeight)
// Explorer 6 Strict Mode
{
y = document.documentElement.clientHeight;
}
else if (document.body) // other Explorers
{
y = document.body.clientHeight;
}
return(y);
}
 
function getScrollOffset() {
var y;
if (self.pageYOffset) // all except Explorer
{
y = self.pageYOffset;
}
else if (document.documentElement > document.documentElement.scrollTop)
// Explorer 6 Strict
{
y = document.documentElement.scrollTop;
}
else if (document.body) // all other Explorers
{
y = document.body.scrollTop;
}
return(y);
}



//  End -->