let cartCount = 0;

// Add to Cart function
function addToCart(product, price, discount) {

    cartCount++;

    let finalPrice = price - (price * discount / 100);

    alert(
        "🛒 Product Added: " + product +
        "\n💰 Original Price: ₹" + price +
        "\n🎉 Discount: " + discount + "%" +
        "\n🔥 Final Price: ₹" + finalPrice +
        "\n\n🙏 Thank you for shopping at ShopEZ!"
    );

    console.log("Cart Items: " + cartCount);
}

// Buy Now function
function buyNow(product, price, discount) {

    let finalPrice = price - (price * discount / 100);

    alert(
        "🎉 Order Placed Successfully!\n\n" +
        "📦 Product: " + product +
        "\n💰 Price: ₹" + price +
        "\n🎁 Discount: " + discount + "%" +
        "\n🔥 You Pay: ₹" + finalPrice +
        "\n\n🙏 Thank you from ShopEZ!"
    );
}