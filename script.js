const products=[
{id:1,name:"شومیز زنانه مدل کلاسیک",price:890000,icon:"👚"},
{id:2,name:"مانتو زنانه مدرن",price:1590000,icon:"🧥"},
{id:3,name:"شلوار زنانه راسته",price:790000,icon:"👖"},
{id:4,name:"پیراهن زنانه مجلسی",price:1890000,icon:"👗"},
{id:5,name:"کت زنانه اسپرت",price:1290000,icon:"🧥"},
{id:6,name:"تاپ زنانه",price:490000,icon:"👚"}
];
let cart=[];
function formatPrice(price){return price.toLocaleString("fa-IR")+" تومان"}
function renderProducts(){
 const list=document.getElementById("productList");
 list.innerHTML=products.map(p=>`<div class="product"><div class="product-image">${p.icon}</div><div class="product-info"><h3>${p.name}</h3><div class="price">${formatPrice(p.price)}</div><button class="add-cart" onclick="addToCart(${p.id})">افزودن به سبد خرید</button></div></div>`).join("");
}
function addToCart(id){cart.push(products.find(p=>p.id===id));updateCart();alert("محصول به سبد خرید اضافه شد.")}
function removeFromCart(i){cart.splice(i,1);updateCart()}
function updateCart(){
 document.getElementById("cartCount").textContent=cart.length;
 const items=document.getElementById("cartItems");
 items.innerHTML=cart.length?cart.map((x,i)=>`<div class="cart-item"><span>${x.name}</span><span>${formatPrice(x.price)} <button onclick="removeFromCart(${i})">❌</button></span></div>`).join(""):"<p>سبد خرید شما خالی است.</p>";
 document.getElementById("cartTotal").textContent=formatPrice(cart.reduce((s,x)=>s+x.price,0));
}
function openCart(){document.getElementById("cartModal").style.display="block";updateCart()}
function closeCart(){document.getElementById("cartModal").style.display="none"}
renderProducts();updateCart();
