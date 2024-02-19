
// basic cursor
let cursor = document.querySelector('.cursor');
document.addEventListener('mousemove',(e) => {
  cursor.style.left = (e.pageX - 25) + "px";
  cursor.style.top = (e.pageY - 25) + "px";
});


// dark and light mode switching
let content = document.getElementById("content");
content.addEventListener("dblclick",()=>{
    content.classList.toggle("active");
})


// heading animation on loading time
// const heading = document.getElementById("heading");
// window.onload = () => {
//     setTimeout(() => {
//         // heading.classList.add("active")
//     }, 1000);
// }


let intro = document.getElementById('intro');


// default cursor
const cursorDefault = () => {
    document.addEventListener('mousemove',(e) => {
        cursor.style.left = (e.pageX - 5) + "px";
        cursor.style.top = (e.pageY - 5) + "px";
      });
    cursor.style.height = 15 + 'px';
    cursor.style.width = 15 + 'px';
    cursor.style.border = 'none';
    cursor.style.background = '#fff';
}

// cursor change type 1
const cursorChange1 = (y) => {
    document.addEventListener('mousemove',(e) => {
        cursor.style.left = (e.pageX - 30) + "px";
        cursor.style.top = (e.pageY - 30) + "px";
      });
    cursor.style.height = 75 + y + 'px';
    cursor.style.width = 75 + y + 'px';
    cursor.style.background = '#000';
    cursor.style.border = "2px solid #fff";
}

// cursor change type 3
const cursorChange2 = (x) => {
    document.addEventListener('mousemove',(e) => {
        cursor.style.left = (e.pageX - 30) + "px";
        cursor.style.top = (e.pageY - 30) + "px";
      });
    cursor.style.height = 75 + x + 'px';
    cursor.style.width = 75 + x + 'px';
    cursor.style.background = '#fff';
    // cursor.style.border = "2px solid #fff";
}


// starting page 
const name_head = "Shubham";
const ending = "Design";
const head_name = document.getElementById("head_name");
const head_end = document.getElementById("head_end");

for (let i = 0; i < ending.length; i++){
    const p = document.createElement("p");
    const span = document.createElement("span");
    p.innerHTML = ending[i];
    span.appendChild(p);
    head_end.appendChild(span);
}

for (let i = 0; i < name_head.length; i++){
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
nextpage.addEventListener("click",()=>{
    intro.classList.add("deactivate");
    // heading.classList.add("deactive");
    nextpage.style.transform = "translateY(50px)";
    // content.classList.add("active");
    box2textanimation();
    setTimeout(() => {
        box1.classList.add("deactivate");
        nextpage.style.display = 'none';
        box2.classList.add("activate")
    }, 800);
})



// next page btn 2 box2 -> box3
const box3 = document.getElementById("box3");
const nextpagebox2 = document.getElementById("nextpagebox2");
nextpagebox2.addEventListener("click",()=>{
    box2textanimation2();
    nextpagebox2.style.transform = "translateY(50px)";
    box2.classList.add("deactivate");

    setTimeout(() => {
        content.classList.add("active");
        box2.classList.remove("activate")
        nextpage.style.display = 'none';
        box3.classList.add("activate");
    }, 800);
})


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

// const arrtext = ["Creative","Coding","Responsive"];
// let key_arrtext = 0;


//     setInterval(() => {
//         if(key_arrtext < 3){
//             const word_inp = document.getElementById("word_inp");
//             word_inp.innerText = arrtext[key_arrtext];
//             key_arrtext = key_arrtext + 1;
//         }else{
//             key_arrtext = 0;
//         }

//     }, 2000);

// paragraph animation intro
const box2textanimation = () => {
    const text1 = document.querySelector('.text');
text1.innerHTML = text1.textContent.replace(/\S/g,"<span>$&</span>");
const animation = anime.timeline({
    targets: '.text span',
    easing : 'easeInOutExpo',
    loop : false,
});
animation
 .add({
     translateX : function(){
        return anime.random(-850,-700)
    },
    translateY : function(){
        return anime.random(-650,-550)
    },
    duration : 0,
    delay : anime.stagger(0),

 })
 .add({
    rotate :0,
    translateX :0,
    translateY :0,
    duration : 1000,
    delay : anime.stagger(10),
})
}

// paragraph animation outro 
const box2textanimation2 = () => {
    const text1 = document.querySelector('.text');
text1.innerHTML = text1.textContent.replace(/\S/g,"<span>$&</span>");
const animation = anime.timeline({
    targets: '.text span',
    easing : 'easeInOutExpo',
    loop : false,
});

animation
.add({
    rotate :0,
    translateX :0,
    translateY :0,
    duration : 0,
    delay : anime.stagger(0),
})
 .add({
     rotate : function(){
         return anime.random(-360,360)
     },
     translateX : function(){
        return anime.random(-500,500)
    },
    translateY : function(){
        return anime.random(-450,450)
    },
    duration : 1000,
    delay : anime.stagger(5),

 })
 
}