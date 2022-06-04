const tabButtons = document.querySelectorAll('.web__offer--listitem');
const tabImages = document.querySelectorAll('.web__offer--tabimg');

const socialButtons = document.querySelectorAll('.socialmedia__offer--listitemTab');
const socialImages = document.querySelectorAll('.socialmedia__offer--tabimg');

const changeContent = (array, value) => {

	array.forEach((elem) => {
		if(elem.dataset.field === value)
		{
			elem.classList.remove('hidden');
		} else {
			elem.classList.add('hidden');
		}
	});

}


tabButtons.forEach(function(tabButton){
	tabButton.addEventListener('mouseenter', (event) => {
		let dataValue = tabButton.dataset.handle;

		changeContent(tabImages, dataValue);

	});
});

socialButtons.forEach(function(socialButton){
	socialButton.addEventListener('mouseenter', (event) => {
		let dataValue = socialButton.dataset.handle;

		changeContent(socialImages, dataValue);

	});
});