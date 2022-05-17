var symbol=document.getElementById('symbol')
var btn=document.getElementById('btn')
var card=document.getElementById('card');
var inner=document.getElementById('inner');

symbol.addEventListener('click',function(){
    card.style.display='none';
})

btn.addEventListener('click',function(){
    inner.innerHTML='<h1>Money can buy happiness</h1>';    
})