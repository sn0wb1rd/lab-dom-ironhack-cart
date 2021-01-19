// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  // get value from price:
  const price = product.querySelector('.price span')
  let priceValue = price.innerText
  //console.log('value price: ', priceValue, typeof priceValue)

  // get value from input form (using key 'value')
  let quantity = product.querySelector('#quantity-input')
  let quantityValue = quantity.value
 //console.log('elem quantity', quantityValue,  typeof quantityValue)

  // new var equal to the product of the values
  let subtotal = product.querySelector('.subtotal span') //make object
  let subtotalValue = subtotal.innerText // get value
  subtotalValue = priceValue * quantityValue // give it the total value
  subtotal.innerText = subtotalValue // put the subt value to the element

  // console.log(typeof subtotalValue)
  // console.log('total price ', typeof subtotalValue, subtotalValue)

  return(subtotalValue)

}

function calculateAll() {
 
  let allProd = document.getElementsByClassName('product')

  //let allProdValue = 
  // console.log(allProd.innerText)
  // console.log(allProd, typeof allProd)
  // console.log(allProd[1])

for (let i of allProd) {
  updateSubtotal(i)
}
  // //---test ---
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
