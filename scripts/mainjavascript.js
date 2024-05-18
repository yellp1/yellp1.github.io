// Get the sidebar button element
const sidebarButton = document.querySelector('#topbar-navigation > .sidebar-button > a');
const sidebar = document.querySelector('#sidebar-navigation');

const page = document.querySelector('#page');

// Create a cover div
const fullscreenCover = document.createElement('div');
fullscreenCover.id = 'fullscreen-cover';
page.appendChild(fullscreenCover);


function _setSidebar(value) {
	const state = sidebar.classList.toggle('isOpened', value);

	// Set the cover div to our sidebar state.
	fullscreenCover.classList.toggle('active', state);
}

function _toggleSidebar() { _setSidebar(); }

// Add a click event listener to the sidebar button
sidebarButton.addEventListener('click', _toggleSidebar);

// Add a click event listener to each element in the sidebarr
const sidebarElements = document.querySelectorAll('#sidebar-navigation > .navigation-button > a');

function hideSidebar() { _setSidebar(false); }

sidebarElements.forEach(function(element) {
	element.addEventListener('click', hideSidebar);
});

// Add a click event listener to the cover div
fullscreenCover.addEventListener('click', hideSidebar);