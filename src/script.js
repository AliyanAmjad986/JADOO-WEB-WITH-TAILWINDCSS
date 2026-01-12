let menu = document.getElementById('dropmenu');
let dropmenu = document.getElementById('dropdown'); 
let active = document.getElementById('activerectangle');
let activetwo = document.getElementById('activerectangletwo');
let activethree = document.getElementById('activerectanglethree');
let activefourth = document.getElementById('activerectanglefourth');
// let activebox = document.querySelectorAll('active');
menu.style.visibility = "hidden";
menu.style.height = "0px"  

dropmenu.addEventListener('mouseover', ()=>{
    menu.style.visibility = "visible";
});
dropmenu.addEventListener('mouseout', ()=>{
    menu.style.visibility = "hidden";
});

active.style.visibility = "hidden";
activetwo.style.visibility = "hidden";
activethree.style.visibility = "hidden";
activefourth.style.visibility = "hidden";


let activeboxeone = document.getElementById('activeone');
let activeboxetwo = document.getElementById('activetwo');
let activeboxethree = document.getElementById('activethree');
let activeboxefourth = document.getElementById('activefourth');
let categoryone = document.getElementById('categoryone');
let categorytwo = document.getElementById('categorytwo');
let categorythree = document.getElementById('categorythree');
let categoryfourth = document.getElementById('categoryfourth');

activeboxeone.addEventListener('mouseover', ()=>{
   active.style.visibility = "visible"; 
   categoryone.style.transform ="scale(1.2)";
   categoryone.style.boxShadow = "0px 4px 10px rgba(0,0,0,0.3)";
})

activeboxeone.addEventListener('mouseout', ()=>{
   active.style.visibility = "hidden"; 
   categoryone.style.transform ="scale(1)";
   categoryone.style.boxShadow = "none";
})

activeboxetwo.addEventListener('mouseover', ()=>{
   activetwo.style.visibility = "visible"; 
   categorytwo.style.transform ="scale(1.2)";
    categorytwo.style.boxShadow = "0px 4px 10px rgba(0,0,0,0.3)";
})

activeboxetwo.addEventListener('mouseout', ()=>{
   activetwo.style.visibility = "hidden";
   categorytwo.style.transform ="scale(1)"; 
   categorytwo.style.boxShadow = "none";
})
activeboxethree.addEventListener('mouseover', ()=>{
   activethree.style.visibility = "visible"; 
   categorythree.style.transform ="scale(1.2)";
    categorythree.style.boxShadow = "0px 4px 10px rgba(0,0,0,0.3)";
   
})

activeboxethree.addEventListener('mouseout', ()=>{
   activethree.style.visibility = "hidden"; 
   categorythree.style.transform ="scale(1)";
    categorythree.style.boxShadow = "none";
})
activeboxefourth.addEventListener('mouseover', ()=>{
   activefourth.style.visibility = "visible";
   categoryfourth.style.transform ="scale(1.2)"; 
    categoryfourth.style.boxShadow = "0px 4px 10px rgba(0,0,0,0.3)";
})

activeboxefourth.addEventListener('mouseout', ()=>{
   activefourth.style.visibility = "hidden"; 
   categoryfourth.style.transform ="scale(1)";
    categoryfourth.style.boxShadow = "none";
})


let cardone = document.getElementById('cardone');
let cardtwo = document.getElementById('cardtwo');
let cardthree = document.getElementById('cardthree');

cardone.addEventListener('mouseover', ()=>{
    cardone.style.boxShadow = "0px 4px 10px rgba(0,0,0,0.3)";
})

cardone.addEventListener('mouseout', ()=>{
    cardone.style.boxShadow = "none";
})

cardtwo.addEventListener('mouseover', ()=>{
    cardtwo.style.boxShadow = "0px 4px 10px rgba(0,0,0,0.3)";
})
cardtwo.addEventListener('mouseout', ()=>{
    cardtwo.style.boxShadow = "none";
})


cardthree.addEventListener('mouseover', ()=>{
    cardthree.style.boxShadow = "0px 4px 10px rgba(0,0,0,0.3)";
})
cardthree.addEventListener('mouseout', ()=>{
    cardthree.style.boxShadow = "none";
})

let tripcard = document.getElementById('tripcard');

