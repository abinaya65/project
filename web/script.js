

var change=document.querySelector('h3')
var imgchange=document.querySelector('#change')
var addmenu=document.querySelector('#add')
var removemenu=document.querySelector('#remove')


addmenu.addEventListener('click',function(){
    change.innerHTML="chocolate"
    change.style.color="beige"
    imgchange.src=""


})

removemenu.addEventListener('click',function(){
    change.innerHTML="vennila"
    change.style.color="greenyellow"
    imgchange.src=""


})











    





