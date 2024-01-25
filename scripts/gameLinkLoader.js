
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
				button.target = "_blank"
				
				if (value.link) {
					button.href = value.link
				}
				
				const imageFrame = document.createElement("div")
				// imageFrame.className = "card-icon-frame drop-shadow"
				imageFrame.className = "card-icon-frame"
				button.appendChild(imageFrame)

				const thumbnail = document.createElement("img")
				thumbnail.src = value.thumbnail
				imageFrame.appendChild(thumbnail)
				
				const title = document.createElement("h3")
				title.textContent = key
				button.appendChild(title)

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