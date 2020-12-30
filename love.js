
window.addEventListener("scroll",songcontrol);
function songcontrol()
{
var songElement=document.getElementById("song");
if(document.body.scrollTop>1400 || document.documentElement.scrollTop>1400)
{
songElement.pause();
}
else
{
songElement.play();
}
}
