window.addEventListener("scroll",songcontrol);

function songcontrol()
{
var song=document.getElementById("song");
if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
song.pause();
}
else
song.play();
}
