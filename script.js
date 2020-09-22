// Unsplash API
const count = 10;
const apiKey = 'wr1aLGCaCuoz407ndRAeLSU88K8FXr29hbLPky7u4dw';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from unsplash API

async function getPhotos() {
	try {
		const response = await fetch(apiUrl);
		const data = await response.json();
		console.log(data);
	} catch (error) {
		//catch error here
	}
}

// On Load
getPhotos();
