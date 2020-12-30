var songElement="document.getElementById("song");


window.onload=function()
{
songElement.play();
}

window.addEventListener("scroll",songcontrol);

function songcontrol ()
{
if(document.body.scrollTop=1400 || document.documentElement.scrollTop=1400)
{
songElement.pause();
}
}

