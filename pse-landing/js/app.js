function dragScroll(slider) {
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("mouseleave", () => {
    isDown = false;
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
  });
}

const slider = document.getElementById("slider");
const slider1 = document.getElementById("slider1");

dragScroll(slider);
dragScroll(slider1);




// -----------------------slider -----------





const track = document.getElementById("sliderTrack");
let index = 0;

/* dynamic card width */
function getCardWidth(){
  const card = track.querySelector(".slide-card");
  return card.offsetWidth + 20; // margin-right
}

/* card data */
const cardData = [
  {title:"On-the-Spot Counselling", text:"Save time with instant expert guidance"},
  {title:"Interact with School Heads", text:"Get answers straight from the experts"},
  {title:"Compare Curriculum & Pedagogy", text:"CBSE, ICSE, IB, Cambridge & more"},
  {title:"Exclusive Fee Structures & Offers", text:"Transparent fee details & offers"}
];

/* add cards dynamically */
function addCards(){
  cardData.forEach(item=>{
    const card = document.createElement("div");
    card.className = "slide-card"; // ✅ SAME CLASS
    card.innerHTML = `<h4>${item.title}</h4><p>${item.text}</p>`;
    track.appendChild(card);
  });
}

/* initial append */
addCards();

/* NEXT */
function slideNext(){
  const cardWidth = getCardWidth();
  index++;

  track.style.transform = `translateX(-${index * cardWidth}px)`;

  /* jab last ke paas aaye → naye cards add */
  if(index >= track.children.length - 4){
    addCards();
  }
}

/* PREV */
function slidePrev(){
  const cardWidth = getCardWidth();

  if(index > 0){
    index--;
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }
}

/* resize fix */
window.addEventListener("resize", ()=>{
  const cardWidth = getCardWidth();
  track.style.transform = `translateX(-${index * cardWidth}px)`;
});











