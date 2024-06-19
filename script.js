// Add event listener to navigation links
navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
	link.addEventListener('click', event => {
		event.preventDefault();
		const target = event.target.getAttribute('href');
		document.querySelector(target).scrollIntoView();
	});
});