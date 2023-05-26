// 'getElementById' is used to show items in the HTML page
const searchButton = document.getElementById('search-button');
const dateInput = document.getElementById('date-input');

//New feature added: A default picture is immediately shown as 
// an addition that the source code did not use.
const currentDate = new Date().toISOString().split('T')[0];  
dateInput.value = currentDate;

const imageContainer = document.getElementById('image-container');
const titleContainer = document.getElementById('title-container');
const apiKey = '5J3Fkhi5h28mbmxSdSC9SBD8QRZl1CLcZ27zMSH8';
const date = dateInput.value;
const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;
// Function 1: It operates when the default picture is needed to show up
fetch(url)
		.then(response => response.json())
		.then(data => {
			if (data.media_type === 'image') {
				imageContainer.innerHTML = `<img src="${data.url}" alt="${data.title}">`;
				titleContainer.innerHTML = `<h2>${data.title}</h2>`;
			} else {
				imageContainer.innerHTML = `<p>No image available for this date</p>`;
				titleContainer.innerHTML = "";
			}
		})
		.catch(error => {
			console.error(error);
			imageContainer.innerHTML = `<p>Failed to fetch image</p>`;
			titleContainer.innerHTML = "";
		});

// This part when the user choose the wanted date, -Our team chose not to view the description of the photo which the source code chose to do-
// Function 2: It operates when the "Search" button is clicked
searchButton.addEventListener('click', () => {
	const date = dateInput.value;
	const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;
	fetch(url) // Requesting by the URL directly instead of using getDate() + myJSON.api_Key
		.then(response => response.json())// Returning a json response same as source code
		.then(data => {
			if (data.media_type === 'image') {
				imageContainer.innerHTML = `<img src="${data.url}" alt="${data.title}">`;
				titleContainer.innerHTML = `<h2>${data.title}</h2>`;
		    //Error Handling: In case an error happens, it can be handled. However, the source code did not handle any errors may arise
			} else { 
				imageContainer.innerHTML = `<p>No image available for this date</p>`;
				titleContainer.innerHTML = "";
			}
		})
		//Error Handling: In case an error happens, it can be handled. However, the source code did not handle any errors may arise
		.catch(error => {
			console.error(error);
			imageContainer.innerHTML = `<p>Failed to fetch image</p>`;
			titleContainer.innerHTML = "";
		});
});

