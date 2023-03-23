let icon=document.getElementById("icon");

let icon2=document.getElementById("icon2");

let menu2=document.getElementById("menu2");




icon.onclick = function(){
    menu2.style.visibility='visible';
    menu2.style.scale='1';
    menu2.style.transitionDuration='1s';
    icon.style.display='none';
}
icon2.onclick = function(){
    menu2.style.visibility='hidden';
    menu2.style.scale='0';
    menu2.style.transitionDuration='.3s';
    icon.style.display='block';
}