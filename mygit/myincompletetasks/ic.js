$(document).ready(function(){
$products = [
{"id": "100","name": "iPhone 4S","brand": "Apple","os": "iOS","remove":""},
{"id": "101","name": "Moto X","brand": "Motorola","os": "Android","remove":""	},
{"id": "102","name": "iPhone 6","brand": "Apple","os": "iOS", "remove":""},
{"id": "103","name": "Samsung Galaxy S","brand": "Samsung","os": "Android","remove":""},
{"id": "104","name": "Google Nexus","brand": "ASUS","os": "Android","remove":""},
{"id": "105","name": "Surface","brand": "Microsoft","os": "Windows","remove":"" }
];

// for table show//
function populate(){
  $text="";
  $text="<tr><th>ID</th><th>Name</th><th>Brand</th><th>Operating System</th><th>Remove</th></tr>";
  for(i=0;i<$products.length;i++){
    $text+="<tr><td>"+$products[i].id+"</td><td>"+$products[i].name+"</td><td>"+$products[i].brand+"</td><td>"+$products[i].os+"</td><td><a class='hidden'>x</a></tr>";
   
  }
  $("#tblshow").html($text);
  console.log($text)
}
populate();

//for hide //
$("#tblshow").on("click","a",function(){
  $(this).closest("tr").hide();
});







})