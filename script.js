let cartCount = 0;

function addToCart() {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;

  // Optional: show a quick confirmation
  const cartIcon = document.querySelector(".cart");
  cartIcon.style.color = "#00ff00";
  setTimeout(() => {
    cartIcon.style.color = "#fff";
  }, 300);
}