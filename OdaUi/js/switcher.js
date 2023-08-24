
var cart = {};

$(document).on("click", ".category-button", function() {
    var selectedCategory = $(this).data("category");

    // Save current cart items to cart object and clear the cart
    $("#cart-items li").each(function() {
        var item = $(this).text().trim();
        if (item) {
            cart[item] = selectedCategory;
        }
    });
    $("#cart-items").empty();

    // Load new category items into the cart
    if (selectedCategory === "vegetable") {
        $("#cart-items").append("<li>Carrot</li><li>Tomato</li>");
    } else if (selectedCategory === "fruit") {
        $("#cart-items").append("");
    }

    // Load previous category items from cart object
    for (var item in cart) {
        if (cart[item] !== selectedCategory) {
            $("#cart-items").append("<li>" + item + "</li>");
        }
    }
});
