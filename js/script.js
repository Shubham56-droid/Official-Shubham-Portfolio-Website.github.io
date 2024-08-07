// basic cursor
let cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX - 25 + "px";
  cursor.style.top = e.pageY - 25 + "px";
});

// dark and light mode switching
let content = document.getElementById("content");
let body = document.body;
body.addEventListener("dblclick", () => {
  content.classList.toggle("active");
});


let intro = document.getElementById("intro");

// default cursor
const cursorDefault = () => {
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX - 5 + "px";
    cursor.style.top = e.pageY - 5 + "px";
  });
  cursor.style.height = 15 + "px";
  cursor.style.width = 15 + "px";
  cursor.style.border = "none";
  cursor.style.background = "#fff";
};

// cursor change type 1
const cursorChange1 = (y) => {
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX - 30 + "px";
    cursor.style.top = e.pageY - 30 + "px";
  });
  cursor.style.height = 75 + y + "px";
  cursor.style.width = 75 + y + "px";
  cursor.style.background = "#000";
  cursor.style.border = "2px solid #fff";
};

// cursor change type 3
const cursorChange2 = (x) => {
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX - 30 + "px";
    cursor.style.top = e.pageY - 30 + "px";
  });
  cursor.style.height = 75 + x + "px";
  cursor.style.width = 75 + x + "px";
  cursor.style.background = "#fff";
  // cursor.style.border = "2px solid #fff";
};

// cursor change type 3
const box3Cursor = () => {
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX - 30 + "px";
    cursor.style.top = e.pageY - 30 + "px";
  });
  cursor.style.height = 0 + "px";
  cursor.style.width = 0 + "px";
  cursor.style.background = "transparent";
  // cursor.style.border = "2px solid #fff";
};

// cursor change type 4
const cursorChange4 = (y) => {
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX - 60 + "px";
    cursor.style.top = e.pageY - 60 + "px";
  });
  cursor.style.height = 75 + y + "px";
  cursor.style.width = 75 + y + "px";
  cursor.style.background = "#000";
  cursor.style.border = "2px solid #fff";
};

// cursor change type 5 - no cursor
const cursorChange5 = () => {
  document.addEventListener("onload", (e) => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY+ "px";
  });
  cursor.style.height = 0 + "px";
  cursor.style.width = 0 + "px";
  cursor.style.background = "transparent";
  cursor.style.border = "none";
};

// starting page
const name_head = "Shubham";
const ending = "Design";
const head_name = document.getElementById("head_name");
const head_end = document.getElementById("head_end");

for (let i = 0; i < ending.length; i++) {
  const p = document.createElement("p");
  const span = document.createElement("span");
  p.innerHTML = ending[i];
  span.appendChild(p);
  head_end.appendChild(span);
}

for (let i = 0; i < name_head.length; i++) {
  const p = document.createElement("p");
  const span = document.createElement("span");
  p.innerHTML = name_head[i];
  span.appendChild(p);
  head_name.appendChild(span);
}

// next page btn 1  box1 -> box2
const nextpage = document.getElementById("nextpage");
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
nextpage.addEventListener("click", () => {
  intro.classList.add("deactivate");
  // heading.classList.add("deactive");
  nextpage.style.transform = "translateY(50px)";
  // content.classList.add("active");
  box2textanimation();
  setTimeout(() => {
    box1.classList.add("deactivate");
    nextpage.style.display = "none";
    box2.classList.add("activate");
  }, 800);
});


// box animation in opening js create element 
const introInitBox = document.getElementById("introInitBox");
const numofbox = 30;
for (let i = 0; i < numofbox; i++) {
   const bgbox = document.createElement("div");
   bgbox.classList.add("bgbox");
   const inbox = document.createElement("div");
   inbox.classList.add("inbox");
   bgbox.appendChild(inbox);
   introInitBox.appendChild(bgbox);
}

const bgbox = document.querySelectorAll(".bgbox");
const inbox = document.querySelectorAll(".inbox");

const animationName = [
  "sliderightinitbox",
  "slideleftinitbox",
  "slidedowninitbox",
  "slideupinitbox",
];

const openerAnimation = () => {
  for (let i = 0; i < inbox.length; i++) {
    let animateName2 = animationName[Math.floor(Math.random() * 4)];
    inbox[i].style.animation = `${animateName2} 2s 1 forwards`;
  }
};


setTimeout(() => {
  const inittextmutate = document.getElementById("inittextmutate");
  inittextmutate.innerText = "Connected";
  canvas1.classList.add("outroanimate");
}, 5000);

setTimeout(() => {
  const introInitContent = document.getElementById("introInitContent");
  introInitContent.classList.add("deactivate");
}, 6500);

setTimeout(() => {
  openerAnimation();
}, 6500);

setTimeout(() => {
  introInitBox.classList.add("deactivate");
}, 8000);

setTimeout(() => {
  box1.classList.remove("deactivate");
}, 8100);

// next page btn 2 box2 -> box3
const box3 = document.getElementById("box3");
const nextpagebox2 = document.getElementById("nextpagebox2");
const canvas1 = document.getElementById("canvas1");

