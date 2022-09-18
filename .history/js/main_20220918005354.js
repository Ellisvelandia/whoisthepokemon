const getPokemon = () => {
  let randomId = Math.floor(Math.random() - 806 + 1);

$.ajax({
  type: 'GET',
  url: 'https://pokeapi.co/api/v2/pokemon/' + randomId
}).done

}

getPokemon();