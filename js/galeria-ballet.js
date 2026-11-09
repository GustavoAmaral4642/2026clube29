// script.js

document.addEventListener('DOMContentLoaded', function () {
	const fotos = [
		{ src: "img/clube_pictures_29/ballet/Ballet_infantil-18.jpg", alt: "Foto 1", title: "Faixa 1 - Foto 1" },
		{ src: "img/clube_pictures_29/ballet/Ballet_infantil-5.jpg", alt: "Foto 2", title: "Faixa 1 - Foto 2" },
		{ src: "img/clube_pictures_29/ballet/Ballet_infantil-9.jpg", alt: "Foto 3", title: "Faixa 1 - Foto 3" },
		{ src: "img/clube_pictures_29/ballet/Ballet_infantil-12.jpg", alt: "Foto 4", title: "Faixa 2 - Foto 4" },
		{ src: "img/clube_pictures_29/ballet/Ballet_infantil-13.jpg", alt: "Foto 5", title: "Faixa 2 - Foto 5" },
		{ src: "img/clube_pictures_29/ballet/Ballet_infantil-14.jpg", alt: "Foto 6", title: "Faixa 2 - Foto 6" },
		{ src: "img/clube_pictures_29/ballet/Ballet_infantil-15.jpg", alt: "Foto 7", title: "Faixa 3 - Foto 7" },

		// Adicione mais itens aqui conforme necessário
	];

	const galeriaBallet = document.getElementById('galeria-ballet-infantil');

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
		galeriaBallet.appendChild(li);
	});
});
