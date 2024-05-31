// Get the sidebar button element
const sidebarButton = document.querySelector('#topbar-navigation > .sidebar-button > a');
const sidebar = document.querySelector('#sidebar-navigation');

const page = document.querySelector('#page');

// Create a cover div
var fullscreenCover = document.createElement('div');
fullscreenCover.id = 'fullscreen-cover';
fullscreenCover.setAttribute('tabindex', 0)

function _setSidebarState(value) {
	const state = sidebar.classList.toggle('isOpened', value);

	// Set the cover div to our sidebar state.
	if (state) {
		// Add the cover div to the page
		page.appendChild(fullscreenCover);
	}

	// setTimeout(function() {
	fullscreenCover.classList.toggle('active', state);
	// }, 10);
}

// Toggle the sidebar state
sidebarButton.addEventListener('click', function() {
	_setSidebarState();
});

sidebarButton.addEventListener("keydown", (event) => {
	// if (event.isComposing || event.keyCode === 229) {
	// 	return;
	// }

	console.log(event.code, event.key);
	if (event.code === "Enter" || event.code === " ") {
		sidebarButton.click();
	}
	// do something
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