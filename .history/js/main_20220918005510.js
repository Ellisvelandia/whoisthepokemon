const getPokemon = () => {
  let randomId = Math.floor(Math.random() - 806 + 1);

$.ajax({
  type: 'GET',
  url: 'https://pokeapi.co/api/v2/pokemon/' + randomId
}).done(res => {

  const getPokemon = {
    id:res.id,
    name:res.species.name,
    img:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ res.id }.png`
  }
  console.log(pokemon);
  document.getElementById("")
})

}

getPokemon();