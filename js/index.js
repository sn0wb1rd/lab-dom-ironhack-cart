// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  // get value from price:
  const price = product.querySelector('.price span')
  let priceValue = price.innerText
  //console.log('value price: ', priceValue, typeof priceValue)

  // get value from input form (using key 'value')
  const quantity = product.querySelector('#quantity-input')
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
  // Grab the object - total of all prodducts  
  let allProd = document.getElementsByClassName('product')
  // init all SubTotals to assign later on to allProd
  let allSubTotals = 0  

  //let allProdValue = 
  // console.log(allProd.innerText)
  // console.log(allProd, typeof allProd)
  // console.log(allProd[1])

for (let i of allProd) {
  let subTotals = updateSubtotal(i)
  allSubTotals = allSubTotals + subTotals  

}

//console.log('get i price ', allSubTotals)

//RECALC TOTAL
// create object from total-value span
let totalPriceAllProd = document.querySelector('#total-value span')
// get innerText of Obje 
let totalPriceAllProdValue = totalPriceAllProd.innerText

// get subtotal of selected product



}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  let parentNodeAction = target.parentNode
  let parentNodeProduct = parentNodeAction.parentNode
  // remove complete row
  parentNodeProduct.remove()

  // create object from total-value span
  let totalPriceAllProd = document.querySelector('#total-value span')
  // get innerText of Obje 
  let totalPriceAllProdValue = totalPriceAllProd.innerText
  // give it the value of all prices
  totalPriceAllProdValue = allSubTotals
  allSubTotals = 
  totalPriceAllProd.innerText = allSubTotals



  console.log(allSubTotals)
  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //ITERATION 4
  // testing with one buttong (add temp id=remove to the button for test)
  // const removeProdBtn = document.getElementById('remove');
  // removeProdBtn.addEventListener('click', removeProduct);
  // console.log(removeProdBtn)

  const removeBtn = document.getElementsByClassName('btn btn-remove')

  for (let i of removeBtn) {
    let bla = i
    bla.addEventListener('click', removeProduct)
    console.log(bla)
    //removeBtn.addEventListener('click', removeProduct)
   
  }




  ;

  //... your code goes here
});
