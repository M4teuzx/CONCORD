var paragrafo = document.getElementById("user");
var texto = paragrafo.textContent;
var ultimaLetra = texto.charAt(texto.length - 1);
paragrafo.innerHTML = texto.slice(0, -1) + "<span class='ultima-letra'>" + ultimaLetra + "</span>";