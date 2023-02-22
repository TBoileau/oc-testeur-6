const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

document.querySelector('.arrow_left').addEventListener('click', () => {
  renderSlide(currentSlide.previous);
});

document.querySelector('.arrow_right').addEventListener('click', () => {
	renderSlide(currentSlide.next);
});

slides.forEach((slide, index) => {
    slide.dot = document.createElement('span');
    slide.dot.classList.add('dot');
    document.querySelector('.dots').appendChild(slide.dot);
		slide.next = slides[index + 1] || slides[0];
		slide.previous = slides[index - 1] || slides[slides.length - 1];
});

let currentSlide = slides[0];

const renderSlide = (slide) => {
	currentSlide.dot.classList.remove('dot_selected');
	currentSlide = slide;
	currentSlide.dot.classList.add('dot_selected');
	document.querySelector('#banner .banner-img').src = `./assets/images/slideshow/${currentSlide.image}`;
	document.querySelector('#banner p').innerHTML = currentSlide.tagLine;
}

renderSlide(currentSlide);
