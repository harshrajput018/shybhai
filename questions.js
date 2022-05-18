var q = document.getElementById('questions');

questions = ['What is you name?', 'How old are you?', 'Where do you live?']
answer = ['Harsh', '20', 'Delhi']


var html = '';
for (var i = 0; i < 3; i++) {

    html += `<div class="elem">
    <div class="ques" id="ques${i}">
    ${questions[i]}
    </div>
    <div class="symbol" id="sym${i}">
    &plus;
    </div>
    </div>
    
    <div class='answer' id="${i+3}">

    </div>
    `
    
}


q.innerHTML = html;

var a = document.querySelectorAll('.symbol');
let counter=[0,0,0];

for (let j = 0; j < 3; j++) {
    a[j].addEventListener('click', function () {
        counter[j]++;
        console.log(counter[j]);
        document.getElementById(`ques${j}`).style.backgroundColor='black';
        document.getElementById(`ques${j}`).style.color='orangered';
        document.getElementById(j + 3).innerHTML = answer[j];
        if(counter[j]%2!=0)
        document.getElementById(j+3).style.display='block';
        else
        document.getElementById(j+3).style.display='none';
        if(counter[j]%2!=0)
        document.getElementById(`sym${j}`).innerHTML='-';
        else
        document.getElementById(`sym${j}`).innerHTML='+';
        document.getElementById(`sym${j}`).style.color='white';

    })    
}


