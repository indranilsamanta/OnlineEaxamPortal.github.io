
let uname =sessionStorage.getItem('name');
let score =sessionStorage.getItem('score');
let time=sessionStorage.getItem('time');
document.querySelector('.name').innerHTML= uname;
document.querySelector('.user_score').innerHTML= score;
document.querySelector('.user_time').innerHTML= time;

