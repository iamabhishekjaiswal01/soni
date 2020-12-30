window.addEventListener("scroll",songcontrol);

function songcontrol()
{
var songElement=document.getElementById("song");
if (document.body.scrollTop > 850 || document.documentElement.scrollTop > 850) {
document.getElementById("song").pause();
}
else
{
document.getElementById("song").play();
}
}
