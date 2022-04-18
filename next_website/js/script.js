document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar')
	// const collapse = document.querySelector('.navbar-collapse')
	// const link = document.querySelectorAll('.nav-link')

	function addShadow() {
		if (window.scrollY >= 300) {
			nav.classList.add('shadow-bg')
		} else {
			nav.classList.remove('shadow-bg')
		}
	}
    // function hideLinks() {
    //     collapse.classList.remove('show')
    // }

	window.addEventListener('scroll', addShadow)
    // document.addEventListener('click', hideLinks)
})




