window.addEventListener("scroll",songcontrol);

function songcontrol()
{
var song= document.getElementById("song");
song.load();
if (document.body.scrollTop > 1100 || document.documentElement.scrollTop > 1100) 
{
song.pause();
}
else
{
song.play();
}
}
