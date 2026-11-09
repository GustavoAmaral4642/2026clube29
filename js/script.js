if(window.SimpleSlide){
	new SimpleSlide({
		slide: "conheca-club",
		time: 10000,
		nav: true
	});

	new SimpleSlide({
		slide: "eventos-club",
		time: 10000,
		nav: true
	});

}

if(window.SimpleAnime){
	new SimpleAnime();
}
if(window.SimpleForm){
	new SimpleForm({
		form: ".formphp",
		button: "#enviar",
		erro: "<div id='form-erro'><h2>Erro no Envio</h2><p>Um erro ocorreu, tente para o e-mail gustavo.lgac@gmail.com.</p></div>",
		sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso.</h2><p>Em breve, entraremos em contato com você.</p></div>",
	});
}

/* Início Controle para fazer animação no scroll */

function initAnimacaoScroll() {
	const sections = document.querySelectorAll(".js-scroll");

	if(sections.length){
		const windowMetade = window.innerHeight * 0.8;
		function animaScroll() {
			sections.forEach((section) => {
				const sectionTop = section.getBoundingClientRect().top;
				const isSectionVisible = (sectionTop - windowMetade) < 0;

				if(isSectionVisible){
					section.classList.add("ativo");
				}
			})
		}
		animaScroll();
		window.addEventListener("scroll", animaScroll); 
	}
}

initAnimacaoScroll();
/* fim Controle para fazer animação no scroll */