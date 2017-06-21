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
	outputCatFood(catFoodData.cat_brands);
}



function outputProducts(prodsArr)  {
	let productList=document.getElementById("dog-food");
	prodsArr.forEach(function(brand) {
		productList.innerHTML += `<h2>${brand.name} Brand:</h2>`
		brand.types.forEach(function(brandType) {
			productList.innerHTML += `<h3>${brandType.type} foods</h3>`
			brandType.volumes.forEach(function(volume)  {
				productList.innerHTML += `<p>size ${volume.name} at $${volume.price} each</p>`

				})
		})
	})
}

function outputCatFood(prodsArr)  {
	console.log("prodsArr?", prodsArr);
	let catFoodList=document.getElementById("cat-food");
	prodsArr.forEach(function(brand) {
		catFoodList.innerHTML += `<h2>${brand.name} Brand:</h2>`
		brand.breeds.forEach(function(breedName) {
			catFoodList.innerHTML +=`<h3>For ${breedName.breed} Breeds:</h3>`
			breedName.food_types.forEach(function(type) {
				catFoodList.innerHTML += `<h4>${type.food_type}</h4>`
				type.volumes.forEach(function(volPrice) {
					catFoodList.innerHTML+= `<p>size ${volPrice.volume} at $${volPrice.price} each</p>`;
				})
			})
		})
	})

}