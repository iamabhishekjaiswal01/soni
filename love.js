window.onload=function(){
var div=document.getElementById("me");
div.onscroll=songcontrol;
}

function songcontrol ()
{
var song=document.getElementById("song");
song.play();
}
