// SECTION Where all scoops live
let scoops = [{
  name: 'Vanilla',
  price: 3,
  isReal: true,
  imgUrl: 'https://www.hersheyicecream.com/products/images/premium-gold/old-fashioned-vanilla-scoop2.png',
  quantity: 0,
},
{
  name: 'Chocolate',
  price: 4,
  isReal: true,
  imgUrl: 'https://www.carvel.com/-/media/carvel/menu/ice-cream/scooped/37-chocolate.png?v=1&d=20180327T225042Z',
  quantity: 0,
},
{
  name: 'Strawberry',
  price: 5,
  isReal: true,
  imgUrl: 'https://cdn.shopify.com/s/files/1/0248/1720/5314/products/IceCreamScoop-Strawberry_1200x1200.png?v=1648758725',
  quantity: 0,
}
]

const vessels = [{
  name: 'Waffle Cone',
  image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
  price: 2
}, {
  name: 'Waffle Bowl',
  image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
  price: 4
}]

const toppings = [{
  name: 'Sprinkles',
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
  price: 1
}, {
  name: 'Choclate Chips',
  image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
  price: 2
}]

const orderScoops = []

// SECTION Displays the Scoops
function drawScoops() {

  let template = ''
  let scoopCards = document.getElementById('scoop-cards')

  scoops.forEach(scoop => {
    template += ` 
      <div class="card col-3 m-1 text-center">
  <img src="${scoop.imgUrl}"
    class="card-img-top" alt="brokenplsfix">
  <div class="card-body">
    <h5 class="card-title">${scoop.name}</h5>
    <p class="card-text">${scoop.price} $</p>
    <button class="btn btn-dark" onclick="addToCart(); addScoopToCart('${scoop.name}')">Buy</button>
  </div>
</div> `
  })

  // @ts-ignore
  scoopCards.innerHTML = template
}
// FIXME Be Able To Add Vessels
function drawVessels() {

  let template = ''
  let vesselCards = document.getElementById('vessel-cards')

  vessels.forEach(vessel => {
    template += ` 
      <div class="card col-3 m-1 text-center">
  <img src="${vessel.image}"
    class="card-img-top" alt="brokenplsfix">
  <div class="card-body">
    <h5 class="card-title">${vessel.name}</h5>
    <p class="card-text">${vessel.price} $</p>
    <button class="btn btn-dark" onclick="addToCart(); addScoopToCart('${vessel.name}')">Buy</button>
  </div>
</div> `
  })

  // @ts-ignore
  vesselCards.innerHTML = template
}
// FIXME Be Able to Add Toppings
function drawToppings() {

  let template = ''
  let scoopCards = document.getElementById('scoop-cards')

  scoops.forEach(scoop => {
    template += ` 
      <div class="card col-3 m-1 text-center">
  <img src="${scoop.imgUrl}"
    class="card-img-top" alt="brokenplsfix">
  <div class="card-body">
    <h5 class="card-title">${scoop.name}</h5>
    <p class="card-text">${scoop.price} $</p>
    <button class="btn btn-dark" onclick="addToCart(); addScoopToCart('${scoop.name}')">Buy</button>
  </div>
</div> `
  })

  // @ts-ignore
  scoopCards.innerHTML = template
}

// SECTION Adds Scoops to cart
function addToCart() {
  let cart = document.getElementById('cart')
  // NOTE template is a placeholder
  let template = ''
  scoops.forEach(scoop => {
    if (scoop.quantity > 0) {
      template += `
      <div class="d-flex justify-content-around border border-dark">
      <i class="mdi mdi-delete text-danger" onclick="removeItem('${scoop.name}')"></i>
      <p>${scoop.name}</p>
      <p>x${scoop.quantity}</p>
      <p>$${scoop.price}</p>
    </div>`
    }
  })
  // @ts-ignore
  cart.innerHTML = template
  drawTotal()
}

// SECTION Adding scoop to cart
function addScoopToCart(name) {
  let iceScoop = scoops.find(scoop => scoop.name == name)
  console.log(iceScoop);
  // @ts-ignore
  iceScoop.quantity++
  drawTotal()
}
// SECTION Displays the total amount in sidebar
function drawTotal() {
  let total = 0
  scoops.forEach(scoop => {
    total += scoop.price * scoop.quantity
  })
  // console.log('cart total', total);
  // @ts-ignore
  document.getElementById('sub-total').innerText = total

}
// SECTION Resets the current quantity and gets page ready for new user
function checkout() {
  // let cart = document.getElementById('cart')
  //  NOTE here we need to reset the quantity back to 0 to allow our data to reflect the change we made to the DOM
  if (window.confirm("Are you ready to checkout?")) {
    scoops.forEach(scoop => {
      scoop.quantity = 0
    })
    addToCart()

  }
}

// SECTION Alert Box Funny Goof HaHa
function drawGoof() {
  alert("You really thought this would work, Ain't no way!");
}

// SECTION Function Calling Area
drawScoops()
drawVessels()