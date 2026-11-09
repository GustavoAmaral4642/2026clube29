// script.js

document.addEventListener('DOMContentLoaded', function () {
	const fotos = [
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_1.jpg",  alt: "Foto 1" , title:   "Faixa 1 - Foto 1" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_2.jpg",  alt: "Foto 2" , title:   "Faixa 1 - Foto 2" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_3.jpg",  alt: "Foto 3" , title:   "Faixa 1 - Foto 3" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_4.jpg",  alt: "Foto 4" , title:   "Faixa 2 - Foto 4" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_5.jpg",  alt: "Foto 5" , title:   "Faixa 2 - Foto 5" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_6.jpg",  alt: "Foto 6" , title:   "Faixa 2 - Foto 6" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_7.jpg",  alt: "Foto 7" , title:   "Faixa 3 - Foto 7" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_8.jpg",  alt: "Foto 8" , title:   "Faixa 3 - Foto 8" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_9.jpg",  alt: "Foto 9" , title:   "Faixa 3 - Foto 9" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_10.jpg", alt: "Foto 10", title:  "Faixa 4 - Foto 10" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_11.jpg", alt: "Foto 11", title:  "Faixa 4 - Foto 11" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_12.jpg", alt: "Foto 12", title:  "Faixa 4 - Foto 12" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_13.jpg", alt: "Foto 13", title:  "Faixa 5 - Foto 13" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_14.jpg", alt: "Foto 14", title:  "Faixa 5 - Foto 14" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_15.jpg", alt: "Foto 15", title:  "Faixa 5 - Foto 15" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_16.jpg", alt: "Foto 16", title:  "Faixa 6 - Foto 16" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_17.jpg", alt: "Foto 17", title:  "Faixa 6 - Foto 17" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_18.jpg", alt: "Foto 18", title:  "Faixa 6 - Foto 18" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_19.jpg", alt: "Foto 19", title:  "Faixa 7 - Foto 19" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_20.jpg", alt: "Foto 20", title:  "Faixa 7 - Foto 20" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_21.jpg", alt: "Foto 21", title:  "Faixa 7 - Foto 21" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_22.jpg", alt: "Foto 22", title:  "Faixa 8 - Foto 22" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_23.jpg", alt: "Foto 23", title:  "Faixa 8 - Foto 23" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_24.jpg", alt: "Foto 24", title:  "Faixa 8 - Foto 24" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_25.jpg", alt: "Foto 25", title:  "Faixa 9 - Foto 25" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_26.jpg", alt: "Foto 26", title:  "Faixa 9 - Foto 26" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_27.jpg", alt: "Foto 27", title:  "Faixa 9 - Foto 27" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_28.jpg", alt: "Foto 28", title: "Faixa 10 - Foto 28" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_29.jpg", alt: "Foto 29", title: "Faixa 10 - Foto 29" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_30.jpg", alt: "Foto 30", title: "Faixa 10 - Foto 30" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_31.jpg", alt: "Foto 31", title: "Faixa 11 - Foto 31" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_32.jpg", alt: "Foto 32", title: "Faixa 11 - Foto 32" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_33.jpg", alt: "Foto 33", title: "Faixa 11 - Foto 33" },

		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_34.jpg", alt: "Foto 34", title:  "Faixa 12 - Foto 34" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_35.jpg", alt: "Foto 35", title:  "Faixa 12 - Foto 35" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_36.jpg", alt: "Foto 36", title:  "Faixa 12 - Foto 36" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_37.jpg", alt: "Foto 37", title:  "Faixa 13 - Foto 37" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_38.jpg", alt: "Foto 38", title:  "Faixa 13 - Foto 38" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_39.jpg", alt: "Foto 39", title:  "Faixa 13 - Foto 39" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_40.jpg", alt: "Foto 40", title:  "Faixa 14 - Foto 40" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_41.jpg", alt: "Foto 41", title:  "Faixa 14 - Foto 41" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_42.jpg", alt: "Foto 42", title:  "Faixa 14 - Foto 42" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_43.jpg", alt: "Foto 43", title:  "Faixa 15 - Foto 43" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_44.jpg", alt: "Foto 44", title:  "Faixa 15 - Foto 44" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_45.jpg", alt: "Foto 45", title:  "Faixa 15 - Foto 45" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_46.jpg", alt: "Foto 46", title:  "Faixa 16 - Foto 46" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_47.jpg", alt: "Foto 47", title:  "Faixa 16 - Foto 47" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_48.jpg", alt: "Foto 48", title:  "Faixa 16 - Foto 48" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_49.jpg", alt: "Foto 49", title:  "Faixa 17 - Foto 49" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_50.jpg", alt: "Foto 50", title:  "Faixa 17 - Foto 50" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_51.jpg", alt: "Foto 51", title:  "Faixa 17 - Foto 51" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_52.jpg", alt: "Foto 52", title:  "Faixa 18 - Foto 52" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_53.jpg", alt: "Foto 53", title:  "Faixa 18 - Foto 53" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_54.jpg", alt: "Foto 54", title:  "Faixa 18 - Foto 54" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_55.jpg", alt: "Foto 55", title:  "Faixa 19 - Foto 55" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_56.jpg", alt: "Foto 56", title:  "Faixa 19 - Foto 56" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_57.jpg", alt: "Foto 57", title:  "Faixa 19 - Foto 57" },

		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_58.jpg", alt: "Foto 58", title:  "Faixa 20 - Foto 58" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_59.jpg", alt: "Foto 59", title:  "Faixa 20 - Foto 59" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_60.jpg", alt: "Foto 60", title:  "Faixa 20 - Foto 60" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_61.jpg", alt: "Foto 61", title:  "Faixa 21 - Foto 61" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_62.jpg", alt: "Foto 62", title:  "Faixa 21 - Foto 62" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_63.jpg", alt: "Foto 63", title:  "Faixa 21 - Foto 63" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_64.jpg", alt: "Foto 64", title:  "Faixa 22 - Foto 64" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_65.jpg", alt: "Foto 65", title:  "Faixa 22 - Foto 65" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_66.jpg", alt: "Foto 66", title:  "Faixa 22 - Foto 66" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_67.jpg", alt: "Foto 67", title:  "Faixa 23 - Foto 67" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_68.jpg", alt: "Foto 68", title:  "Faixa 23 - Foto 68" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_69.jpg", alt: "Foto 69", title:  "Faixa 23 - Foto 69" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_70.jpg", alt: "Foto 70", title:  "Faixa 24 - Foto 70" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_71.jpg", alt: "Foto 71", title:  "Faixa 24 - Foto 71" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_72.jpg", alt: "Foto 72", title:  "Faixa 24 - Foto 72" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_73.jpg", alt: "Foto 73", title:  "Faixa 25 - Foto 73" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_74.jpg", alt: "Foto 74", title:  "Faixa 25 - Foto 74" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_75.jpg", alt: "Foto 75", title:  "Faixa 25 - Foto 75" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_76.jpg", alt: "Foto 76", title:  "Faixa 26 - Foto 76" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_77.jpg", alt: "Foto 77", title:  "Faixa 26 - Foto 77" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_78.jpg", alt: "Foto 78", title:  "Faixa 26 - Foto 78" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_79.jpg", alt: "Foto 79", title:  "Faixa 27 - Foto 79" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_80.jpg", alt: "Foto 80", title:  "Faixa 27 - Foto 80" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_81.jpg", alt: "Foto 81", title:  "Faixa 27 - Foto 81" },

		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_82.jpg", alt: "Foto 82", title:   "Faixa 28 - Foto 82" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_83.jpg", alt: "Foto 83", title:   "Faixa 28 - Foto 83" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_84.jpg", alt: "Foto 84", title:   "Faixa 28 - Foto 84" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_85.jpg", alt: "Foto 85", title:   "Faixa 29 - Foto 85" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_86.jpg", alt: "Foto 86", title:   "Faixa 29 - Foto 86" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_87.jpg", alt: "Foto 87", title:   "Faixa 29 - Foto 87" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_88.jpg", alt: "Foto 88", title:   "Faixa 30 - Foto 88" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_89.jpg", alt: "Foto 89", title:   "Faixa 30 - Foto 89" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_90.jpg", alt: "Foto 90", title:   "Faixa 30 - Foto 90" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_91.jpg", alt: "Foto 91", title:   "Faixa 31 - Foto 91" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_92.jpg", alt: "Foto 92", title:   "Faixa 31 - Foto 92" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_93.jpg", alt: "Foto 93", title:   "Faixa 31 - Foto 93" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_94.jpg", alt: "Foto 94", title:   "Faixa 32 - Foto 94" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_95.jpg", alt: "Foto 95", title:   "Faixa 32 - Foto 95" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_96.jpg", alt: "Foto 96", title:   "Faixa 32 - Foto 96" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_97.jpg", alt: "Foto 97", title:   "Faixa 33 - Foto 97" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_98.jpg", alt: "Foto 98", title:   "Faixa 33 - Foto 98" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_99.jpg", alt: "Foto 99", title:   "Faixa 33 - Foto 99" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_100.jpg", alt: "Foto 100", title:  "Faixa 34 - Foto 100" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_101.jpg", alt: "Foto 101", title:  "Faixa 34 - Foto 101" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_102.jpg", alt: "Foto 102", title:  "Faixa 34 - Foto 102" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_103.jpg", alt: "Foto 103", title:  "Faixa 35 - Foto 103" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_104.jpg", alt: "Foto 104", title:  "Faixa 35 - Foto 104" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_105.jpg", alt: "Foto 105", title:  "Faixa 35 - Foto 105" },

		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_106.jpg", alt: "Foto 106", title:  "Faixa 36 - Foto 106" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_107.jpg", alt: "Foto 107", title:  "Faixa 36 - Foto 107" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_108.jpg", alt: "Foto 108", title:  "Faixa 36 - Foto 108" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_109.jpg", alt: "Foto 109", title:  "Faixa 37 - Foto 109" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_110.jpg", alt: "Foto 110", title:  "Faixa 37 - Foto 110" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_111.jpg", alt: "Foto 111", title:  "Faixa 37 - Foto 111" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_112.jpg", alt: "Foto 112", title:  "Faixa 38 - Foto 112" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_113.jpg", alt: "Foto 113", title:  "Faixa 38 - Foto 113" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_114.jpg", alt: "Foto 114", title:  "Faixa 38 - Foto 114" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_115.jpg", alt: "Foto 115", title:  "Faixa 39 - Foto 115" },
		{ src: "../img/clube_pictures_29/coquetel_basquete_2025/Foto_116.jpg", alt: "Foto 116", title:  "Faixa 39 - Foto 116" },

	];

	const galeriaCoquetelBasquete = document.getElementById('galeria-coquetel-basquete');

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
