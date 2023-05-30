// var xhr = new XMLHttpRequest();
// xhr.open("GET", "/images", true);
// xhr.responseType = 'document';
// xhr.onload = () => {
//   if (xhr.status === 200) {
//     var elements = xhr.response.getElementsByTagName("a");
//     for (x of elements) {
//       if ( x.href.match(/\.(jpe?g|png|gif)$/) ) { 
//           let img = document.createElement("img");
//           img.src = x.href;
// 		  $(".image-container").append(img);
//       } 
//     };
//   } 
//   else {
//     alert('Request failed. Returned status of ' + xhr.status);
//   }
// }
// xhr.send()

const containerElements = document.getElementsByClassName('creations-container');
// Get the first element with the class "container"
const container = containerElements[0];

const h1 = document.createElement('h1')
h1.textContent = "Plugins"
container.appendChild(h1)

const grid = document.createElement('div')
grid.className = 'plugins card-container'
container.appendChild(grid)

fetch('/projects/pluginLinks.json')
	.then(response => response.json())
	.then(data => {
		// Loop through each value in the JSON data
		for (let key in data) {
			if (data.hasOwnProperty(key)) {
				let value = data[key];
				// Do something with the value
				// console.log(key, value);
				// const pluginCard = document.createElement('div');
				// pluginCard.className = 'card'

				const button = document.createElement("a")
				button.className = 'card-button'
				button.href = value.link
				button.target = "_blank"

				// const path = key.toLowerCase().replace(/ +/g, "-")
				const icon = document.createElement("img")
				icon.src = value.icon
				// icon.src = `/images/icons/${path}.png`
				button.appendChild(icon)
				// icon.src = "/images/".replace()

				// .jss95
				// button.appendChild(button)
				grid.appendChild(button)
			}
		}
	})
	.catch(error => {
		console.log('Error:', error);
	});