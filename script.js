// Unsplash API
const count = 10;
const apiKey = 'wr1aLGCaCuoz407ndRAeLSU88K8FXr29hbLPky7u4dw';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// function to Create elements for links and photos, then Add to DOM
function displayPhotos() {
	// Run function for each object in photosArray
	photosArray.forEach((photo) => {
		// create <a> attribute to link to unsplash photos
		const item = document.createElement('a');
		item.setAttribute('href', photo.links.html);
		item.setAttribute('target', '_blank');
	});
}

// Get photos from unsplash API

const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

async function getPhotos() {
	try {
		const response = await fetch(apiUrl);
		photosArray = await response.json();
		// console.log(photosArray);
		displayPhotos();
	} catch (error) {
		//catch error here
	}
}

// On Load
getPhotos();
