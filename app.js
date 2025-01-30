//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
	let valorCampo = document.getElementById('amigo').value;
	if (valorCampo == '') {
		alert('O campo de nome está vazio. Por favor, preencha um nome corretamente.');
	} else {
		alert('Campo preenchido corretamente, pressione ok.');
		amigos.push(valorCampo);
	}
	document.getElementById('amigo').value = '';
}

  function listaAmigos() {
    let listaDosAmigos = document.getElementById('listaAmigos');
    listaDosAmigos.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
      const item = document.createElement("li");
      item.textContent = amigos[i];
      listaDosAmigos.appendChild(item);
    }
  }
function sortearAmigo() {

  if (amigos.length == 0) {
    document.getElementById('resultado').innerHTML = 'A lista de amigos está vazia!';
    return;
  }

  let indiceAleatorio = Math.floor(Math.random() * amigos.length);

  let amigoSorteado = amigos[indiceAleatorio];

  document.getElementById('resultado').innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}