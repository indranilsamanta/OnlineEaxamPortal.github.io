let dt=new Date(new Date().setTime(0));
let time=dt.getTime();
let seconds= Math.floor((time%(100*60))/1000);
let minutes= Math.floor((time%(1000*60*60))/(1000*60));

let timex=0;

let utime=setInterval(function()
{
    if(seconds<59){
        seconds++;
    }
    else{
        minutes++;
        seconds=0;
    }
    let formated_sec=seconds<10 ? `0${seconds}`:`${seconds}`;
    let formated_min=minutes<10 ? `0${minutes}`:`${minutes}`;
    // console.log(formated_sec,formated_min);
     document.querySelector(".timer").innerHTML=`${formated_min} : ${formated_sec}`;
},1000)