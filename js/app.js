
var accordion = document.querySelector(".accordion");
var items = document.querySelectorAll(".page");

for(i=0; i < items.length; i++) {
  items[i].addEventListener("mouseenter", function(){
    remove();
    this.classList.add("expand");
  })
}

function remove() {
  for(i=0; i < items.length; i++) {
    items[i].classList.remove("expand")
  }
};

//slider controls
var slider = document.querySelector(".slides");
var rightbtn = document.querySelector(".btn-hover-right");
var leftbtn = document.querySelector(".btn-hover-left");
var bullets = document.querySelectorAll(".dot");

rightbtn.addEventListener("click", sliderRight);
leftbtn.addEventListener("click", sliderLeft);

function sliderRight() {
  slider.style.transform = "translateX(-50%)";
  for(i=0; i<bullets.length; i++) {
    removeblts();
    bullets[1].classList.add("active");
  }
}
function sliderLeft() {
  slider.style.transform = "translateX(0%)";
  for(i=0; i<bullets.length; i++) {
    removeblts();
    bullets[0].classList.add("active");
  }
}

function removeblts() {
  for(i=0; i < bullets.length; i++) {
    bullets[i].classList.remove("active");
  }
}

//search nav
var search = document.querySelector(".search");
var overlay = document.querySelector(".background-full");
var expanding = document.querySelector(".search-bar");
var close = document.querySelector(".right-close")

search.addEventListener("click", function(){
  document.body.style.overflowY = "hidden";
  function expandone() {
    overlay.style.height = "100%";
  }
  function expandtwo() {
    expanding.style.height = "430px";
  }
  setTimeout(expandone,150);
  setTimeout(expandtwo,450);
});

close.addEventListener("click", function(){
  document.body.style.overflowY = "scroll";
  function expandone() {
    overlay.style.height = "0";
  }
  function expandtwo() {
    expanding.style.height = "0";
  }
  setTimeout(expandone,200);
  setTimeout(expandtwo,0);
});
