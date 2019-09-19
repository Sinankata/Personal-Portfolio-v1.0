window.onload = function () {
  // SLIDER WITH PROJECTS
dragCard(document.getElementById("drag"));

function dragCard(elmnt) {
  let pos1 = 0, pos2 = 0;
  if (document.getElementById("grab")) {
    document.getElementById("grab").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos2 = e.clientX;
    document.onmouseup = closeDragCard;
    document.onmousemove = CardDrag;
  }

  function CardDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos2 - e.clientX;
    pos2 = e.clientX;
    if(pos2 > 94 && pos2 < 900){
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    document.getElementById("dimming").style.display = "block";
    }
  }

  function closeDragCard() {
    document.onmouseup = null;
    document.onmousemove = null;
    document.getElementById("dimming").style.display = "none";
  }
}

 // SLIDER

//BOUNCING BALL


  let arrow = document.getElementById("arrow");
  let home = document.getElementById("home");
  let projects = document.getElementById("projects");
  let aboutMe = document.getElementById("aboutMe");
  let arrowLink = document.getElementById("arrowLink");
  projects.addEventListener("mouseenter",function (){
    arrow.style.display="block";
    arrow.style.transform="rotate(90deg)";
    arrow.classList.add("animation2");
    arrowLink.setAttribute('href', '#aboutMe');
  })
 

  aboutMe.addEventListener("mouseenter",function (){
    arrow.style.display="block";
    arrow.style.transform="rotate(-90deg)"
    arrow.classList.remove("animation2");
    arrow.classList.add("animation1");
    arrowLink.setAttribute('href', '#home');
  })
  home.addEventListener("mouseenter",function (){
    arrow.style.display="none"
     arrow.classList.remove("animation2");
    arrow.classList.add("animation1");
  })


  
}
function circle(){
  let circle = document.getElementById("circleAnimation"); 
  circle.addEventListener("mouseover", animateBox);
}
 function animateBox(){
  let box = document.getElementById("socials");
  box.classList.add("socialsAnimation1");
  box.style.display = "grid";
}
function pauseBox(){
  setTimeout(
  function(){ 
  let box = document.getElementById("socials");
  box.classList.add("socialsAnimation2");
            }, 5000);

            setTimeout(
              function(){ 
              let box = document.getElementById("socials");
              box.style.display="none";
              box.classList.remove("socialsAnimation2");
                        }, 5300);

                  }
//BOUNCING BALL
//LITTLE ARROW//

  
//LITTLE ARROW//