let myRequest = new XMLHttpRequest();
myRequest.addEventListener("error", doThisIfError);
function doThisIfError () {
	document.write("An error occurred while transferring data.");
}


console.log("myRequest", myRequest);

myRequest.addEventListener("load", doThisWhenFileLoads);

function doThisWhenFileLoads() {
	//save in a variable the result of parsing the JSON file
	//the event is because this comes from an event listener.
	var foodData = JSON.parse(event.target.responseText);
	console.log("the food data", foodData);
	outputProducts(foodData.dog_brands);
}


myRequest.open("GET", "petfood.json");

myRequest.send();

function outputProducts(prodsArr)  {
	console.log("prodsArr?", prodsArr);
	let productList=document.getElementById("dog-food");
	prodsArr.forEach(function(brand) {
	console.log("food brand", brand.name);

	})
}