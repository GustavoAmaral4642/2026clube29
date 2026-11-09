// script.js

document.addEventListener('DOMContentLoaded', function () {
	const fotos = [
		{ src: "../img/clube_pictures_29/desfile_29_de_agosto_2025/Foto1.jpg",  alt: "Foto 1" , title:   "Faixa 1 - Foto 1" },
		{ src: "../img/clube_pictures_29/desfile_29_de_agosto_2025/Foto2.jpg",  alt: "Foto 2" , title:   "Faixa 1 - Foto 2" },
		{ src: "../img/clube_pictures_29/desfile_29_de_agosto_2025/Foto3.jpg",  alt: "Foto 3" , title:   "Faixa 1 - Foto 3" },
		{ src: "../img/clube_pictures_29/desfile_29_de_agosto_2025/Foto4.jpg",  alt: "Foto 4" , title:   "Faixa 2 - Foto 4" },
		{ src: "../img/clube_pictures_29/desfile_29_de_agosto_2025/Foto5.jpg",  alt: "Foto 5" , title:   "Faixa 2 - Foto 5" },
		{ src: "../img/clube_pictures_29/desfile_29_de_agosto_2025/Foto6.jpg",  alt: "Foto 6" , title:   "Faixa 2 - Foto 6" },
		{ src: "../img/clube_pictures_29/desfile_29_de_agosto_2025/Foto7.jpg",  alt: "Foto 7" , title:   "Faixa 3 - Foto 7" },
		{ src: "../img/clube_pictures_29/desfile_29_de_agosto_2025/Foto8.jpg",  alt: "Foto 8" , title:   "Faixa 3 - Foto 8" },
		{ src: "../img/clube_pictures_29/desfile_29_de_agosto_2025/Foto9.jpg",  alt: "Foto 9" , title:   "Faixa 3 - Foto 9" },
		{ src: "../img/clube_pictures_29/desfile_29_de_agosto_2025/Foto10.jpg", alt: "Foto 10", title:  "Faixa 4 - Foto 10" },
		{ src: "../img/clube_pictures_29/desfile_29_de_agosto_2025/Foto11.jpg", alt: "Foto 11", title:  "Faixa 4 - Foto 11" },
		{ src: "../img/clube_pictures_29/desfile_29_de_agosto_2025/Foto12.jpg", alt: "Foto 12", title:  "Faixa 4 - Foto 12" },
		{ src: "../img/clube_pictures_29/desfile_29_de_agosto_2025/Foto13.jpg", alt: "Foto 13", title:  "Faixa 5 - Foto 13" },
		{ src: "../img/clube_pictures_29/desfile_29_de_agosto_2025/Foto14.jpg", alt: "Foto 14", title:  "Faixa 5 - Foto 14" },
		{ src: "../img/clube_pictures_29/desfile_29_de_agosto_2025/Foto15.jpg", alt: "Foto 15", title:  "Faixa 5 - Foto 15" },
		{ src: "../img/clube_pictures_29/desfile_29_de_agosto_2025/Foto16.jpg", alt: "Foto 16", title:  "Faixa 6 - Foto 16" },
		{ src: "../img/clube_pictures_29/desfile_29_de_agosto_2025/Foto17.jpg", alt: "Foto 17", title:  "Faixa 6 - Foto 17" },
		{ src: "../img/clube_pictures_29/desfile_29_de_agosto_2025/Foto18.jpg", alt: "Foto 18", title:  "Faixa 6 - Foto 18" },

	];

	const galeriaCoquetelBasquete = document.getElementById('desfile-29-de-agosto-2025');

	fotos.forEach(foto => {
		const li = document.createElement('li');
		li.className = 'grid-1-3';

		const div = document.createElement('div');
		div.className = 'foto_galeria_img';

		const a = document.createElement('a');
		a.href = foto.src;
		a.target = '_blank';
		a.title = foto.title;

		const img = document.createElement('img');
		img.src = foto.src;
		img.alt = foto.alt;

		a.appendChild(img);
		div.appendChild(a);
		li.appendChild(div);
		galeriaCoquetelBasquete.appendChild(li);
	});
});
