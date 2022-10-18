var timeEle = document.getElementById('time');
var music = document.getElementById('music');
var play = document.getElementById('play');

var isPlay = false;

var startTime2 = new Date("08/22/2021");
var endTime2 =new Date("10/20/2021");

var startTime3 = new Date("4,21,2022");
var endTime3 = new Date("7,7,2022");

var startTime4 = new Date("7,21,2022");
var endTime4 = new Date("12,0,9999");

var span1 = 604800000;
var span2 = endTime2.getTime() - startTime2.getTime();
var span3 = endTime3.getTime() - startTime3.getTime();

var addTime = span1+span2+span3;

//时间的跳动
var timer = setInterval(function(){
    let newTime =  new Date();
    let time = newTime.getTime() - startTime4.getTime() + addTime;
    let t = new Date(time);
    let year = t.getFullYear()-1970;
    let month = t.getMonth()+1;
    let day = t.getDate();
    let hour = t.getHours();
    let min = t.getMinutes();
    let sec = t.getSeconds();
    let alDay = Math.floor(t.getTime()/86400000);
    // console.log(year+"-"+month+"-"+day+"-"+hour+"-"+min+"-"+sec);
    htmlContent = alDay+"d "+hour+"h&nbsp;"+min+"min "+sec+"s ";
    timeEle.innerHTML = htmlContent;

},500);

//设置音乐的播放
music.volume = 0.5;
music.loop = true;
play.onclick = function(){
    isPlay=!isPlay;
    if(isPlay){
        music.play(); 
        play.src = "res/img/pause.png";
    }else{
        music.pause();
        play.src = "res/img/play.png";
    }
    
}

