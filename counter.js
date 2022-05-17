var counter=document.getElementById('counter');
var inc=document.getElementById('inc');
var res=document.getElementById('res');
var dec=document.getElementById('dec');

count=0;
inc.addEventListener('click',function(){
    count++;
    counter.innerHTML=count;
})
dec.addEventListener('click',function(){
    count--;
    if(count<0)
    count=0;
    counter.innerHTML=count;
})
res.addEventListener('click',function(){
    count=0;
    counter.innerHTML=count;
})
inc.addEventListener('mouseover',function(){
    inc.style.backgroundColor='darkgrey'
})
dec.addEventListener('mouseover',function(){
    dec.style.backgroundColor='darkgrey'
})
res.addEventListener('mouseover',function(){
    res.style.backgroundColor='darkgrey'
})
inc.addEventListener('mouseout',function(){
    inc.style.backgroundColor='gainsboro'
})
dec.addEventListener('mouseout',function(){
    dec.style.backgroundColor='gainsboro'
})
res.addEventListener('mouseout',function(){
    res.style.backgroundColor='gainsboro'
})