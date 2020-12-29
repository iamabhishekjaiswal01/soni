window.addEventListener("scroll",songcontrol);

function songcontrol()
{
var songElement=document.getElementById("song");
songElement.preload="auto";
if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {
songElement.pause();
}
else
{
songElement.play();
}
}
