window.onscroll=songcontrol;

function songcontrol()
{
var song=document.getElementById("song");
if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
song.pause();
}
else
{
song.play();
}
}
