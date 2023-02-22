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
  console.log('left');
});

document.querySelector('.arrow_right').addEventListener('click', () => {
  console.log('right');
});

slides.forEach(slide => {
    slide.dot = document.createElement('span');
    slide.dot.classList.add('dot');
    document.querySelector('.dots').appendChild(slide.dot);
});

slides[0].dot.classList.add('dot_selected');
