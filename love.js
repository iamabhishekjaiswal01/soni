window.onload=function ()
{
document.getElementById("song").play();
}

window.addEventListener("scroll",songcontrol);
function songcontrol()
{
if (document.body.scrollTop > 750) {
document.getElementById("song").pause();
}
else
{
document.getElementById("song").play();
}
}
