
const productCardTemplate = document.querySelector("[data-product-template]") 
const productCardContainer = document.querySelector("[data-product-cards-container]") 
const searchInput = document.querySelector("[data-search]") 

let products = []

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase()
  products.forEach(product => {
    const isVisible = product.title.toLowerCase().includes(value)
    console.log(isVisible)
    product.element.classList.toggle("hide", !isVisible)
  })
})
/*
function onLoad(){

    let xmlhttp = new XMLHttpRequest();

		xmlhttp.open("GET", "https://martlist.azurewebsites.net/rest/products", true);
		//xmlhttp.setRequestHeader("Content-Type", "application/json");
		xmlhttp.send();

  if (xmlhttp) {
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState === 4) {
				if (xmlhttp.status === 200) {
					//window.location.replace(".html");
          xmlhttp.response.then(data => {
            products = data.map(product => {
        
              const card = productCardTemplate.content.cloneNode(true).children[0] 
              const header = card.querySelector("[data-header]") //vai buscar ao html o elemento com o data-header
              const body = card.querySelector("[data-body]") 
              const img = card.querySelector("[data-img]")  //vai buscar ao html o elemento com o data-img
              const id = card.querySelector("[data-id]")  //vai buscar ao html o elemento com o data-img
              header.textContent = product.title 
              body.textContent = product.price + "€"
              img.src = product.image;
              id.href = "product.html?"+product.id;
              //description.textContent = product.description   //dao erro a ir buscar 
              productCardContainer.append(card)   
              return {title: product.title, element: card}
            });
          })
				} else {
					console.log(xmlhttp.status);
				}
			}
		}
  }
}
*/
//fetch('https://fakestoreapi.com/products?limit=0') 
fetch('https://martlist.azurewebsites.net/rest/products') 
  .then(res => res.json())
  .then(data => {
    products = data.map(product => {

      const card = productCardTemplate.content.cloneNode(true).children[0] 
      const header = card.querySelector("[data-header]") //vai buscar ao html o elemento com o data-header
      const body = card.querySelector("[data-body]") 
      const img = card.querySelector("[data-img]")  //vai buscar ao html o elemento com o data-img
      const id = card.querySelector("[data-id]")  //vai buscar ao html o elemento com o data-img
      header.textContent = product.title 
      body.textContent = product.price + "€"
      img.src = product.image;
      id.href = "product.html?"+product.id;
      //description.textContent = product.description   //dao erro a ir buscar 
      productCardContainer.append(card)   
      return {title: product.title, element: card}
    });

  })


/*
let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');
document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex'; //para aparecer o preview
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active'); 
      }
    });
  };
});
previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');  //para fechar o preview
    preveiwContainer.style.display = 'none';
  };
});
*/