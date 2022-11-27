const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;

nextBtnFirst.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-75%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});

prevBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnFourth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});

/* File upload */
  const filesUpload = document.querySelector(".filesUpload");
 const fileName = document.querySelector(".file-name");
 const defaultBtn = document.querySelector("#default-btn");
 const customBtn = document.querySelector("#custom-btn");
 const cancelBtn = document.querySelector("#cancel-btn i");
 const img = document.querySelector("#newImage");
 let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;
 function defaultBtnActive(){
   defaultBtn.click();
 }
 defaultBtn.addEventListener("change", function(){
   const file = this.files[0];
   if(file){
     const reader = new FileReader();
     reader.onload = function(){
       const result = reader.result;
       img.src = result;
       filesUpload.classList.add("active");
     }
     cancelBtn.addEventListener("click", function(){
       img.src = "";
       filesUpload.classList.remove("active");
     })
     reader.readAsDataURL(file);
   }
   if(this.value){
     let valueStore = this.value.match(regExp);
     fileName.textContent = valueStore;
   }
 });

  /* Submit */
 //import { writeFileSync } from 'fs';
 var titleIdv = document.querySelector("#titleId").value;
 var descriptionIdv = document.querySelector("#descriptionId").value;
 var categoryIdv =document.querySelector("#categoryId").value;
 var priceIdv = document.querySelector("#priceId").value;
 var emailIdv = document.querySelector("#emailId").value;
 var phoneIdv = document.querySelector("#phoneId").value;
 var newImageIdv = document.querySelector("#newImage2").src;
 
 submitBtn.addEventListener("click", function(){
   bullet[current - 1].classList.add("active");
   progressCheck[current - 1].classList.add("active");
   progressText[current - 1].classList.add("active");
   current += 1;
 /*
   writeFileSync('data/products.data', JSON.stringify({
                     title: titleIdv,
                     description: descriptionIdv,
                     category: categoryIdv,
                     price: priceIdv,
                     email: emailIdv,
                     phone: phoneIdv,
                     image: newImageIdv
                 }));*/
 
   setTimeout(function(){
     alert("Your listing was successfully created!");
     alert(JSON.stringify({
        title: titleIdv,
        description: descriptionIdv,
        category: categoryIdv,
        price: priceIdv,
        email: emailIdv,
        phone: phoneIdv,
        image: newImageIdv}));
     location.reload();
   },800);
 });
