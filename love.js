


window.addEventListener("scroll",songcontrol);

function songcontrol()
{
if (document.body.scrollTop > 1300 || document.documentElement.scrollTop > 1300) 
{
song.pause();
}
else
{
song.play();
}
}
