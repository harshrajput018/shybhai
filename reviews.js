var image=document.getElementById('image');

var h=document.getElementById('name');

var rev=document.getElementById('rev');

arr=['Mohammed Abdul Azeem','Aman Sharma','Harsh Rajput','Aakash','anonymous','anonymous','anonymous'];
review=['My name is Abdul','My name is Aman','My name is ','My name is Aakash','My name is','My name is','My name is'];

image.innerHTML=`<img src="${0}.jpg" alt="">`
    h.innerHTML=`${arr[0]}`
    rev.innerHTML=`${review[0]}`



var elem=document.querySelectorAll('.num');
console.log(elem);

elem.forEach(element => {
element.addEventListener('mouseover',function()
{
    image.innerHTML=`<img src="${element.id}.jpg" alt="">`
    h.innerHTML=`${arr[element.id]}`
    rev.innerHTML=`${review[element.id]}`
    element.style.backgroundColor='white';
})
element.addEventListener('mouseout',function()
{
    element.style.backgroundColor='grey';
})


})