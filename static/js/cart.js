d3.select("#submit").on("click", SaveItem);

function SaveItem() {	
    d3.event.preventDefault();
	var productSelector = d3.select("#product_name").node().value; 
	var selectedProd = d3.select('#product_name option:checked').text();	
	var qty = d3.select("#myInputQuantity").property("value");
	localStorage.setItem(selectedProd, qty);
	doShowAll();	
	
}

function ClearAll() {
	localStorage.clear();
	doShowAll();
}

function doShowAll() {
		var key = "";
		var list = "<tr><th>Item</th><th>Value</th></tr>\n";
		var i = 0;
		//for more advance feature, you can set cap on max items in the cart
		for (i = 0; i <= localStorage.length-1; i++) {
			key = localStorage.key(i);
			list += "<tr><td>" + key + "</td>\n<td>" + localStorage.getItem(key) + "</td></tr>\n";
		}
		//if no item exists in the cart
		if (list == "<tr><th>Product</th><th>Quantity</th></tr>\n") {
			list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
		}
		//bind the data to html table
		//you can use jQuery too....
		document.getElementById('list').innerHTML = list;
}
