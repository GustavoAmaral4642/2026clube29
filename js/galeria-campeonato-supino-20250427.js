// script.js

document.addEventListener('DOMContentLoaded', function () {
	const fotos = [
		{ src: "../img/clube_pictures_29/campeonato_supino_20250427/Foto_01.jpg", alt: "Foto 1", title: "Faixa 1 - Foto 1" },
		{ src: "../img/clube_pictures_29/campeonato_supino_20250427/Foto_02.jpg", alt: "Foto 2", title: "Faixa 1 - Foto 2" },
		{ src: "../img/clube_pictures_29/campeonato_supino_20250427/Foto_03.jpg", alt: "Foto 3", title: "Faixa 1 - Foto 3" },
		{ src: "../img/clube_pictures_29/campeonato_supino_20250427/Foto_04.jpg", alt: "Foto 4", title: "Faixa 2 - Foto 4" },
		{ src: "../img/clube_pictures_29/campeonato_supino_20250427/Foto_05.jpg", alt: "Foto 5", title: "Faixa 2 - Foto 5" },
		{ src: "../img/clube_pictures_29/campeonato_supino_20250427/Foto_06.jpg", alt: "Foto 6", title: "Faixa 2 - Foto 6" },
		{ src: "../img/clube_pictures_29/campeonato_supino_20250427/Foto_07.jpg", alt: "Foto 7", title: "Faixa 3 - Foto 7" },
		{ src: "../img/clube_pictures_29/campeonato_supino_20250427/Foto_08.jpg", alt: "Foto 8", title: "Faixa 3 - Foto 8" },
		{ src: "../img/clube_pictures_29/campeonato_supino_20250427/Foto_09.jpg", alt: "Foto 9", title: "Faixa 3 - Foto 9" },
		{ src: "../img/clube_pictures_29/campeonato_supino_20250427/Foto_10.jpg", alt: "Foto 10", title: "Faixa 4 - Foto 10" },
		{ src: "../img/clube_pictures_29/campeonato_supino_20250427/Foto_11.jpg", alt: "Foto 11", title: "Faixa 4 - Foto 11" },
		{ src: "../img/clube_pictures_29/campeonato_supino_20250427/Foto_12.jpg", alt: "Foto 12", title: "Faixa 4 - Foto 12" },
		{ src: "../img/clube_pictures_29/campeonato_supino_20250427/Foto_13.jpg", alt: "Foto 13", title: "Faixa 5 - Foto 13" },
		{ src: "../img/clube_pictures_29/campeonato_supino_20250427/Foto_14.jpg", alt: "Foto 14", title: "Faixa 5 - Foto 14" },
		{ src: "../img/clube_pictures_29/campeonato_supino_20250427/Foto_15.jpg", alt: "Foto 15", title: "Faixa 5 - Foto 15" },
		{ src: "../img/clube_pictures_29/campeonato_supino_20250427/Foto_16.jpg", alt: "Foto 16", title: "Faixa 6 - Foto 16" },
		{ src: "../img/clube_pictures_29/campeonato_supino_20250427/Foto_17.jpg", alt: "Foto 17", title: "Faixa 6 - Foto 17" },
		{ src: "../img/clube_pictures_29/campeonato_supino_20250427/Foto_18.jpg", alt: "Foto 18", title: "Faixa 6 - Foto 18" },
		{ src: "../img/clube_pictures_29/campeonato_supino_20250427/Foto_19.jpg", alt: "Foto 19", title: "Faixa 7 - Foto 19" },
		{ src: "../img/clube_pictures_29/campeonato_supino_20250427/Foto_20.jpg", alt: "Foto 20", title: "Faixa 7 - Foto 20" },
		{ src: "../img/clube_pictures_29/campeonato_supino_20250427/Foto_21.jpg", alt: "Foto 21", title: "Faixa 7 - Foto 21" },
		{ src: "../img/clube_pictures_29/campeonato_supino_20250427/Foto_22.jpg", alt: "Foto 22", title: "Faixa 8 - Foto 22" },
		{ src: "../img/clube_pictures_29/campeonato_supino_20250427/Foto_23.jpg", alt: "Foto 23", title: "Faixa 8 - Foto 23" },
		{ src: "../img/clube_pictures_29/campeonato_supino_20250427/Foto_24.jpg", alt: "Foto 24", title: "Faixa 8 - Foto 24" },
		{ src: "../img/clube_pictures_29/campeonato_supino_20250427/Foto_25.jpg", alt: "Foto 25", title: "Faixa 9 - Foto 25" },
		{ src: "../img/clube_pictures_29/campeonato_supino_20250427/Foto_26.jpg", alt: "Foto 26", title: "Faixa 9 - Foto 26" },
		{ src: "../img/clube_pictures_29/campeonato_supino_20250427/Foto_27.jpg", alt: "Foto 27", title: "Faixa 9 - Foto 27" },
		{ src: "../img/clube_pictures_29/campeonato_supino_20250427/Foto_28.jpg", alt: "Foto 28", title: "Faixa 10 - Foto 28" },
		{ src: "../img/clube_pictures_29/campeonato_supino_20250427/Foto_29.jpg", alt: "Foto 29", title: "Faixa 10 - Foto 29" },

		// Adicione mais itens aqui conforme necessário
	];

	const galeriaRitbox = document.getElementById('galeria-campeonato-supino-20250427');

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
		galeriaRitbox.appendChild(li);
	});
});
