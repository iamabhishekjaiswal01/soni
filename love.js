window.onload=function(){
var div=document.getElementById("me");
div.addEventListener("scroll",songcontrol);
}

function songcontrol ()
{
var song=document.getElementById("song");
song.play();

}