tripcard.addEventListener('mouseover', ()=>{
tripcard.style.boxShadow =
    "6px -8px 80px rgba(89,177,500,1), " +
    "-4px 0 8px rgba(0,0,0,0.2), " +
    "4px 0 8px rgba(0,0,0,0.2), " +
    "0 6px 12px rgba(0,0,0,0.25)";
  tripcard.style.transform = "translateZ(12px)";
})
tripcard.addEventListener('mouseout', ()=>{
   tripcard.style.boxShadow = "none";
    tripcard.style.transform = "translateZ(6px)";
})

let heartover = document.getElementById('heartover');
heartover.style.visibility = "hidden";
 

function animateBox() {
     document.getElementById("heartover").classList.add("move");
     heartover.classList.remove("move");
    heartover.style.visibility = "visible";
    void heartover.offsetWidth;
    heartover.classList.add("move");
    heartover.style.height ="fit-content";
    heartover.style.width = "60%";
 
}

function animateBoxout() {
    
     heartover.classList.remove("move");
    heartover.style.visibility = "hidden";
    void heartover.offsetWidth;
    heartover.style.height ="0px";
    heartover.style.width = "0px";
  
 
}
let upperarrow = document.getElementById('upperarrow');
let lowerarrow = document.getElementById('lowerarrow');
let dot1 = document.getElementById('dot1');
let dot2 = document.getElementById('dot2');
let dot3 = document.getElementById('dot3'); 
let firstcomment = document.getElementById('firstcomment');
let secondcomment = document.getElementById('secondcomment');
upperarrow.addEventListener('click', ()=>{
    firstcomment.style.zIndex = "-1";
    secondcomment.style.zIndex = "1";

});
lowerarrow.addEventListener('click', ()=>{
    firstcomment.style.zIndex = "1";
    secondcomment.style.zIndex = "-1";
});

function aminationuppercomment() {
    document.getElementById("firstcomment").classList.add("firstcommentmove");
    firstcomment.classList.remove("firstcommentmove");
    firstcomment.style.zIndex = "1";
    secondcomment.style.zIndex = "-1";
    void firstcomment.offsetWidth;
    document.getElementById("firstcomment").classList.add("firstcommentmove");
}
function aminationlowercomment() {
    document.getElementById("secondcomment").classList.add("secondcommentmove");
    secondcomment.classList.remove("secondcommentmove");
    firstcomment.style.zIndex = "-1";
    secondcomment.style.zIndex = "1";
    void secondcomment.offsetWidth;
    document.getElementById("secondcomment").classList.add("secondcommentmove");
}

function companycardmove() {
    let companyone = document.getElementById("companyone");
    companyone.classList.add("companymove");
    void companyone.offsetWidth; 
     
}
function companycardmoveout() {
      let companyone = document.getElementById("companyone");
    companyone.classList.remove("companymove");
        void companyone.offsetWidth;
}
function companycardmovtwo() {
    let companytwo = document.getElementById("companytwo");
    companytwo.classList.add("companymove");
    void companytwo.offsetWidth;
}
function companycardmoveouttwo() {
      let companytwo = document.getElementById("companytwo");
    companytwo.classList.remove("companymove");
        void companytwo.offsetWidth;
}
function companycardmovthree() {
    let companythree = document.getElementById("companythree");
    companythree.classList.add("companymove");
    void companythree.offsetWidth;
}
function companycardmoveoutthree() {
      let companythree = document.getElementById("companythree");
    companythree.classList.remove("companymove");
        void companythree.offsetWidth;
}
function companycardmovfourth() {
    let companyfour = document.getElementById("companyfour");
    companyfour.classList.add("companymove");
    void companyfour.offsetWidth;
}
function companycardmoveoutfourth() {
      let companyfour = document.getElementById("companyfour");
    companyfour.classList.remove("companymove");
        void companyfour.offsetWidth;
}
function companycardmovfifth() {
    let companyfive = document.getElementById("companyfive");
    companyfive.classList.add("companymove");
    void companyfive.offsetWidth;
}
function companycardmoveoutfifth() {
      let companyfive = document.getElementById("companyfive");
    companyfive.classList.remove("companymove");
        void companyfive.offsetWidth;
}