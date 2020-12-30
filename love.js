window.addEventListener("scroll",songcontrol);

function songcontrol()
{
if (document.body.scrollTop > 1100 || document.documentElement.scrollTop > 1100) 
{
document.getElementById("song").pause();
}
else
{
document.getElementById("song").play();
}
}
