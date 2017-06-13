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