// SECTION Where all scoops live
let scoops = [{
  Name: 'Vanilla',
  Price: 3,
  isReal: true,
  imgUrl: 'https://www.hersheyicecream.com/products/images/premium-gold/old-fashioned-vanilla-scoop2.png',
},
{
  Name: 'Chocolate',
  Price: 4,
  isReal: true,
  imgUrl: 'https://www.carvel.com/-/media/carvel/menu/ice-cream/scooped/37-chocolate.png?v=1&d=20180327T225042Z',
},
{
  Name: 'Strawberry',
  Price: 5,
  isReal: true,
  imgUrl: 'https://cdn.shopify.com/s/files/1/0248/1720/5314/products/IceCreamScoop-Strawberry_1200x1200.png?v=1648758725',
}
]

// SECTION Displays the store template
function drawScoops() {

  let scoopCards = document.getElementById('scoop-cards')
  let template = ''

  scoops.forEach(scoop => {

    if (scoop.isReal) {
      template += ` 
      <div class="card col-3 m-1 text-center">
  <img src="${scoop.imgUrl}"
    class="card-img-top" alt="brokenplsfix">
  <div class="card-body">
    <h5 class="card-title">${scoop.Name}</h5>
    <p class="card-text">${scoop.Price} $</p>
    <button class="btn btn-dark">Buy</button>
  </div>
</div> `
    }
  })

  // @ts-ignore
  scoopCards.innerHTML = template
}

// SECTION Adding scoop to cart
// FIXME Allow the items within the array to be added into the cart without hardcoding HTML
function addScoopToCart() {
  let iceScoop = scoops.find(scoop => scoop.name == name)

}
// SECTION Alert Box Funny Goof HaHa
function drawGoof() {
  alert("You really thought this would work, Ain't no way!");
}

// SECTION Function Calling Area
drawScoops()