import { products } from "../data/products";

export function calculateCartTotal(cart) {
  return cart.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.productId);
    if (!product) return sum;

    const price = parseFloat(product.priceStringPl.replace(",", "."));
    return sum + price * item.quantity;
  }, 0);
}

export function formatCurrencyPLN(value) {
  return value.toLocaleString("pl-PL", {
    style: "currency",
    currency: "PLN",
  });
}

export function getCartSummary(cart) {
  const totalPrice = calculateCartTotal(cart);

  return {
    isAnyItem: cart.length > 0,
    totalPrice,
    totalPriceFormatted: formatCurrencyPLN(totalPrice),
  };
}
