import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts , loadProductsFetch } from "../data/products.js";
// import '../data/backend-practice.js';
// import '../data/cart-class.js';


async function loadPage(){
  console.log("load page");
  await loadProductsFetch();
  renderOrderSummary();
  renderPaymentSummary();
  renderOrderSummary();
}
loadPage();

/*
loadProductsFetch().then(() => {
  renderOrderSummary();
  renderPaymentSummary();
})
/*
loadProducts(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/