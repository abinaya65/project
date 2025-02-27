var butColor=document.querySelector('#butcolor')
var Color=document.querySelector('#new')
Color.addEventListener('click',function(){
    var random=Math.random();
    var number= random*1000000;
    var number1=Math.floor(number);
    console.log(Math.floor(number1));
    butColor.style.backgroundColor=`#${number1}`

})