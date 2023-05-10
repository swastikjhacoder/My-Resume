const links = document.querySelectorAll(".page-header ul a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

var progressBars = document.querySelectorAll('skill-progress > div');
var skillsContainer = document.getElementById('skill-container');
window.addEventListener('scroll', checkScroll);
var animationDone = false;

function initializeBars(){
    for(let bar of progressBars){
        bar.style.width = 0 + "%";
    }
}

initializeBars();

function fillBars(){
    for(let bar of progressBars){
        let targertWidth = bar.getAttribute('data-bar-width');
        let currentWidth = 0;
        let interval = setInterval(function(){
            if(currentWidth > targertWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth+"%";
        },5);
    }
}

function checkScroll(){
    var coordinates = skillsContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top <= window.innerHeight){
        animationDone = true;
        fillBars();
    }else if(coordinates.top > window.innerHeight){
        animationDone = false;
        initializeBars();
    }
}