nextpagebox2.addEventListener("click", () => {
  box2textanimation2();
  nextpagebox2.style.transform = "translateY(50px)";
  box2.classList.add("deactivate");
  setTimeout(() => {
    // content.classList.add("active");
    box2.classList.remove("activate");
    nextpage.style.display = "none";
    box3.classList.add("activate");
    animate(0);

    const arrtext = ["Web Developer", "Web Designer"];
    let key_arrtext = 0;

    setInterval(() => {
      if (key_arrtext < 2) {
        const box3text = document.getElementById("box3text");
        box3text.innerText = arrtext[key_arrtext];
        box3text.setAttribute("data-text", `${arrtext[key_arrtext]}`);
        key_arrtext = key_arrtext + 1;
      } else {
        key_arrtext = 0;
      }
    }, 1500);

    const box3text = document.getElementById("box3text");
    setInterval(() => {
      box3text.classList.toggle("active");
    }, 1500);

    
  }, 800);
});


// box 2 text addition
const text = "Hi, I'm Shubham Bawankar";
let info = document.getElementById("info");
for (let i = 0; i < text.length; i++) {
  const p = document.createElement("p");
  const span = document.createElement("span");
  p.innerHTML = text[i];
  span.appendChild(p);
  info.appendChild(span);
}

// important future refrences

// paragraph animation intro
const box2textanimation = () => {
  const text1 = document.querySelector(".text");
  text1.innerHTML = text1.textContent.replace(/\S/g, "<span>$&</span>");
  const animation = anime.timeline({
    targets: ".text span",
    easing: "easeInOutExpo",
    loop: false,
  });
  animation
    .add({
      translateX: function () {
        return anime.random(-850, -700);
      },
      translateY: function () {
        return anime.random(-650, -550);
      },
      duration: 0,
      delay: anime.stagger(0),
    })
    .add({
      rotate: 0,
      translateX: 0,
      translateY: 0,
      duration: 1000,
      delay: anime.stagger(10),
    });
};

// paragraph animation outro
const box2textanimation2 = () => {
  const text1 = document.querySelector(".text");
  text1.innerHTML = text1.textContent.replace(/\S/g, "<span>$&</span>");
  const animation = anime.timeline({
    targets: ".text span",
    easing: "easeInOutExpo",
    loop: false,
  });

  animation
    .add({
      rotate: 0,
      translateX: 0,
      translateY: 0,
      duration: 0,
      delay: anime.stagger(0),
    })
    .add({
      rotate: function () {
        return anime.random(-360, 360);
      },
      translateX: function () {
        return anime.random(-500, 500);
      },
      translateY: function () {
        return anime.random(-450, 450);
      },
      duration: 1000,
      delay: anime.stagger(5),
    });
};

const box3info1 = document.getElementById("box3info1");
const outro = document.getElementById("outro");
const textboxbox3_1 = document.getElementById("textboxbox3_1");
const textboxbox3_2 = document.getElementById("textboxbox3_2");
const box4 = document.getElementById("box4");
const skillbox4 = document.getElementById("skillbox4");

box3info1.addEventListener("click",()=>{
  outro.classList.add("active");
  box3info1.classList.add("deactivate")
  textboxbox3_1.classList.add("deactivate");
  textboxbox3_2.classList.add("deactivate");
  box3.classList.add("deactive");
  setTimeout(() => {
    box3.classList.remove("activate");
    box4.classList.add("activate");
  },2000);
})





let box4text = document.getElementById("box4text");
let box4light = document.getElementById("box4light");

introBox4Content.addEventListener('mouseover',function(e){

    let mouseX = e.clientX;
    let mouseY = e.clientY;

    box4light.style.left = mouseX + 'px';
    box4light.style.top = mouseY + 'px';

    let box4distanceX = mouseX - box4text.offsetLeft - box4text.offsetWidth / 2;

    let box4distanceY = mouseY - box4text.offsetTop - box4text.offsetHeight / 2;

    let newShadow = '';

    for (let j=0; j<200; j++) 
    {
        let shadowX = -box4distanceX * (j/1200);
        let shadowY = -box4distanceY * (j/1200);
        let box4opacity = 1 - (j / 180);
        newShadow += (newShadow ? ',' : '') + shadowX + 'px ' + shadowY + 'px 0 rgba(33,33,33,'+ box4opacity+')';
    }
    box4text.style.textShadow = newShadow;
})

introBox4Content.addEventListener('mouseleave',()=>{
  box4light.style.height = '0px';
  box4light.style.width = '0px';
  box4text.style.textShadow = '8px 8px 5px #222';
})

introBox4Content.addEventListener('mouseenter',()=>{
  box4light.style.height = '50px';
  box4light.style.width = '50px';
  box4light.classList.add('active');
})


function liquidCommon(index){
  let box = document.querySelectorAll('.box');
  let e = document.createElement('div');
  e.setAttribute('class','drops');
  box[index].appendChild(e);

  let size = Math.random() * 50;
  e.style.width = 10 + size + 'px';
  let BoxWidth = box[index].clientWidth;
  e.style.left = Math.random() * (BoxWidth + 10) + 'px';

  setInterval(function(){
      box[index].removeChild(e);
  },6000);
}


setInterval(function(){
  for (let i = 0; i < 9; i++) {
    liquidCommon(i);
  }
},400);
