var menuList=document.getElementById("menuList");


menuList.style.maxHeight="0px";

function toggleMenu(){
    if(menuList.style.maxHeight=="0px"){
        menuList.style.maxHeight="430px";
    }
    else{
        menuList.style.maxHeight="0px";
    }
}
document.querySelector("#search-icon").onclick=()=>{
    document.querySelector("#search-form").classList.toggle("active");
}
document.querySelector("#close").onclick=()=>{
    document.querySelector("#search-form").classList.remove("active");
}
var swiper = new Swiper(".container-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });
  var swiper = new Swiper(".customer-reviews-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        640:{
            slidesPerView:2,
        },
        768:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:3,
        },
    },
  });
  