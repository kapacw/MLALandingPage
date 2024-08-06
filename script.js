function ponteiro_corFundo(on){
    on.style.cursor = "pointer";
    on.style.backgroundColor = "#1D2023";
}
function ponteiroOff(off){
    off.style.backgroundColor = "#30373E"
}
function ponteiro(on2){
    on2.style.cursor = "pointer";
}

let menu = document.getElementById("popUpMenu");

function popUpMenu(){
    menu.style.opacity = "100%";
}
function popOutMenu(){
    menu.style.opacity = "0%";
}


let lupa = document.getElementById("popUpLupa");

function popUpLupa(){
    lupa.style.opacity = "100%";
}
function popOutLupa(){
    lupa.style.opacity = "0%";
}


let sino = document.getElementById("popUpSino");

function popUpSino(){
    sino.style.opacity = "100%";
}
function popOutSino(){
    sino.style.opacity = "0%";
}


let info1 = document.getElementById("popUpInfo1");

function popUpInfo1(){
    info1.style.opacity = "100%";
}
function popOutInfo1(){
    info1.style.opacity = "0%";
}


let info2 = document.getElementById("popUpInfo2");

function popUpInfo2(){
    info2.style.opacity = "100%";
}
function popOutInfo2(){
    info2.style.opacity = "0%";
}


let info3 = document.getElementById("popUpInfo3");

function popUpInfo3(){
    info3.style.opacity = "100%";
}
function popOutInfo3(){
    info3.style.opacity = "0%";
}


let info4 = document.getElementById("popUpInfo4");

function popUpInfo4(){
    info4.style.opacity = "100%";
}
function popOutInfo4(){
    info4.style.opacity = "0%";
}


let home = document.getElementById("popUpHome");

function popUpHome(){
    home.style.opacity = "100%";
}
function popOutHome(){
    home.style.opacity = "0%";
}


let botao = document.getElementById("dropDown");

function opacity100(){
    botao.style.opacity = "100%";
}

function displayNone(){
    botao.style.display = "none";
}

function botaoDrop(){
    botao.style.display = "flex";
    setTimeout(opacity100,50)
}
function botaoDrop0(){
    botao.style.opacity = "0%";
    setTimeout(displayNone,500)
}
window.onclick = function(event) {
    if (!event.target.matches('.buttonMenu')) {
      var dropdowns = document.getElementsByClassName("dropContent");
      for (let i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.style.display = "flex") {
            botaoDrop0();
        }
      }
    }
  }
