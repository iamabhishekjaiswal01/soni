
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
