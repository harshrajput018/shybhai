var q=document.getElementById('questions');

questions=['What is you name?','How old are you?', 'Where do you live?']
answer=['Harsh','20','Delhi']


var html='';
for(var i=0;i<3;i++)
{
    
    html+=`<div class="elem">
    <div class="question">
    ${questions[i]}
</div>
<div class="symbol" id="${i}">
    &plus;
</div>
<div class="answer" id="${i+3}">
</div>
</div>`
}

q.innerHTML=html;

var a=document.querySelectorAll('.symbol');

a.forEach((element,index) => {
    element.addEventListener('click',function(){
        document.getElementById(index+3).innerHTML=answer[index];
    })
});




