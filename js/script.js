function updatePrice(product, price) {
  const extraProducts = document.getElementById("extra-" + product);
  extraProducts.innerText = price;
}
// total price of products
function totalPrice() {
  const memoryPrice = document.getElementById("extra-memory").innerText;
  const storagePrice = document.getElementById("extra-storage").innerText;
  const deliveryChrage = document.getElementById(
    "extra-delivery-charge"
  ).innerText;
  const totalPrice = document.getElementById("total-price");
  totalPrice.innerText =
    1299 +
    parseInt(memoryPrice) +
    parseInt(storagePrice) +
    parseInt(deliveryChrage);
  const promoCode = document.getElementById("input-discount");
  const totalDiscount = document.getElementById("discount-total");
  if (promoCode.value == "stevekaku") {
    const discountPrice = (totalPrice.innerText * 20) / 100;
    totalDiscount.innerText = totalPrice.innerText - discountPrice;
  } else {
    totalDiscount.innerText = totalPrice.innerText;
  }
}
document.getElementById("8gb-ram").addEventListener("click", function () {
  updatePrice("memory", 0);
  totalPrice();
});
document.getElementById("16gb-ram").addEventListener("click", function () {
  updatePrice("memory", 180);
  totalPrice();
});
document.getElementById("256gb-ssd").addEventListener("click", function () {
  updatePrice("storage", 0);
  totalPrice();
});
document.getElementById("512gb-ssd").addEventListener("click", function () {
  updatePrice("storage", 100);
  totalPrice();
});
document.getElementById("1tb-ssd").addEventListener("click", function () {
  updatePrice("storage", 180);
  totalPrice();
});
document.getElementById("free-delivery").addEventListener("click", function () {
  updatePrice("delivery-charge", 0);
  totalPrice();
});
document.getElementById("paid-delivery").addEventListener("click", function () {
  updatePrice("delivery-charge", 20);
  totalPrice();
});
document.getElementById("apply-button").addEventListener("click", function () {
  totalPrice();
});
