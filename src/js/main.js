// const url = `https://pokeapi.co/api/v2/pokemon/7/`
const $container = document.querySelector("#container");
const $boton = document.querySelector("#boton");
const $textbox = document.querySelector("#numero");
async function getPokemon(numero) {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${numero}/`);
	const data = await response.json();
	console.log(data);
	return data;
}
function renderPokemon(pokemon) {
	return `
      <div style="text-align:center;"><img src="${pokemon.sprites.front_default}" width=200 height=200></div>
          <p style="text-align:center;font-size:25px;">Nombre: ${pokemon.name}</p>
      `;
}
async function render(numero) {
	const $pokemon = await getPokemon(numero);
	const html = renderPokemon($pokemon);
	$container.innerHTML = html;
}
async function handledPokemon() {
	render($textbox.value);
}
$boton.addEventListener("click", handledPokemon);
