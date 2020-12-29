window.onload=function(){
var div=document.getElementById("purpose");
div.addEventListener("scroll",songcontrol);
}

function songcontrol ()
{
var song=document.getElementById("song");
song.play();

}
