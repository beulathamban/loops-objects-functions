
console.log("hi");


var gallery = document.getElementById("images"); //images div where all the images are rendered. see index.html
wellington();

/*
==========================
		Wellington
==========================

*/


//function to render wellington list of hotels
function wellington(){



//array of objects
//hotels array contains  6 objects below with its name, price and image properties and their values
var hotels=[
	{	
		name:"Rainbow Hotel", // object properties
		price: 90,	// object properties
		image: "image/hotel1.jpg" // object properties

	},
	{	
		name:"Sunrise Hotel",
		price: 70,
		image: "image/hotel2.jpg"

	},
	{	
		name:"Grand Palm Hotel",
		price: 110,
		image: "image/hotel3.jpg"

	},
	{	
		name:"West Plaza Hotel",
		price: 95,
		image: "image/hotel4.jpg"

	},
	{	
		name:"Nomads Accomodation",
		price: 100,
		image: "image/hotel5.jpg"

	},
	{	
		name:"Holiday Inn",
		price: 125,
		image: "image/hotel6.jpg"

	}
	

];

var i; // loop variable


 // setting this container empty before adding list. every click will add the list, so it is necessary to clear . otherwise you will have multiple lists

gallery.innerHTML = " ";

//loop to repeat the render ofeacg object
for (i = 0; i < hotels.length; i++){

	console.log(hotels[i].image); //to check if the object property is accessed properly
	//gallery.innerHTML += "hello" +i;

// this line of code renders the image with its name and price inside image-div container. need to break the long string with + before and after when a dynamic value is to be used.
	gallery.innerHTML += '<div  class="image-div"> <h2>' + hotels[i].name + '</h2>' + '<h3> Price: $ '+ hotels[i].price+' </h3> <img id="image' + i + '" src="' + hotels[i].image + '" class="hotel-image" alt="Hotel"> </div>';
	

	// modal for details of the item	
	document.getElementById("image0").addEventListener('click',function(){

		document.getElementById("images").style.display = "none"; //hide the screen content behind the modal

		document.getElementById("modal0").style.display = "block"; // show the modal


		document.getElementById("hotel0-name").innerHTML = hotels[0].name; //get the values from the array of objects and display in modal
		document.getElementById("hotel0-price").innerHTML = "Price : $" + hotels[0].price;
	});


	//close button on the close bar closes the modal and shows the content of the screen like earlier
	document.getElementById("close0").addEventListener('click',function(){
		document.getElementById("modal0").style.display="none"; // hides modal
			document.getElementById("images").style.display="block"; //shows the list of images
	});
}

}

// Wellington button when clicked will call the function wellington()
document.getElementById("wellington").addEventListener('click', function(){
	console.log("wellington");
	wellington();

})








/*
==========================
		Auckland
==========================

*/
function auckland(){
var hotels=[
	{	
		name:"Seaside Hotel",
		price: 90,
		image: "image/hotel11.jpg"

	},
	{	
		name:"Oceanic Hotel",
		price: 70,
		image: "image/hotel12.jpg"

	},
	{	
		name:"Grand Palm Hotel",
		price: 110,
		image: "image/hotel13.jpg"

	},
	{	
		name:"Pacific Hotel",
		price: 95,
		image: "image/hotel14.jpg"

	},
	{	
		name:"Nomads Accomodation",
		price: 100,
		image: "image/hotel15.jpg"

	},
	{	
		name:"Holiday Homestay",
		price: 125,
		image: "image/hotel21.jpg"

	},
	{	
		name:"Beach Resort",
		price: 100,
		image: "image/hotel24.jpg"

	}
	

];
var i;
gallery.innerHTML = " ";
for (i = 0; i < hotels.length; i++){
console.log(hotels.length);
gallery.innerHTML += '<div class="image-div"> <h2>' + hotels[i].name + '</h2>' + '<h3> Price: $ '+ hotels[i].price+' </h3> <img src="' + hotels[i].image + '" class="hotel-image" alt="Hotel"> </div>';
	//gallery.innerHTML += "hello" +i;
}
}
document.getElementById("auckland").addEventListener('click', function(){
	console.log("Auckland");
	auckland();

});




/*
==========================
		Hamilton
==========================

*/

function hamilton(){
var hotels=[
	{	
		name:"Village Hotel",
		price: 90,
		image: "image/hotel21.jpg"

	},
	{	
		name:"Countryside Hotel",
		price: 70,
		image: "image/hotel22.jpg"

	},
	{	
		name:"Farmers Hotel",
		price: 110,
		image: "image/hotel23.jpg"

	},
	{	
		name:"Tourist Hotel",
		price: 95,
		image: "image/hotel24.jpg"

	},
	{	
		name:"Nomads Accomodation",
		price: 100,
		image: "image/hotel15.jpg"

	}
	

];
var i;
gallery.innerHTML = " ";
for (i = 0; i < hotels.length; i++){
console.log(hotels.length);
gallery.innerHTML += '<div class="image-div"> <h2>' + hotels[i].name + '</h2>' + '<h3> Price: $ '+ hotels[i].price+' </h3> <img src="' + hotels[i].image + '" class="hotel-image" alt="Hotel"> </div>';
	//gallery.innerHTML += "hello" +i;
}
}
document.getElementById("hamilton").addEventListener('click', function(){
	console.log("Hamilton");
	hamilton();

});
