$(document).ready(function () {

  // Loading message
  $("#message").text("Loading products...");

  // AJAX Request
  $.ajax({
    url: "http://10.5.1.238:3000/itlab/minor2/product.json",
    method: "GET",

    //change url with working one.
    // Success Response
    success: function (data) {

      $("#message").text("");

      // Loop through products
      data.forEach(function (product) {

        const card = `
          <div class="card">
            <h2>${product.name}</h2>
            <p><strong>Price:</strong> ₹${product.price}</p>
            <p><strong>Description:</strong> ${product.description}</p>
          </div>
        `;

        // Append cards to container
        $("#product-container").append(card);
      });
    },

    // Error Response
    error: function () {

      $("#message").text("Failed to load product data.");
    }
  });

});