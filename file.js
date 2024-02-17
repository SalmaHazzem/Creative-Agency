let gallaryImage=document.querySelectorAll(".img");
let skills=document.querySelector(".skills");
let skillSpans=document.querySelectorAll(".divide div");
let bulletArray=document.querySelectorAll(".smallCircle");
let linkArray=document.querySelectorAll(".bullets a");
let oursvg=document.querySelector(".oursvg");
let asideSection=document.querySelector("aside");
let imges=document.querySelectorAll(".img");
let mainImge=document.querySelector("#mainImge");
let noBtn=document.querySelector(".noBtn");
let yesBtn=document.querySelector(".yesBtn");
let rootEle=document.querySelector(":root");
let colors=document.querySelectorAll(".circles div");
let rs=getComputedStyle(rootEle);
let bulletYes=document.querySelector(".bulletYes");
let bulletNo=document.querySelector(".bulletNo");
let sideBullets=document.querySelector(".bullets");
let reset=document.querySelector(".reset");
let threeBars=document.querySelector(".threeBars");
let navEle=document.querySelector("nav");
let i=0;
//show or hide nav in small screen
threeBars.addEventListener("click",function(){
    if(threeBars.classList.contains("apper")){
        navEle.style.display="none";
        threeBars.classList.remove("apper");
    }else {
        navEle.style.display="flex";
        threeBars.classList.add("apper");
    }
})

//image change in header background
const imgeSwip=()=>{
    const timeIn=setInterval(imgeChanger,3000);
    function imgeChanger(){
        mainImge.setAttribute("src",imges[i].getAttribute("src"));
        if(i==imges.length-1){
            i=0;
        }else {
            i++;
        }
    }

let timeOut=()=>{
    console.log("out")
    clearInterval(timeIn);
}
noBtn.onclick=timeOut;
}
window.addEventListener("load",imgeSwip);
yesBtn.addEventListener("click",imgeSwip);

//to change website color
colors.forEach(e=>{
    e.addEventListener("click",function(){
        rs.getPropertyValue("--changedColor");
        rootEle.style.setProperty("--changedColor",e.getAttribute("value"));
    })
})

//hide or show aside section
oursvg.onclick=()=>{
    if(oursvg.classList.contains("shown")){
        asideSection.style.display="none";
        oursvg.classList.remove("shown");
        oursvg.style.left="0";
    }else{
        asideSection.style.display="flex";
        oursvg.classList.add("shown");
        oursvg.style.left="447px";
    }
}

//hide or show the bullets
bulletYes.addEventListener("click",function(){
    sideBullets.style.display="flex";
})
bulletNo.addEventListener("click",function(){
    sideBullets.style.display="none";
})

//Reset Options
reset.addEventListener("click",function(){
    sideBullets.style.display="flex";
    rootEle.style.setProperty("--changedColor","orange");
    imgeSwip();
})

//bullets to reach specific section
for(let i=0;i<bulletArray.length;i++){
bulletArray[i].onclick=()=>{
    if(bulletArray[i].classList.contains("visible")){
        linkArray[i].style.visibility="hidden";
        bulletArray[i].classList.remove("visible");
    }else {
        linkArray[i].style.visibility="visible";
        bulletArray[i].classList.add("visible");
    }
}
}

//skills ratio
window.addEventListener("scroll",()=>{
    if(window.scrollY>skills.offsetTop-200){
        skillSpans.forEach(e=>{
            e.style.width=e.getAttribute("value");
            e.style.transition="width 1s linear 1s";
        })
    }
})


//gallary image focus
gallaryImage.forEach(e=>{
    e.addEventListener("click",function(){
        let overlayDiv=document.createElement("div");
        overlayDiv.classList.add("overlayDiv");
        let imgDiv = document.createElement("div");
        imgDiv.classList.add("whiteDiv");
        let h2=document.createElement("h2");
        h2.classList.add("specialHead");
        h2.innerHTML=e.getAttribute("value");
        imgDiv.appendChild(h2);
        let myimg=document.createElement("img");
        myimg.setAttribute("src",e.src)
        myimg.style.width="80%";
        myimg.style.height="80%";
        myimg.style.margin="auto";
        imgDiv.appendChild(myimg);
        let Xbutton=document.createElement("div");
        Xbutton.innerHTML="X";
        Xbutton.classList.add("xbutton");
        imgDiv.appendChild(Xbutton);
        document.body.appendChild(imgDiv);
        document.body.appendChild(overlayDiv);
        Xbutton.onclick=()=>{
            imgDiv.style.display="none";
            overlayDiv.style.display="none";
        }
    })
});



