// Get photos from unsplash API

const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

// Unsplash API
const count = 30;
const apiKey = 'wr1aLGCaCuoz407ndRAeLSU88K8FXr29hbLPky7u4dw';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// check if all images were loaded
function imageLoaded() {
	// console.log('images loaded');
	imagesLoaded++;
	// console.log(imagesLoaded);
	if (imagesLoaded === totalImages) {
		ready = true;
		loader.hidden = true;
		// console.log('ready =', ready);
	}
}

// helper function to set attributes on DOM elements
function setAttributes(element, attributes) {
	for (const key in attributes) {
		element.setAttribute(key, attributes[key]);
	}
}

// function to Create elements for links and photos, then Add to DOM
function displayPhotos() {
	imagesLoaded = 0;
	totalImages = photosArray.length;

	// console.log('total images', totalImages);
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
		// Event listener, check when each is finished loading
		img.addEventListener('load', imageLoaded);
		// Put <img> inside <a> element, then put both inside image container element
		item.appendChild(img);
		imageContainer.appendChild(item);
	});
}

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

// check to see if scrolling near bottom of page, if so load more photos from api
window.addEventListener('scroll', () => {
	if (
		window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
		ready
	) {
		ready = false;
		getPhotos();
	}
});

// On Load
getPhotos();
