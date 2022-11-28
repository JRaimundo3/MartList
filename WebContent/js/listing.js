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
var imgBuffer = new ArrayBuffer(64);
var photoIdBuf;
var titleIdv;
var descriptionIdv;
var categoryIdv;
var priceIdv;
var emailIdv;
var phoneIdv;
var newImageIdv;

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
  titleIdv = document.querySelector("#titleId").value;
  descriptionIdv = document.querySelector("#descriptionId").value;
  categoryIdv = document.querySelector("#categoryId").value;
  priceIdv = document.querySelector("#priceId").value;
  emailIdv = document.querySelector("#emailId").value;
  phoneIdv = document.querySelector("#phoneId").value;
  newImageIdv = document.querySelector("#newImage").src;
            
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
    let binaryString;
     
     reader.onload = function(){
       const result = reader.result;
       img.src = result;
       //imgBuffer = reader.readAsArrayBuffer(img);
        /*let array = new Uint8Array(result),
        binaryString = String.fromCharCode.apply(null, array);*/
        
        
        filesUpload.classList.add("active");
     }
     binaryString = reader.readAsBinaryString(file);
        let xmlhttp = new XMLHttpRequest();
      //let photoIdBuf;
       if (xmlhttp) {
          xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState === 4) {
              if (xmlhttp.status === 200) {
                //window.location.replace(".html");
                console.log(xmlhttp.responseText);
                photoIdBuf = xmlhttp.responseText;
              } else {
                console.log(xmlhttp.status);
              }
            }
          }
        }
        xmlhttp.open("POST", "https://martlist.azurewebsites.net/rest/media", true);
        xmlhttp.setRequestHeader("Content-Type", "application/octet-stream");
        xmlhttp.send(binaryString);

        
        console.log(binaryString);

        

       
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
/*
 var titleIdv = document.querySelector("#titleId").value;
 var descriptionIdv = document.querySelector("#descriptionId").value;
 var categoryIdv =document.querySelector("#categoryId").value;
 var priceIdv = document.querySelector("#priceId").value;
 var emailIdv = document.querySelector("#emailId").value;
 var phoneIdv = document.querySelector("#phoneId").value;
 var newImageIdv = document.querySelector("#newImage2").src;*/
 
 submitBtn.addEventListener("click", function(){
   bullet[current - 1].classList.add("active");
   progressCheck[current - 1].classList.add("active");
   progressText[current - 1].classList.add("active");
   current += 1;


	let xmlhttp = new XMLHttpRequest();
  
  let obj = {
        id:Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1),
        title:titleIdv,
        description:descriptionIdv,
        category:categoryIdv, 
        price:priceIdv,
        email:emailIdv,
        phone:phoneIdv,
        userId:"joao@gmail.com",                                                     //ALTERAR USER ID
        photoId: photoIdBuf
	};
  console.log(obj);

	let objJSON = JSON.stringify(obj);
	
	
	if (xmlhttp) {
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState === 4) {
				if (xmlhttp.status === 200) {
					//window.location.replace(".html");
				} else {
					console.log(xmlhttp.status);
				}
			}
		}
		xmlhttp.open("POST", "https://martlist.azurewebsites.net/rest/products", true);
		xmlhttp.setRequestHeader("Content-Type", "application/json");
		xmlhttp.send(objJSON);
	}
 
   setTimeout(function(){
     alert("Your listing was successfully created!");

     window.location.replace("/index.html"); //.reload();
   },800);
 });
