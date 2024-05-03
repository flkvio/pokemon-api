const getPokemon = async function () {
  // let url = "https://pokeapi.co/api/v2/pokemon";
  //let url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
  const searchBar = document.querySelector("#searchbar");
  let url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";


  const response = await fetch(url);
  const data = await response.json();

  
  data.results.forEach(async (pokemon) => {
    url = pokemon.url;
    const response = await fetch(url);
    const data = await response.json();

    if (false)){
      console.log(searchBar.value)
      // createPokemon(data);
  })




  data.results.forEach(async (pokemon) => {
    url = pokemon.url;
    const response = await fetch(url);
    const data = await response.json();
    // console.log(pokemon.name);
    // console.log(data.name);
    // console.log(data.order);

    // createPokemon(data);
  });
};

getPokemon();

const createPokemon = function (data) {
  let divCard = document.createElement("div");
  divCard.classList.add("card");
  //divCard.style.order = data.game_indices[19].game_index;
  divCard.style.order =
    data.game_indices[data.game_indices.length - 1].game_index;

  let divCardTitle = document.createElement("div");
  divCardTitle.classList.add("card-title");

  let spanCardId = document.createElement("span");
  spanCardId.classList.add("card-id");
  //spanCardId.innerText = `#${data.game_indices[19].game_index} `;
  spanCardId.innerText = `#${
    data.game_indices[data.game_indices.length - 1].game_index
  } `;

  let spanCardTitle = document.createElement("span");
  spanCardTitle.classList.add("card-title");
  spanCardTitle.innerText = `${data.name}`;

  let divType = document.createElement("div");
  divType.classList.add("type");

  let type1 = document.createElement("span");
  type1.innerText = `${data.types[0].type.name}`;
  type1.classList.add(`${data.types[0].type.name}`);
  type1.classList.add("type-1");

  let type2 = document.createElement("span");
  type2.classList.add("none");
  if (data.types.length > 1) {
    type2.innerText = `${data.types[1].type.name}`;
    type2.classList.remove("none");
    type2.classList.add(`${data.types[1].type.name}`);
    type2.classList.add("type-2");
  }

  let image = document.createElement("img");
  image.setAttribute("src", `${data.sprites.other.home.front_default}`);

  document.querySelector("main").appendChild(divCard);

  divCard.appendChild(divCardTitle);

  divCardTitle.appendChild(spanCardId);
  divCardTitle.appendChild(spanCardTitle);

  divCard.appendChild(divType);
  divType.appendChild(type1);
  divType.appendChild(type2);

  divCard.appendChild(image);
};

const searchBar = document.querySelector("#searchbar");

searchBar.addEventListener("keydown", function () {
  console.log(searchBar.value);
});
