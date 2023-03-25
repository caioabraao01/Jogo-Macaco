var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaMacacoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal'){
		//1500
	criaMacacoTempo = 1500
} else if (nivel === 'dificil'){
		//1000
	criaMacacoTempo = 1000
} else if (nivel === 'hardcore'){
	//750
	criaMacacoTempo = 750
}




function ajustaTamanhoPalcoJogo() {
	 altura = window.innerHeight
	 largura = window.innerWidth

	 console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){

		tempo -=1

		if(tempo < 0){
			clearInterval(cronometro)
			clearInterval(criaMacaco)
			window.location.href = 'vitoria.html'

		} else{
		document.getElementById('cronometro').innerHTML = tempo
	}

}, 1000)


function posicaoRandomica(){

	//remover o macaco anterior (caso exista)
	if(document.getElementById('macaco')){
		document.getElementById('macaco').remove()


		if(vidas > 3){

			window.location.href = 'fim_de_jogo.html'

		} else{
			document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"

			vidas++

		}
	}

	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)


	//criar o elemento html
	var macaco = document.createElement('img')
	macaco.src = 'imagens/macaco.png'
	macaco.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	macaco.style.left = posicaoX + 'px'
	macaco.style.top = posicaoY + 'px'
	macaco.style.position = 'absolute'
	macaco.id = 'macaco'
	macaco.onclick = function (){
		this.remove()
	}

	document.body.appendChild(macaco)
}

function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)
	

	switch (classe){
		case 0:
			return 'macaco1'

		case 1:
			return 'macaco2'

		case 2:
			return 'macaco3'
	}
}


function ladoAleatorio(){
	var classe = Math.floor(Math.random() * 2)

	switch (classe) {
		case 0:
			return 'ladoA'

		case 1:
			return 'ladoB'
	}
}