let gameseq=[];
let userseq=[];

let btns=["blue","red","green","cyan"];
let started=false;
let level=0;

let h2=document.querySelector("h2");


document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true; 
        levelup();
    }

  
});


function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");}
        ,250
    );

};



function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;

    //random button chose
    let randind=Math.floor(Math.random()*3);
    let randcolor=btns[randind];
    let randbtn=document.querySelector(`.${randcolor}`)
    gameseq.push(randcolor);
    console.log(gameseq);
    btnflash(randbtn);
};

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");}
        ,250
    );

};

function checkans(idx){
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over! your score was <b>${level}</b><br> press any key to start`;
        let body=document.querySelector("body");
        body.style.backgroundColor="red"
        setTimeout(function(){
            body.style.backgroundColor="white"
        },150);
        reset();
    }
}

function btnpress(){
    console.log(this);
    let btn=this;
    userflash(btn);
    usercolor=btn.getAttribute("id");
    console.log(usercolor);
    userseq.push(usercolor);
    checkans(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    gameseq=[];
    userseq=[];
    started=false;
    level=0;
}