function setaImagem(){

//define a variável settings que conterá as configurações do slide
var settings = {
	/*Função que seta a imagem que aparecerá
	primeiro no slide*/
	primeiraImg: function(){
		/*captura a primeira tag <a> da div#slider e coloca numa 
		variável elemento*/
		elemento = document.querySelector("#slider a:first-child");
		/*Coloca a classe ativo na tag capturada*/
		elemento.classList.add("ativo");
		/*Chama a função anonima "legenda" e passa como parametro
		a variável elemento que acabamos de criar*/
		this.legenda(elemento);
	},

	/*Função anonima que coloca captura o atributo "alt" da tag
	<img> que tem como pai, o parametro determinado como "obj"
	e coloca como legenda do slideshow*/
	legenda: function(obj){
		/*captura o atributo "alt" ecoloca numa variável legenda*/
		var legenda = obj.querySelector("img").getAttribute("alt");

		/*coloca o html, que está dentro do atributo "alt" da variável legenda
		dentro da tag <figcaption> que neste caso é a nossa legenda
		do slideshow*/
		document.querySelector("figcaption").innerHTML = legenda;
	},
    //função slide
	slide: function(){
		elemento = document.querySelector(".ativo");
		if(elemento.nextElementSibling){
			elemento.nextElementSibling.classList.add("ativo");
			settings.legenda(elemento.nextElementSibling);
			elemento.classList.remove("ativo");
		}else {
			elemento.classList.remove("ativo");
			settings.primeiraImg();
		}
	},

	//função próximo
	proximo: function(){
		clearInterval(intervalo);
		elmento = document.querySelector(".ativo");

		if(elemento.nextElementSibling){
			elemento.nextElementSibling.classList.add("ativo");
			settings.legenda(elemento.nextElementSibling);
			elemento.classList.remove("ativo");
		}else {
			elemento.classList.remove("ativo");
			settings.primeiraImg();
		}
		intervalo = setInterval(settings.slide,4000);
	},

	//função anterior
	anterior: function() {
		clearInterval(intervalo);
		elemento = document.querySelector(".ativo");

		if(elemento.previousElementSibling){
			elemento.previousElementSibling.classList.add("ativo");
			settigns.legenda(elemento.previousElementSibling);
			elemento.classList.remove("ativo");
		}else {
			elemento.classList.remove("ativo");
			elemento = document.querySelector("a:last-child");
			elemento.classList.add("ativo");
			this.legenda(elemento);
		}
		intervalo = setInterval(settings.slide,4000);
	},

}

//chama o slide
settings.primeiraImg();

//chama a legenda
settings.legenda(elemento);

//chama o slide à um determinado tempo
var intervalo = setInterval(settings.slide, 4000);

document.querySelector(".next").addEventListener("click",settings.proximo,false);
document.querySelector(".prev").addEventListener("click",settings.anterior,false);
}

//Faz com que a função setaImagem seja executada qundo a janela for carregada
window.addEventListener("load",setaImagem,false);
