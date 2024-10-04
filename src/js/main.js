import data from './data.json';

// === Dom Selection ===
// First target the input
const inputEl = document.querySelector('input');
const rowE1 = document.querySelector('#row');

// show pokemom name in paragraph inside the row
for (let pokemonObj of data) {
  const div = document.createElement('div');
  div.classList.add('col');

  div.innerHTML = `
  <div class="card">
            <img
              src="${pokemonObj.image}"
              class="card-img-top"
              alt="${pokemonObj.name}"
            />
            <div class="card-body">
              <h5 class="card-title">${pokemonObj.name}</h5>
              <p class="card-text">
              ${pokemonObj.description}
              </p>
            </div>
          </div>`;

  rowE1.appendChild(div);
}

function renderPokemons(list) {}

// add to focus input
document.addEventListener('keypress', function (event) {
  if (event.key === '/') {
    event.preventDefault(); // esko (/) likhna nhi he
    inputEl.focus();
  }
});
