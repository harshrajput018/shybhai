var cf=document.getElementById('cf');
arr=['yellow','red','blue']
cf.addEventListener('click',function(){
    rand=Math.floor(Math.random()*3);
    console.log(rand);
    cf.style.backgroundColor=arr[rand];
    cf.innerHTML=arr[rand];
    console.log('clicked',cf.style.backgroundColor);
})

var elem=document.getElementsByClassName('elem');

elem[0].addEventListener('mouseover',function(){
    elem[0].style.color='skyblue';
})
elem[1].addEventListener('mouseover',function(){
    elem[1].style.color='skyblue';
})
elem[2].addEventListener('mouseover',function(){
    elem[2].style.color='skyblue';
})
elem[3].addEventListener('mouseover',function(){
    elem[3].style.color='skyblue';
})
elem[0].addEventListener('mouseout',function(){
    elem[0].style.color='white';
})
elem[1].addEventListener('mouseout',function(){
    elem[1].style.color='white';
})
elem[2].addEventListener('mouseout',function(){
    elem[2].style.color='white';
})
elem[3].addEventListener('mouseout',function(){
    elem[3].style.color='white';
})