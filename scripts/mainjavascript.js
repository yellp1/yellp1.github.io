// Get the sidebar button element
const sidebarButton = document.querySelector('#topbar-navigation > .sidebar-button > a');
const sidebar = document.querySelector('#sidebar-navigation');

const page = document.querySelector('#page');

// Create a cover div
var fullscreenCover = document.createElement('div');
// Tells our CSS document that this cover div is for the sidebar.
fullscreenCover.setAttribute('ownerid', 'sidebar-navigation')
fullscreenCover.id = 'fullscreen-cover';



function accessibleOnClick(button, callback) {
	button.addEventListener('click', callback);

	// Handling tab focused selections (Pressing enter on a focus-visible element)
	button.addEventListener("keydown", (event) => {
		if (event.isComposing || event.keyCode === 229 || event.repeat) {
			return;
		}

		if (event.code === "Enter" || event.code === " ") {
			print(event.code)
			callback();
		}
	});
}


function _setSidebarState(value) {
	const state = sidebar.classList.toggle('isOpened', value);
	console.log(state)
	// Set the cover div to our sidebar state.
	if (state) {
		// Add the cover div to the page
		page.appendChild(fullscreenCover);
		// Force a reflow to make the transition work.
		void fullscreenCover.offsetHeight;
	}

	fullscreenCover.classList.toggle('active', state);
}

accessibleOnClick(sidebarButton, function() {
	_setSidebarState();
});


// Shorthand for setting the sidebar state to false.
function hideSidebar() {
	_setSidebarState(false);
}

// Add a click event listener to each element in the sidebarr
const sidebarElements = document.querySelectorAll('#sidebar-navigation > .navigation-button > a');
sidebarElements.forEach(function(element) {
	element.addEventListener('click', hideSidebar);
});

// Add a click event listener to the cover div
fullscreenCover.onclick = hideSidebar;


fullscreenCover.addEventListener('transitionend', function() {
	var parentNode = fullscreenCover.parentNode;

	if (parentNode && !fullscreenCover.classList.contains('active')) {
		parentNode.removeChild(fullscreenCover);
	}
});

const navigationButtons = document.querySelectorAll('.navigation-button > a');

/* Topbar navigation buttons */
navigationButtons.forEach(function(button) {
	var anchor = button.getAttribute('href');

	accessibleOnClick(button, function() {
		// Use the anchor variable here
		const foundElement = document.getElementById(anchor.substring(1));
		foundElement.scrollIntoView({ behavior: 'smooth' });
	});

	button.removeAttribute('href');
	button.setAttribute('tabIndex', '0');
	button.setAttribute('role', 'button');
});
