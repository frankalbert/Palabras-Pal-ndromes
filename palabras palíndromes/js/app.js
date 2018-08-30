let resultado = document.querySelector(".resultado");
document
  .querySelector(".boton--comprobar")
  .addEventListener("click", isPalindroma);

function isPalindroma() {
  let palabra = document.querySelector(".texto--entrada").value,
    IsPalindroma = true;

  // FUNCIONA
  
  for (let i = 0; i < palabra.length; i++) {
    palabra[i] !== palabra[palabra.length - i - 1] ? (IsPalindroma = false) : "";
  }
  

  // HASTA AQUÍ FUNCIONA

  // OTRO MÉTODO
  /*
  let i = 0;

  while (IsPalindroma === true) {
    if (palabra[i] !== palabra[palabra.length - i - 1]) {
      IsPalindroma = false;
      break;
    }
    if (i === palabra.length) {
      break;
    }
    i = i + 1;
  }
*/
  // HASTA AQUÍ EL OTRO MÉTODO

  IsPalindroma === false
    ? ((resultado.style.color = "red"),
      (resultado.innerHTML = ` No es palindroma`))
    : ((resultado.style.color = "#007bff"),
      (resultado.innerHTML = ` Es palindroma`));
}
