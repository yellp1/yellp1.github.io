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
				const button = document.createElement("a");
				button.className = 'card-button drop-shadow inset-shadow';
				button.href = value.link;
				button.target = "_blank";
				button.ariaLabel = "Open in roblox";

				// Set all innerHTML content at once instead of using +=
				const cardIconFrame = document.createElement("div");
				cardIconFrame.className = "card-icon-frame";
				button.appendChild(cardIconFrame);

				const img = document.createElement("img");
				img.ariaLabel = "Plugin Icon";
				img.src = value.icon;
				cardIconFrame.appendChild(img);

				const titleContainer = document.createElement("div");
				titleContainer.className = "card-title-container";
				titleContainer.style.display = "flex";
				button.appendChild(titleContainer);

				const title = document.createElement('h3');
				title.textContent = key;
				titleContainer.appendChild(title);

				const description = document.createElement("span");
				description.textContent = value.description || "";
				button.appendChild(description);

				const openNewTabIcon = document.createElement("a");
				openNewTabIcon.className = "material-symbols-outlined";
				openNewTabIcon.style.fontVariationSettings = '"FILL" 0, "wght" 600, "GRAD" 100, "opsz" 20';
				openNewTabIcon.style.lineHeight = "1.17em";
				openNewTabIcon.style.fontSize = "1.17em";
				openNewTabIcon.style.margin = "auto";
				openNewTabIcon.style.marginLeft = "0.5em";
				openNewTabIcon.textContent = "open_in_new";

				// Define functions for focus handling
				const onFocus = () => {
					if (!titleContainer.contains(openNewTabIcon)) {
						titleContainer.appendChild(openNewTabIcon);
					}

					// Add underline to the title
					title.style.textDecorationLine = "underline";
				};

				const onFocusLost = () => {
					if (!button.matches(':hover') && !button.matches(':focus')) {
						if (titleContainer.contains(openNewTabIcon)) {
							titleContainer.removeChild(openNewTabIcon);
						}
					}

					title.style.textDecoration = "none";
				};

				// Add focus/blur event listeners
				button.addEventListener('focusin', onFocus);
				button.addEventListener('focusout', onFocusLost);

				button.addEventListener('mouseenter', onFocus);
				button.addEventListener('mouseleave', onFocusLost);

				grid.appendChild(button)
			}
		}
	})
	.catch(error => {
		console.log('Error:', error);
	});