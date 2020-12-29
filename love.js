window.addEventListener("scroll",songcontrol);

function songcontrol()
{
var songElement=document.getElementById("song");
if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
songElement.pause();
}
else
{
songElement.play();
}
}
