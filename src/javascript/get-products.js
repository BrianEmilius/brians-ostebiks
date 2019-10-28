document.addEventListener("DOMContentLoaded", function() {
	fetch("https://emilius-tester.herokuapp.com/products")
		.then(response => response.json())
		.then(function(data) {
			const cardTemplate = document.getElementById("cardTemplate");
			const list = document.getElementsByClassName("cardList")[0];

			data.forEach(function(product) {
				const clone = cardTemplate.content.cloneNode(true);
				clone.querySelector("h1").innerText = product.name;
				clone.querySelectorAll("p")[0].innerText = product.description;
				clone.querySelector(".price").innerText = product.price;
				clone.querySelector(".weight").innerText = product.weight;
				clone.querySelector("a").href += product.sku;
				list.appendChild(clone);
			});
		});
});