document.addEventListener("DOMContentLoaded", function() {
	const sku = new URL(window.location).searchParams.get("sku");
	fetch(`https://emilius-tester.herokuapp.com/products/${sku}`)
		.then(response => response.json())
		.then(function(product) {
			const container = document.getElementsByClassName("page")[0];
			container.querySelector("h1").innerText = product[0].name;
			container.querySelectorAll("p")[0].innerText = product[0].description;
			container.querySelector(".price").innerText = product[0].price;
			container.querySelector(".weight").innerText = product[0].weight;
		});
});