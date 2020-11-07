/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  } 

// When the user scrolls down 50px from the top of the document, resize the header's font size
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("header").style.fontSize = "30px";
//   } else {
//     document.getElementById("header").style.fontSize = "90px";
//   }
// } 

//  Add smooth scrolling on button clicks
function scrollWin() {
  window.scrollTo(0, 800);
}

function hideFunction() {
  var x = document.getElementById("recommend");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "none";
  }
}



// ADDITION FOR DEMO DAY

// Filtering cards
// Select Customer
// $(document).ready(function(){
//   $("#myInputID").on("keyup", function() {
//     var value = $(this).val().toLowerCase();
//     $("#customer_ID *").filter(function() {
//       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//     });
//   });
// });

// // Select Category
// $(document).ready(function(){
//   $("#myInputCategory").on("keyup", function() {
//     var value = $(this).val().toLowerCase();
//     $("#product_category *").filter(function() {
//       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//     });
//   });
// });

// // Select Product
// $(document).ready(function(){
//   $("#myInputProduct").on("keyup", function() {
//     var value = $(this).val().toLowerCase();
//     $("#product_name *").filter(function() {
//       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//     });
//   });
// });

// 

// DYNAMIC PRODUCT NAME DROPDOWN MENU
var iowaPath4 = `/get_product_category_details`;
var iowaCat;
var prodCatValue;
d3.json(iowaPath4)
.then(data => {iowaCat = data
prodCatValue = d3.select('#product_category option:checked').node().value
prodCatValue = parseInt(prodCatValue);
console.log(prodCatValue);
var whereToPut = document.getElementById("product_name");
document.querySelectorAll('#productUL option').forEach(option => option.remove())
var productFilter = iowaCat.filter(element => element.category == prodCatValue);
for (var i = 0; i < productFilter.length; i++) {
  var productOption = document.createElement("option");
  productOption.text = productFilter[i].item_description["text"];
  productOption.value = productFilter[i].item_number["value"];
  whereToPut.add(productOption,whereToPut.options[null]);
  };
});
