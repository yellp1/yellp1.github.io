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


fetch('/projects/pluginLinks.json')
	.then(response => response.json())
	.then(data => {
		const container = document.getElementById('creations-container');
		const catagory = document.createElement('div')
		catagory.style.marginTop = '3rem'
		catagory.style.order = 2
		container.appendChild(catagory)

		const h1 = document.createElement('h1')
		h1.textContent = "Plugins"
		catagory.appendChild(h1)

		const grid = document.createElement('div')
		grid.className = 'plugins card-container'
		catagory.appendChild(grid)

		// Loop through each value in the JSON data
		for (let key in data) {
			if (data.hasOwnProperty(key)) {
				let value = data[key];
				// Do something with the value
				// console.log(key, value);
				// const pluginCard = document.createElement('div');
				// pluginCard.className = 'card'

				// find a way to create a proxy
				// fetch(`https://thumbnails.roblox.com/v1/assets?assetIds=${7785391867}&returnPolicy=PlaceHolder&size=700x700&format=Png&isCircular=false%22`)
				// 	.then((response) => response.json())
				// 	.then((json) => console.log(json));
				// log(data)

				// Getting common color from an image V
				// https://gist.github.com/dctalbot/40e3ef209e12f50800734d005131d820
				const button = document.createElement("a")
				button.className = 'card-button drop-shadow inset-shadow'
				button.href = value.link
				button.target = "_blank"

				const imageFrame = document.createElement("div")
				// imageFrame.className = "card-icon-frame drop-shadow"
				imageFrame.className = "card-icon-frame"
				button.appendChild(imageFrame)

				const icon = document.createElement("img")
				icon.src = value.icon
				imageFrame.appendChild(icon)
				
				const title = document.createElement("h3")
				title.textContent = key
				button.appendChild(title)

				const description = document.createElement("span")
				description.textContent = value.description || ""
				button.appendChild(description)

				grid.appendChild(button)
			}
		}
	})
	.catch(error => {
		console.log('Error:', error);
	});