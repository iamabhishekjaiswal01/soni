window.addEventListener("scroll",songcontrol);

function songcontrol()
{
if (document.body.scrollTop > 950 || document.documentElement.scrollTop > 950) {
document.getElementById("song").pause();
}
else
{
document.getElementById("song").play();
}
}
