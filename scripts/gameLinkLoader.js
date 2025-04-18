
fetch('/projects/gameLinks.json')
	.then(response => response.json())
	.then(data => {
		const container = document.getElementById('creations-container');
		const catagory = document.createElement('div')
		catagory.style.order = 1
		container.appendChild(catagory)

		const h1 = document.createElement('h1')
		h1.textContent = "Games"
		catagory.appendChild(h1)

		const grid = document.createElement('div')
		grid.className = 'games card-container wide'
		catagory.appendChild(grid)

		// Loop through each value in the JSON data
		for (let key in data) {
			if (data.hasOwnProperty(key)) {
				let value = data[key];
				// Do something with the value
				// console.log(key, value);
				// const pluginCard = document.createElement('div');
				// pluginCard.className = 'card'

				// Getting common color from an image V
				// https://gist.github.com/dctalbot/40e3ef209e12f50800734d005131d820
				const button = document.createElement("a")
				button.className = 'card-button drop-shadow inset-shadow'
				button.ariaLabel = "Card " + key
				button.target = "_blank"
				
				if (value.link) {
					button.ariaLabel = "Open in roblox"
					button.href = value.link
				}
				
				const imageFrame = document.createElement("div")
				imageFrame.className = "card-icon-frame"
				button.appendChild(imageFrame)
				
				const thumbnail = document.createElement("img")
				thumbnail.ariaLabel = "Thumbnail: " + key
				thumbnail.src = value.thumbnail
				imageFrame.appendChild(thumbnail)
				
				const titleContainer = document.createElement("div");
				titleContainer.style.display = "flex";
				titleContainer.className = "card-title-container";
				button.appendChild(titleContainer);

				const title = document.createElement("h3");
				title.style.display = "flex";
				title.textContent = key;
				titleContainer.appendChild(title);

				if (button.href) {
					// Showing / hiding with opacity instead of parenting so we
					// don't cause layout changes when hovering.
					const openNewTabIcon = document.createElement("a");
					openNewTabIcon.className = "material-symbols-outlined open-new-tab";
					openNewTabIcon.style.fontVariationSettings = '"FILL" 0, "wght" 600, "GRAD" 100, "opsz" 20';
					openNewTabIcon.style.lineHeight = "1.17em";
					openNewTabIcon.style.fontSize = "1.17em";
					openNewTabIcon.style.margin = "auto";
					openNewTabIcon.style.marginLeft = "0.5em";
					openNewTabIcon.style.opacity = "0"; // Initially hidden
					openNewTabIcon.textContent = "open_in_new";
					titleContainer.appendChild(openNewTabIcon);

					// Define functions for focus handling
					const onFocus = () => {
						openNewTabIcon.style.opacity = "1";

						// Add underline to the title
						title.style.textDecorationLine = "underline";
					};

					const onFocusLost = () => {
						if (!button.matches(':hover') && !button.matches(':focus')) {
							openNewTabIcon.style.opacity = "0";
						}

						title.style.textDecoration = "none";
					};
	
					// Add focus/blur event listeners
					button.addEventListener('focusin', onFocus);
					button.addEventListener('focusout', onFocusLost);
	
					button.addEventListener('mouseenter', onFocus);
					button.addEventListener('mouseleave', onFocusLost);
				}

				const ul = document.createElement("ul")
				
				value.description.forEach((bulletpoint) => {
					const li = document.createElement("li")
					li.textContent = bulletpoint
					ul.appendChild(li)
				});
				
				button.appendChild(ul)
				grid.appendChild(button)
			}
		}
	})
	.catch(error => {
		console.log('Error:', error);
	});