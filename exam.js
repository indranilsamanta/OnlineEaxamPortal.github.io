window.onload=function(){
    show(0);
    qcount(1);
}
//question start
let questions=[
    {
        id:1,
        question:"what is your Name?",
        answer:"name",
       option: [
           "name",
           "name2",
           "name3",
           "name4"

        ]

    },
    {
        id:2,
        question:"what is full form of RAM?",
        answer:"Random access memory",
       option: [
           "Random access memory",
           "read acceses memory",
           "read only memory",
           "right act memory"

        ]

    },
    {
        id:3,
        question:"whta is the output?(2+2)",
        answer:"4",
       option: [
           "8",
           "4",
           "100",
           "10"

        ]

    }

]
//question end

function formsubmit(e){
e.preventDefault();
let name=document.forms['nameForm']['name'].value;

//store student name
sessionStorage.setItem('name',name)
//start exam ,exam portal open
location.href="exam.html";
}

let question_count=0;
let score=0;

//next function start
function next(){
    let user_answer=document.querySelector("li.option.active").innerHTML;


    
    if(user_answer == questions[question_count].answer)
    {
        score=score+1;
        sessionStorage.setItem('score',score);

     
    }
   
    if(question_count==questions.length-1){
        sessionStorage.setItem('time',`${minutes} minutes and ${seconds} seconds`);
        //clearInterval(utime);
        location.href="end_exam.html";
        return;
    }


   
    
question_count++;
show(question_count);

qcount(question_count)

}

function show(count){
    let question=document.getElementById('question');

   question.innerHTML=`
   <h2>Q ${question_count+1}. ${questions[count].question }</h2>

                    <ul class="option_group">
                    <li class="option ">${questions[count].option[0]}</li>
                    <li class="option">${questions[count].option[1]}</li>
                    <li class="option">${questions[count].option[2]}</li>
                    <li class="option">${questions[count].option[3]}</li>
                </ul>
   
   `;
   toggleactive();

}
//active function start
function toggleactive(){
    let option=document.querySelectorAll("li.option");
    for(let i=0;i<option.length;i++){
        option[i].onclick=function(){
            for(let j=0;j<option.length;j++){
                if(option[j].classList.contains("active")){
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
        
    }
}


function previous(){
    question_count--;
    show(question_count);
    
}
let que_count=document.querySelector(".tqcount");

function qcount(){
let totalqcount= question_count+1 +' of '+questions.length+' Questions';
que_count.innerHTML=totalqcount;

}
let uname =sessionStorage.getItem('name');
document.querySelector('.name').innerHTML= uname;