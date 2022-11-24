
const productCardTemplate = document.querySelector("[data-product-template]") 
const productCardContainer = document.querySelector("[data-product-cards-container]") 



fetch('https://fakestoreapi.com/products?limit=0') // Para a pag principal escolher um limite, neste momento está a 0 porque não sei porque quando retornar produtos lixa o menu 
  .then(res => res.json())
  .then(data => {
    data.forEach(product => {
      const card = productCardTemplate.content.cloneNode(true).children[0] 
      const header = card.querySelector("[data-header]") 
      const body = card.querySelector("[data-body]") 
      const img = card.querySelector("[data-img]") 
      const id = card.querySelector("[data-name]")
      const description = card.querySelector("[data-description]")
      header.textContent = product.title 
      body.textContent = product.price + "€"
      img.textContent = product.image
      //id.textContent = product.id
      //description.textContent = product.description   //dao erro a ir buscar 
      productCardContainer.append(card) 
    });

  })


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