
const productCardTemplate = document.querySelector("[data-product-template]") 
const productCardContainer = document.querySelector("[data-product-cards-container]") 



fetch('https://fakestoreapi.com/products?limit=0') // Para a pag principal escolher um limite, neste momento está a 0 porque não sei porque quando retornar produtos lixa o menu 
  .then(res => res.json())
  .then(data => {
    data.forEach(product => {
      const card = productCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      const body = card.querySelector("[data-body]")
      header.textContent = product.title
      body.textContent = product.price
      productCardContainer.append(card)
    });

  })







/*
let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
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
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});*/