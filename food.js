let myRequest = new XMLHttpRequest();
let secondRequest = new XMLHttpRequest();

myRequest.addEventListener("error", doThisIfError);
secondRequest.addEventListener("error", doThisIfError);

function doThisIfError () {
	document.write("An error occurred while transferring data.");
}


console.log("myRequest", myRequest);
console.log("secondRequest", secondRequest);

myRequest.addEventListener("load", doThisWhenFileLoads);
secondRequest.addEventListener("load", doThisWhenSecondFileLoads);

myRequest.open("GET", "petfood.json");
secondRequest.open ("GET", "catfood.JSON");

myRequest.send();
secondRequest.send();

function doThisWhenFileLoads() {
	//save in a variable the result of parsing the JSON file
	//the event is because this comes from an event listener.
	var foodData = JSON.parse(event.target.responseText);
	console.log("dog food data", foodData);
	outputProducts(foodData.dog_brands);
}

function doThisWhenSecondFileLoads() {
	//save in a variable the result of parsing the JSON file
	//the event is because this comes from an event listener.
	var catFoodData = JSON.parse(event.target.responseText);
	console.log("cat food data", catFoodData);
	outputProducts(catFoodData.cat_brands);
}



function outputProducts(prodsArr)  {
	console.log("prodsArr?", prodsArr);
	let productList=document.getElementById("dog-food");
	prodsArr.forEach(function(brand) {
		console.log("food brand", brand.name);
		productList.innerHTML += `<h2>${brand.name} Brand:</h2>`
		brand.types.forEach(function(brandType) {
			console.log("food types for each brand", brandType.type);
			productList.innerHTML += `<h3>${brandType.type} foods</h3>`
			console.log("brandtype", brandType);
			console.log("brandtype volumes", brandType.volumes);
			// brandType=brandType.volumes
			brandType.volumes.forEach(function(volume)  {
				console.log("volumes for each type", volume.name);
				productList.innerHTML += `<h4>sizes: ${volume.name} at $ ${volume.price} each</h4>`

				})

		})
	})
}

function outputCatFood(prodsArr)  {
	console.log("prodsArr?", prodsArr);
	let catFoodList=document.getElementById("cat-food");
	prodsArr.forEach(function(brand) {
		console.log("cat food brand", brand.name);
	})

}