// Unsplash API
const count = 10;
const apiKey = 'wr1aLGCaCuoz407ndRAeLSU88K8FXr29hbLPky7u4dw';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// helper function to set attributes on DOM elements
function setAttributes(element, attributes) {
	for (const key in attributes) {
		element.setAttribute(key, attributes[key]);
	}
}

// function to Create elements for links and photos, then Add to DOM
function displayPhotos() {
	// Run function below for each object in photosArray
	photosArray.forEach((photo) => {
		// create <a> attribute to link to unsplash photos
		const item = document.createElement('a');

		setAttributes(item, {
			href: photo.links.html,
			target: '_blank',
		});
		// Create <img> for photo
		const img = document.createElement('img');

		setAttributes(img, {
			src: photo.urls.regular,
			alt: photo.alt_description,
			title: photo.alt_description,
		});
		// Put <img> inside <a> element, then put both inside image container element
		item.appendChild(img);
		imageContainer.appendChild(item);
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
		console.log(photosArray);
		displayPhotos();
	} catch (error) {
		//catch error here
	}
}

// On Load
getPhotos();
